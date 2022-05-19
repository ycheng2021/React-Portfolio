import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs"
import Home from "./components/Home";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer"

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
                    path="/portfolio"
                    element={<Portfolio/>}
                />
                <Route 
                    path="*"
                    element={<h1>Wrong Page!!</h1>}
                />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;