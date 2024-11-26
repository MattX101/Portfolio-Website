import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/AboutWebsite.tsx";
import Contact from "./pages/ContactMe.tsx";
import React from "react";

export default function App() {
    return (
        <div className="bg-primary-light-s1l1 min-h-screen">
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
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);