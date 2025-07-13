import classes from "./HomePage.module.css";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import useInView from "../hooks/useInView";

const HomePage = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={`${classes.intro} ${inView ? "scroll-show" : "scroll-hidden"}`}>
      <h2>Hi 👋🏾 there, I'm</h2>
      <h1 className={classes.glitch}>
        <span aria-hidden="true"> Michael Umeokoli</span>
        Michael Umeokoli 👨🏾‍💻
        <span aria-hidden="true"> Michael Umeokoli</span>
      </h1>
      <h2>Software and AI Engineer</h2>

      <p className={classes.tagline}>Building the future, one line at a time</p>
      <div className={classes.heroLinks}>
        <a
          href="https://linkedin.com/in/michael-umeokoli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="3rem" />
        </a>{" "}
        <a
          href="https://github.com/mikey247"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaGithub size="3rem" />
        </a>
        <a
          href="https://wa.me/+447824025518"
          target="_blank"
          rel="noopener noreferrer"
        >
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
