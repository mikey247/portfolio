import classes from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import useInView from "../hooks/useInView";


import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className={`col-md-12 mt-md-0 mt-3 ${classes.footerDiv}`}>
          <h3 className="text-uppercase">Mikey24/7</h3>
        </div>

        {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

        <div className={`col-md-12 mt-md-0 mt-3 ${classes.footerDiv}`}>
          <h3 className="text-uppercase">
            © Copyright 2025. All rights reserved
          </h3>
        </div>

        {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

        <div className={`col-md-12 mt-md-0 mt-3 ${classes.footerDiv}`}>
          <div className={classes.linksDiv}>
            <a
              href="https://linkedin.com/in/michael-umeokoli-8780"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="1.8rem" />
            </a>{" "}
            <a
              href="https://github.com/mikey247"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub size="1.8rem" />
            </a>
            <a
              href="https://wa.me/+447824025518"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare size="1.8rem" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
