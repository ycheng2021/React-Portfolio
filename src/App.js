import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs"
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact"
import Home from "./components/Home"

function App() {
    return (
        <Router>
            <NavTabs />
            <Routes>
                <Route 
                    path="/"
                    element={<Home/>}
                />
                <Route 
                    path="/about"
                    element={<About/>}
                />
                <Route 
                    path="/portfolio"
                    element={<Portfolio/>}
                />
                <Route 
                    path="/skills"
                    element={<Skills/>}
                />
                <Route 
                    path="/contact"
                    element={<Contact/>}
                />
                <Route 
                    path="/resume"
                    element={<Resume/>}
                />
                <Route 
                    path="*"
                    element={<h1>Wrong Page!!</h1>}
                />
            </Routes>
        </Router>
    )
}

export default App;