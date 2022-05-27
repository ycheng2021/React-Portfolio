import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SingleProject from "./pages/SingleProject";
import "./App.css";

function App() {
  const projects = [
    { name: "home-improvement" },
    { name: "el-caro-modelo" },
    { name: "the-grand-line-anime" },
    { name: "ultimate-tech-blog" },
    { name: "weather-dashboard" },
    { name: "code-quiz" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/react-porfolio" element={<Home />} />
        <Route path="react-portfolio/about" element={<About />} />
        <Route path="react-portfolio/portfolio" element={<Portfolio />} />
        {projects.map((project) => (
          <Route
            key={project.name}
            path={`react-portfolio/portfolio/:${project.name}`}
            element={<SingleProject />}
          />
        ))}
        <Route path="*" element={<h1>Wrong Page!!</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
