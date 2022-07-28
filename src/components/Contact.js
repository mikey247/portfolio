import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import classes from "./Contact.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pef553",
        "template_jqs2oul",
        form.current,
        "65Jp6sba8Xy0J_h50"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    handleShow();
    setTimeout(() => {
      setShow(false);
    }, 8000);
  };

  if (!show) {
    return (
      <div className={classes.contactContainer} id="contact">
        <div className={classes.contactForm}>
          <h1>Contact Me ✉</h1>
          <hr className={classes.underline} />
          <p>
            I’m interested in freelance,internship and entry-level opportunities
            – especially ambitious or large projects. However, if you have other
            request or question, don’t hesitate to use the form.
          </p>
          <form ref={form} action="" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className={classes.senderName}
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              className={classes.email}
              placeholder="Your Email"
              required
            />
            {/* <br /> */}
            <input
              type="text"
              name="subject"
              className={classes.subject}
              placeholder="Subject"
              required
            />
            {/* <br /> */}
            <textarea
              name="message"
              className={classes.message}
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            />
            {/* <br /> */}
            <input type="submit" value="Send" className={classes.send} />
            {/* <button className={classes.send}>submit</button> */}
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <div className={classes.modal}>
            <Modal.Body>
              <h3>Sent🕊, Talk soon!✌🏾</h3>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                <span className={classes.buttonText}> Close</span>
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  }
};

export default Contact;
