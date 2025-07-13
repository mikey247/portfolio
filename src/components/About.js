import classes from "./About.module.css";
import { HashLink } from "react-router-hash-link";
import useInView from "../hooks/useInView";
// import Container from "react-bootstrap/Container"

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`${classes.aboutContainer} ${inView ? "scroll-show" : "scroll-hidden"}`}
      id="about"
    >
      <div className={classes.aboutContainerDiv}>
        <div className={classes.aboutText}>
          <h1>ABOUT ME🙊🙉🙈</h1>
          <hr className={classes.underline} />
          <p>
            I’m a Software and AI Engineer based in Manchester and currently
            finishing an MSc in Computer Science. My focus is on NLP,
            recommender systems and cloud development.
          </p>
          <p>
            I collaborate with research teams at the University of Manchester
            and help train large language models at Scale AI. Past projects
            include building IoT dashboards for Enviroheat.
          </p>
          <p>
            Away from work I'm a huge <span className={classes.messi}>Messi </span>
            fan, a movie lover and an occasional writer on{" "}
            <a
              href="https://dev.to/mikey247"
              className={classes.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>dev.to</span>
            </a>
          </p>

          <HashLink to="#contact" smooth className={classes.magic}>
            <p>Let's make magic🧙🏾‍♂️✨</p>
          </HashLink>
        </div>
        <img src={require("./green.gif")} alt="Decorative green animation" />
      </div>
    </div>
  );
};

export default About;
