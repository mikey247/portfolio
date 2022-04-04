import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.intro}>
      <h4>Hi 👋🏾 there I'm</h4>
      <h1 className={classes.glitch}>
        <span aria-hidden="true"> Mike Umeokoli</span>
        Mike Umeokoli 👨🏾‍💻
        <span aria-hidden="true"> Mike Umeokoli</span>
      </h1>
    </div>
  );
};

export default HomePage;
