import classes from "./HomePage.module.css";
import { HashLink } from "react-router-hash-link";

const HomePage = () => {
  return (
    <div className={classes.intro}>
      <div>
        <h2>Hi 👋🏾 there I'm</h2>
        <h1 className={classes.glitch}>
          <span aria-hidden="true"> Mike Umeokoli</span>
          Mike Umeokoli 👨🏾‍💻
          <span aria-hidden="true"> Mike Umeokoli</span>
        </h1>
        <h2>Full-stack web developer</h2>
        <HashLink to="#contact" smooth>
          <button>Hire me</button>{" "}
        </HashLink>
      </div>

      <img src={require("./green.gif")} alt="" />
    </div>
  );
};

export default HomePage;
