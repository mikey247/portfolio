// import classes from "./Navbar.module.css";
// import { HashLink } from "react-router-hash-link";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"


const NavigationBar = () => {
  return (
    <>
    {/* <div className={classes.navContainer}>
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
    </div> */}



<Navbar collapseOnSelect  expand="lg" variant="dark" >
      {/* <nav> */}
  <Container  >
  <Navbar.Brand href="/">Mikey24/7</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"></Nav>
    <Nav>
     <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link  href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
    {/* </nav> */}
 </Navbar>
    </>
  );
};

export default NavigationBar;
