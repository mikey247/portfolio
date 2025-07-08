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
            I’m a Software and AI Engineer based in Manchester and currently
            completing an MSc in Computer Science at Manchester Metropolitan
            University. My work focuses on NLP, recommender systems and cloud
            development. Here's my{" "}
            <a
              href="https://docs.google.com/document/d/1cfmfENqLZVctN3yGNY52mFLM0Tp-vcqdYbXQH-6gvro/edit?usp=sharing"
              download={true}
              className={classes.resume}
              target="_blank"
              rel="noreferrer"
            >
              <span>resume</span>
            </a>{" "}
            with skills and experience listed.
          </p>
          <p>
            At the University of Manchester I collaborate with research teams to
            develop reliable software and data pipelines. I also contribute to
            model training at Scale AI and previously built IoT dashboards for
            Enviroheat. These experiences have strengthened my problem solving
            skills and attention to detail.
          </p>
          <p>
            Away from work I'm a huge <span className={classes.messi}>Messi </span>
            fan and love movies and the occasional book. I'm comfortable leading
            or collaborating in teams and enjoy bringing ideas to life by
            understanding how each part of a system fits together. I write
            sometimes—check out some of my{" "}
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
