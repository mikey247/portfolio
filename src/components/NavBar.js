import classes from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <div className={classes.navContainer}>
      <nav>
        <div className={classes.navbar}>
          <a href="/">Mikey24/7</a>

          <div className={classes.links}>
            <HashLink to="#about" smooth>
              About
            </HashLink>

            <HashLink to="#projects" smooth>
              Projects
            </HashLink>

            <HashLink to="#contact" smooth>
              Contact
            </HashLink>

            <a href="https://docs.google.com/document/d/1UYpYT6i4p2alhmIEaGkAQbKcPBktZ3MYsd7b2EGPlIo/edit?usp=sharing" >Resume</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
