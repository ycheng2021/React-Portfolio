import React from "react";
import "../styles/style.css";
import NavTabs from "../components/NavTabs";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import homeImage from "../images/home.png";
import carImage from "../images/car.png";
import animeImage from "../images/anime.png";
import weatherImage from "../images/weather.png";
import ultimateImage from "../images/blog.png";
import quizImage from "../images/quiz.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <NavTabs />
      <div className="portfolio-container">
        <div className="portfolio">
          <h1 className="greeting">Selection of Works</h1>
          <div className="portfolio-container">
            <div className="project-cards">
              <Link to="home-improvement">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    image={homeImage}
                    alt="Login page for Home Improvement App"
                  />
                </Card>
              </Link>
            </div>
            <div className="project-cards">
              <Link to="el-caro-modelo">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    image={carImage}
                    alt="Homepage for car selling/searching website"
                  />
                </Card>
              </Link>
            </div>
            <div className="project-cards">
              <Link to="the-grand-line-anime">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    image={animeImage}
                    alt="Homepage for anime searching website"
                  />
                </Card>
              </Link>
            </div>
            <div className="project-cards">
              <Link to="ultimate-tech-blog">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"                 
                    image={ultimateImage}
                    alt="Homepage for tech-related blogs"
                  />
                </Card>
              </Link>
            </div>
            <div className="project-cards">
              <Link to="weather-dashboard">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"                   
                    image={weatherImage}
                    alt="a weather dashboard"
                  />
                </Card>
              </Link>
            </div>
            <div className="project-cards">
              <Link to="code-quiz">
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"                 
                    image={quizImage}
                    alt="coding quiz starting page"
                  />
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
