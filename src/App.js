import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs"
import About from "./components/Home";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact"

function App() {
    return (
        <Router>
            <NavTabs />
            <Routes>
                <Route 
                    path="/"
                    element={<About/>}
                />
                <Route 
                    path="/portfolio"
                    element={<Portfolio/>}
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