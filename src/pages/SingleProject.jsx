import React from "react";
import "../styles/style.css";
import Button from "@mui/material/Button";
import NavTabs from "../components/NavTabs";

const Project = () => {

  // when the user is directed to the link, pull out the last word from the url to determine which data to display
  const url = window.location.href;
  var project = url.replace(/\/$/, "").split("/").splice(-1, 1)[0];

  // create variables to store data for each project
  const home = {
    title: "Home Improvement",
    description:
      "Home Improvement is an app created for small businesses. Businesses will have the option to add employees and customers into the database and be able to assign their employees to customers in order to complete a home improvement project. Once assigned, the project will have information such as the customer’s address, the project’s scope of work, time, date, price, and any other information.",
    images: { 1: "/home1.png", 2: "/home2.png", 3: "/home3.png" },
    links: {
      github: "https://github.com/EthanP94/Home-Improvement",
      deployed: "https://cryptic-coast-15012.herokuapp.com",
    },
  };

  const car = {
    title: "El Caro Modelo",
    description:
      "El Caro Modelo is a web application that allows users to add an used car to the marketplace to sell as well as look for second hand cars to purchase. Users are able to browse through the car listings but will need to login in order to post any listings. The used car API inlcudes the following details: car make, model, year, price, mileage, color, salvage title, transmission, and image.",
    images: { 1: "/car1.png", 2: "/car2.png", 3: "/car3.png" },
    links: {
      github: "https://github.com/LinnetteCapul/El-Caro-Modelo",
      deployed: "https://obscure-basin-42076.herokuapp.com/",
    },
  };

  const anime = {
    title: "The Grand Line Anime",
    description:
      "The Grand Line Anime is a web application built for anime lovers to search for animes by name, genre, or top 10. These features will bring the user to a new webpage filled with information on that anime, including a title, image, rating, genres, status, synopsis, and two buttons. The merchandise button will redirect the user to a merch link and the watch button will redirect to a streaming link of that anime.",
    images: { 1: "/anime1.png", 2: "/anime2.png", 3: "/anime3.png" },
    links: {
      github: "https://github.com/EthanP94/The-Grand-Line",
      deployed: "https://ethanp94.github.io/The-Grand-Line/",
    },
  };

  const quiz = {
    title: "Code Quiz",
    description:
      "Code Quiz is a simple web game that is built with HTML, CSS, and Javascript. The game begins with 60 seconds and will count down by seconds once the player clicks the Start button. The quiz consists of five simple coding questions and score is generated based on how fast and accurate the player answers. The player will then submit initial with the score to be added to the highscore board.",
    images: { 1: "/quiz1.png", 2: "/quiz2.png", 3: "/quiz3.png" },
    links: {
      github: "https://github.com/ycheng2021/Code-Quiz",
      deployed: "https://ycheng2021.github.io/Code-Quiz/",
    },
  };

  const blog = {
    title: "Ultimate Tech Blog",
    main: "",
    description:
      "Ultimate Tech Blog is a web application that allows users to make posts and comments on technology related topics. User can view the posts and choose to add post or comment by logging into their account. Users are also given the option to update or delete their posts through the dashboard. Once the user is logged in, the session will be saved and makes it more convenient to come back to the site within a certain period of time. When the session ends, the website will ask the user to login again.",
    images: { 1: "/blog1.png", 2: "/blog2.png", 3: "/blog3.png" },
    links: {
      github: "https://github.com/ycheng2021/Ultimate-Tech-Blog",
      deployed: "https://ancient-peak-76701.herokuapp.com/",
    },
  };

  const weather = {
    title: "Forecaster",
    description:
      " Forecaster is a simplified web application designed to generate weather information based on the city searched. The webpage will provide the daily weather as well as a five day forecast, which includes information like date, weather condition, humidity, wind speed, and UV index. The user is also able to save information through the search history, once the button for that search is generated, the user is able to easily access the information again by clicking the buttons.",
    images: { 1: "/weather1.png", 2: "/weather2.png", 3: "/weather3.png" },
    links: {
      github: "https://github.com/ycheng2021/Weather-Dashboard",
      deployed: "https://ycheng2021.github.io/Weather-Dashboard/",
    },
  };
  // depending which work user selects, it will pull up the information from the variables above
  if (project === "home-improvement") {
    project = home;
  } else if (project === "el-caro-modelo") {
    project = car;
  } else if (project === "the-grand-line-anime") {
    project = anime;
  } else if (project === "ultimate-tech-blog") {
    project = blog;
  } else if (project === "weather-dashboard") {
    project = weather;
  } else {
    project = quiz;
  }

  return (
    <div className="project-container">
      <NavTabs />
      <h1 className="project-title">{project.title}</h1>
      <Button
        variant="contained"
        key={project.key}
        href={project.links.github}
        target="_blank"
        size="small"
        className="project-links"
      >
        Github
      </Button>
      <Button
        variant="contained"
        key={project.key}
        href={project.links.deployed}
        target="_blank"
        size="small"
        className="project-links"
      >
        Deployed
      </Button>
      <p className="project-description">{project.description}</p>
      <br></br>
      <div className="image-container">
        <img
          src={project.images[1]}
          alt="design for the webpage"
          className="project-image"
        />
        <img
          src={project.images[2]}
          alt="design for the webpage"
          className="project-image"
        />
        <img
          src={project.images[3]}
          alt="design for the webpage"
          className="project-image"
        />
      </div>
    </div>
  );
};

export default Project;
