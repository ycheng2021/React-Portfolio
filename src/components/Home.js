import React from 'react';
import '../styles/home.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiAdobe } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { SiVisualstudiocode } from 'react-icons/si'


export default function Homepage() {
    return (
      <div className="about">
        <h1 className="greeting">Hi, I am Anna</h1>
        <p className="self-introduction">An aspiring full-stack developer with experience implementing
          front-end and back-end code. Fast learner with a drive to learn and master new technologies to enhance website
          interactions. Team player with excellent communication skills.</p>
        <div className="skills-container">
          <h2>Skills</h2>
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
              <DiGit className="icons" />
              <h5 className="icon-name">Git</h5>
            </div>
            <div className="skill">
              <SiAdobe className="icons" />
              <h5 className="icon-name">Adobe Suite</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }