import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ABout image" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Fresher/Student</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Client</h5>
                <small>Not yet</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5+</small>
              </article>
            </div>
            <p>
            Welcome to my React portfolio! I am Ajay Adhikari, a BTech Computer Science student at Shri Ram Murti Smarak College of Engineering and Technology. With a passion for coding and problem-solving, I specialize in C++ , Data Structures  and have gained experience as a full-stack developer, focusing on the MERN stack. Through my studies, I have developed a solid foundation in computer science principles and algorithms. Leveraging my skills in JavaScript and the MERN stack, I have created dynamic and user-friendly web applications. I am eager to collaborate, learn, and continue building innovative solutions. Let's connect and bring your ideas to life!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      
    </section>
  );
};

export default About;
