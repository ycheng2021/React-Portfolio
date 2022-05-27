import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Homepage() {
  return (
    <div className="home">
      <div className="pageslist">
        <Link to="/about">
          <Button key="about" sx={{ my: 2, color: "white", display: "block" }}>
            About
          </Button>
        </Link>
        <Link to="/portfolio">
          <Button
            key="portfolio"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Portfolio
          </Button>
        </Link>
        <a
          href="/"
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
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Contact
          </Button>
        </a>
        <Link to="/Yang_Cheng_Resume.PDF" target="_blank">
          <Button key="resume" sx={{ my: 2, color: "white", display: "block" }}>
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
