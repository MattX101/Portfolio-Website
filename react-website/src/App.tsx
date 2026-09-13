import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";

import RuntimeNodeEditor from "./pages/projects/RuntimeNodeEditorPage.tsx";
import ImageGenerator from "./pages/projects/ImageGeneratorPage.tsx";
import Utils from "./pages/projects/UtilsPage.tsx";

import BtnToggleColourMode from "./components/elements/buttons/BtnToggleColourMode.tsx"
import ParticleBackground from "./components/ParticleBackground.tsx";

export default function App() {
    return (
        <div id="globalColourMode" className="">
            <div className="bg-primary-light-s1l1 dark:bg-primary-dark-s1l6 min-h-screen">
                <ParticleBackground />
                <BtnToggleColourMode />

                <BrowserRouter>
                    <Routes>
                        <Route index element={<Landing />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/home" element={<Home />} />

                        <Route path="/home/editor" element={<RuntimeNodeEditor />} />
                        <Route path="/home/image_generator" element={<ImageGenerator />} />
                        <Route path="/home/utils" element={<Utils />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);
