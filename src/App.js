import React from "react";
import { Switch } from "react-router";
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
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {projects.map((project) => (
          <Route
            key={project.name}
            path={`/portfolio/:${project.name}`}
            element={<SingleProject />}
          />
        ))}
        <Route path="*" element={<h1>Wrong Page!!</h1>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
