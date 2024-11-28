import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/AboutWebsite.tsx";
import Contact from "./pages/ContactMe.tsx";
import BtnToggleColourMode from "./components/elements/buttons/BtnToggleColourMode.tsx"
import React from "react";

export default function App() {
    return (
        <div id="globalColourMode" className="">
            <div className="bg-primary-light-s1l1 dark:bg-primary-dark-s1l1 min-h-screen">
                <BtnToggleColourMode />

                <BrowserRouter>
                    <Routes>
                        <Route index element={<Landing />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);