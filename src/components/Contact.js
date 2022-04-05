import emailjs from "@emailjs/browser";
import { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pef553', 'template_jqs2oul', form.current, '65Jp6sba8Xy0J_h50')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()
 }

  return (
    <div className={classes.contactContainer} id="contact">
      <div className={classes.contactForm}>
      <h1>Contact Me ✉</h1>
      <hr className={classes.underline} />
      <p>I’m interested in freelance,internship and entry-level opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
      <form ref={form} action="" onSubmit={sendEmail}>
        <input type="text" name="name" className={classes.senderName} placeholder="Name" required />

        <input type="email" name="email" className={classes.email} placeholder="Your Email" required />
        <br />
        <input type="text" name="subject"className={classes.subject} placeholder="Subject" required />
        <br />
        <textarea name="message"className={classes.message} cols="30" rows="10" placeholder="Your Message" required/>
        <br />
        <input type="submit" value="Send" className={classes.send} />
      </form>
      </div>
    </div>
  );
};

export default Contact;
