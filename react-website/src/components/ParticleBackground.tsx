import { useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  function getCSSColor(name: string): string {
    const element = document.createElement("div");

    element.style.color = `var(${name})`;
    document.body.appendChild(element);

    const resolved = getComputedStyle(element).color;

    element.remove();

    return resolved;
  }

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },

      particles: {
        number: {
          value: Math.sqrt(Math.pow(window.screen.width, 2) + Math.pow(window.screen.height, 2)) / 10,
          density: {
            enable: true,
            value_area: 500
          },
        },
        opacity: {
          value: 0
        },


        size: {
          value: {
            min: 1,
            max: 4,
          },
        },

        links: {
          enable: true,
          distance: 100,
          color: getCSSColor("--particle-links"),
          opacity: isDark ? 0.25 : 0.5,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
        },
      },

      detectRetina: true,
    }),
    [isDark],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <ParticlesProvider init={initParticles}>
        <Particles id="tsparticles" options={options} />
      </ParticlesProvider>
    </div>
  );
}