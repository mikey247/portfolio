import classes from "./Navbar.module.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className={classes.navbar}>
          <a href="/">Mikey24/7</a>

          <div className={classes.links}>
            <a href="/">Contact</a>
            <a href="/">Projects</a>
            <a href="/">Resume</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
