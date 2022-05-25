import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"

function App() {
    return (
        <Router>
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
                    path="*"
                    element={<h1>Wrong Page!!</h1>}
                />
            </Routes>         
            <Footer />
        </Router>
    )
}

export default App;