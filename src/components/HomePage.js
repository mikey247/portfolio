import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.intro}>
      <h2>Hi 👋🏾 there I'm</h2>
      <h1 className={classes.glitch}>
        <span aria-hidden="true"> Mike Umeokoli</span>
        Mike Umeokoli 👨🏾‍💻
        <span aria-hidden="true"> Mike Umeokoli</span>
      </h1>
      <h2>Full-stack web developer</h2>
    </div>
  );
};

export default HomePage;
