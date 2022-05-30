import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home">
      <div className="pageslist">
        <Link to="/about" className="home-options">
          About
        </Link>
        <Link to="/portfolio" className="home-options">
          Portfolio
        </Link>
        <a
          href="/"
          className="home-options"
          onClick={(e) => {
            let footer = document.getElementById("footer");
            e.preventDefault();
            footer &&
              footer.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            window.history.pushState("footer", "footer", "/contact");
          }}
        >
          Contact
        </a>
        <Link to="/Yang_Cheng_Resume.PDF" className="home-options" target="_blank">
          Resume
        </Link>
      </div>
    </div>
  );
}
