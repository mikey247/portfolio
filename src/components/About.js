import classes from "./About.module.css";
import { HashLink } from "react-router-hash-link";
// import Container from "react-bootstrap/Container"

const About = () => {
  return (
    <div className={classes.aboutContainer} id="about">
      <div className={classes.aboutContainerDiv}>
        <div className={classes.aboutText}>
          <h1>ABOUT ME🙊🙉🙈</h1>
          <hr className={classes.underline} />
          <p>
            I’m a Full-stack Developer located in Lagos. I have a serious
            passion for user-centric design, development and dynamic user
            experiences on both backend and frontend. Here's my{" "}
            <a
              href="https://docs.google.com/document/d/1UYpYT6i4p2alhmIEaGkAQbKcPBktZ3MYsd7b2EGPlIo/edit?usp=sharing"
              className={classes.resume}
            >
              <span>resume</span>
            </a>{" "}
            with skills and experience listed.
          </p>
          <p>
            Well-organised person, problem solver, independent employee with
            high attention to detail.{" "}
            <span className={classes.messi}>Messi </span>Fan🐐, NBA🏀 and
            NFL🏈,Indoors person, Love movies🎬 and the occasional book📚. A
            easy-going guy with management abilities and aspirations.
          </p>
          <p>
            Absolute Team-player😀(love teams..) also able to work alone to
            acheive set goals, I like to talk less and listen more and I derive
            joy and satisfaction from bringing ideas and designs to life, I
            learn by understanding the system and obsessed with knowing what
            part is moving the other that way I can easily manipulate the
            system. I write sometimes, check out some of my{" "}
            <a href="https://dev.to/mikey247" className={classes.resume}>
              <span>articles</span>
            </a>
          </p>

          <HashLink to="#contact" smooth className={classes.magic}>
            <p>Let's make magic🧙🏾‍♂️✨</p>
          </HashLink>
        </div>
        <img src={require("./green.gif")} alt="" />
      </div>
    </div>
  );
};

export default About;
