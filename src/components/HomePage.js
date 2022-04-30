import classes from "./HomePage.module.css";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className={classes.intro}>
      <h2>Hi 👋🏾 there, I'm</h2>
      <h1 className={classes.glitch}>
        <span aria-hidden="true"> Mike Umeokoli</span>
        Mike Umeokoli 👨🏾‍💻
        <span aria-hidden="true"> Mike Umeokoli</span>
      </h1>
      <h2>Full-stack web developer</h2>
      <div className={classes.heroLinks}>
        <a href="https://linkedin.com/in/michael-umeokoli-8780">
          <FaLinkedin size="3rem" />
        </a>{" "}
        <a href="https://github.com/mikey247">
          {" "}
          <FaGithub size="3rem" />
        </a>
        <a href="https://wa.me/+2348109867870">
          <FaWhatsappSquare size="3rem" />{" "}
        </a>
      </div>
      <br />
      <br />
      <HashLink to="#contact" smooth>
        <button>Contact Me</button>{" "}
      </HashLink>
    </div>
  );
};

export default HomePage;
