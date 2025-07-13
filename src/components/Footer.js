import classes from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import useInView from "../hooks/useInView";


import React from "react";

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <footer
      ref={ref}
      className={`${classes.footer} ${inView ? "scroll-show" : "scroll-hidden"}`}
    >
    <div className={classes.footerDiv}>
      <h3>Mikey24/7</h3>
    </div>
    <div className={classes.footerDiv}>
      <h3>© Copyright 2025. All rights reserved</h3>
    </div>
    <div className={classes.linksDiv}>
      <a href="https://linkedin.com/in/michael-umeokoli-8780">
        <FaLinkedin size="1.8rem" />
      </a>
      <a href="https://github.com/mikey247">
        <FaGithub size="1.8rem" />
      </a>
      <a href="https://wa.me/+447824025518">
        <FaWhatsappSquare size="1.8rem" />
      </a>
    </div>
    </footer>
  );
};

export default Footer;
