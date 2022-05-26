import React from "react";
import "../styles/style.css";
import Button from "@mui/material/Button";
import NavTabs from "../components/NavTabs";
import { useParams } from "react-router-dom";

const Project = () => {
  const url = window.location.href;
  var project = url.replace(/\/$/, "").split("/").splice(-1, 1)[0];
  console.log(project)

  const home = {
    title: "Home Improvement",
    key: "homeImprovement",
    main: "",
    description:
      "Home Improvement is an app created for small businesses. Businesses will have the option to add employees and customers into the database and be able to assign their employees to customers in order to complete a home improvement project. Once assigned, the project will have information such as the customer’s address, the project’s scope of work, time, date, price, and any other information.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/EthanP94/Home-Improvement",
      deployed: "https://cryptic-coast-15012.herokuapp.com",
    },
  };

  const car = {
    title: "El Caro Modelo",
    key: "elCaroModelo",
    main: "",
    description:
      "El Caro Modelo is a web application that allows users to add an used car to the marketplace to sell as well as look for second hand cars to purchase. Users are able to browse through the car listings but will need to login in order to post any listings. The used car API inlcudes the following details: car make, model, year, price, mileage, color, salvage title, transmission, and image.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/LinnetteCapul/El-Caro-Modelo",
      deployed: "https://obscure-basin-42076.herokuapp.com/",
    },
  };

  const anime = {
    title: "The Grand Line Anime",
    key: "grandLineAnime",
    main: "",
    description:
      "The Grand Line Anime is a web application built for anime lovers to search for animes by name, genre, or top 10. These features will bring the user to a new webpage filled with information on that anime, including a title, image, rating, genres, status, synopsis, and two buttons. The merchandise button will redirect the user to a merch link and the watch button will redirect to a streaming link of that anime.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/EthanP94/The-Grand-Line",
      deployed: "https://ethanp94.github.io/The-Grand-Line/",
    },
  };

  const quiz = {
    title: "Code Quiz",
    key: "codeQuiz",
    main: "",
    description:
      "Code Quiz is a simple web game that is built with HTML, CSS, and Javascript. The game begins with 60 seconds and will count down by seconds once the player clicks the Start button. The quiz consists of five simple coding questions and score is generated based on how fast and accurate the player answers. The player will then submit initial with the score to be added to the highscore board.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/ycheng2021/Code-Quiz",
      deployed: "https://ycheng2021.github.io/Code-Quiz/",
    },
  };

  const blog = {
    title: "Ultimate Tech Blog",
    key: "ultimateTechBlog",
    main: "",
    description:
      "Ultimate Tech Blog is a web application that allows users to make posts and comments on technology related topics. User can view the posts and choose to add post or comment by logging into their account. Users are also given the option to update or delete their posts through the dashboard. Once the user is logged in, the session will be saved and makes it more convenient to come back to the site within a certain period of time. When the session ends, the website will ask the user to login again.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/ycheng2021/Ultimate-Tech-Blog",
      deployed: "https://ancient-peak-76701.herokuapp.com/",
    },
  };

  const weather = {
    title: "Forecaster",
    key: "weatherDashboard",
    main: "",
    description:
      " Forecaster is a simplified web application designed to generate weather information based on the city searched. The webpage will provide the daily weather as well as a five day forecast, which includes information like date, weather condition, humidity, wind speed, and UV index. The user is also able to save information through the search history, once the button for that search is generated, the user is able to easily access the information again by clicking the buttons.",
    images: { 0: "../images/", 1: "../images/", 2: "../images/" },
    links: {
      github: "https://github.com/ycheng2021/Weather-Dashboard",
      deployed: "https://ycheng2021.github.io/Weather-Dashboard/",
    },
  };
  
  return (
    <div className="project-container">
      <NavTabs />
      {/* <h1>{projectName.title}</h1>
      <Button
        key={projectName.key}
        href={projectName.github}
        target="_blank"
        size="small"
        className="link-btn"
      >
        Github
      </Button>
      <Button
        key={projectName.key}
        href={projectName.deployed}
        target="_blank"
        size="small"
        className="link-btn"
      >
        Deployed
      </Button>

      <p>{projectName.description}</p>
      <p>2 IMGs HERE</p> */}
    </div>
  );
};

export default Project;
