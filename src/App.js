import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs"
import About from "./components/Home";
import Portfolio from "./components/pages/Portfolio";

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
                    path="*"
                    element={<h1>Wrong Page!!</h1>}
                />
            </Routes>
        </Router>
    )
}

export default App;