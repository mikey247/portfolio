import classes from "./About.module.css";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div className={classes.aboutContainer} id="about">
      <div className={classes.aboutText}>
        <h1>ABOUT ME🙊🙉🙈</h1>
        <p>
          I’m a Full-stack Developer located in Lagos. I have a serious passion
          for user-centric design, development and dynamic user experiences on
          both backend and frontend.
        </p>
        <p>
          Well-organised person, problem solver, independent employee with high
          attention to detail.{" "}
          <span className={classes.messi}>Messi Fan🐐</span>, NBA🏀 and
          NFL🏈,Indoors person, Love movies🎬 and the occasional book📚. A
          easy-going person with management abilities and aspirations.
        </p>
        <p>
          Absolute Team-player😀(love love this) also able to work alone to
          acheive set goals, I like to talk less and listen more and I derive
          joy and satisfaction from bringing ideas and designs to life, I learn
          by understanding the system and obsessed with knowing what part is
          moving the other that way I can easily manipulate the system.
        </p>

        <HashLink to="#contact">
          <p>Let's make magic🧙🏾‍♂️✨</p>
        </HashLink>
      </div>
      <img src={require("./green.gif")} alt="" />
    </div>
  );
};

export default About;
