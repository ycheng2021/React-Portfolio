import NavTabs from "../components/NavTabs";
import React from "react";
import "../styles/style.css";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si"
import { SiMongodb } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";

const About = () => {
  // self introduction plus skills description
  return (
    <div className="about-page">
      <NavTabs />
      <div className="about">
        <img
          src="/anna-image.png"
          alt="front view photography of Anna Cheng"
          className="portrait"
        ></img>
        <h1 className="greeting">I am Anna</h1>
        <p className="self-introduction">
          Hi there! I am a full stack web developer with a background in art. I
          hope to use the skills I learned to combine art and coding to create
          cool projects and websites! Always looking to create things that will
          challenge me and teach me new skills or experiences! Currently
          studying UI/UX and data structures, as well as coding a new project
          with the MERN stack to improve my skills.
        </p>
        <div className="skills-container">
          <h2>Skills and Tools</h2>
          <div className="skills-list">
            <div className="skill">
              <FaHtml5 className="icons" />
              <h5 className="icon-name">HTML</h5>
            </div>
            <div className="skill">
              <FaCss3Alt className="icons" />
              <h5 className="icon-name">CSS</h5>
            </div>
            <div className="skill">
              <FaJsSquare className="icons" />
              <h5 className="icon-name">Javascript</h5>
            </div>
            <div className="skill">
              <SiVisualstudiocode className="icons" />
              <h5 className="icon-name">VS Code</h5>
            </div>
            <div className="skill">
              <SiJquery className="icons" />
              <h5 className="icon-name">JQuery</h5>
            </div>
            <div className="skill">
              <FaBootstrap className="icons" />
              <h5 className="icon-name">Bootstrap</h5>
            </div>
            <div className="skill">
              <FaGithub className="icons" />
              <h5 className="icon-name">Github</h5>
            </div>
            <div className="skill">
              <FaReact className="icons" />
              <h5 className="icon-name">React</h5>
            </div>
            <div className="skill">
              <SiAdobe className="icons" />
              <h5 className="icon-name">Adobe Suite</h5>
            </div>
            <div className="skill">
              <GrMysql className="icons" />
              <h5 className="icon-name">MySQL</h5>
            </div>
            <div className="skill">
              <DiGit className="icons" />
              <h5 className="icon-name">Git</h5>
            </div>
            <div className="skill">
              <SiMongodb className="icons" />
              <h5 className="icon-name">MongoDB</h5>
            </div>
            <div className="skill">
              <FaNodeJs className="icons" />
              <h5 className="icon-name">Nodejs</h5>
            </div>
            <div className="skill">
              <SiInsomnia className="icons" />
              <h5 className="icon-name">Insomnia</h5>
            </div>
            <div className="skill">
              <SiHeroku className="icons" />
              <h5 className="icon-name">Heroku</h5>
            </div>
            <div className="skill">
              <FaFigma className="icons" />
              <h5 className="icon-name">Figma</h5>
            </div>
            <div className="skill">
              <SiMaterialui  className="icons" />
              <h5 className="icon-name">Material UI</h5>
            </div>
          </div>
          <div className="soft-skills">
            <h2>Soft Skills</h2>
              <p>✽ Attention to Detail ✽ Communication ✽ Fast Learner ✽ Teamwork ✽ Adaptability ✽ Problem Solving ✽ Self-reliance</p>             
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
