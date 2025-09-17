import "./Contact.css";
import Bg from "../../assets/contact-bg.png";
import Location from "../../assets/contact-location.png";
import Call from "../../assets/contact-call.png";
import Mail from "../../assets/contact-mail.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53shxhb",   // Service ID
        "template_96i4eji",  // Template ID
        form.current,
        "8D6AnpyRj5ss70uO7"    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <img src={Bg} alt="" className="contact-bg-image" />

      <div className="first-container">
        <div className="first-container-heading">
          <h3>Tell Us About Your Project</h3>
        </div>

        <form ref={form} onSubmit={sendEmail} className="input-textarea">
          <div className="input-text-area">
            <div className="inputs">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="input-name"
                required
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                className="input-phone-number"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email ID"
                className="input-email-id"
                required
              />
            </div>
            <div className="textarea">
              <textarea
                name="message"
                placeholder="Project Detail"
                className="textarea-message"
                required
              ></textarea>
            </div>
          </div>

          <p className="note">
            <span>Note: </span> Your idea is 100% protected by our non disclosure agreement.
          </p>
          <div className="submit-btn">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div className="second-container">
        <div className="second-container-heading">
          <h3>Get In Touch With Us</h3>
        </div>
        <div className="contact-info">
          <div className="contact-infomation">
            <div className="contact-address">
              <img src={Location} alt="location" />
              <p>Address</p>
            </div>
            <div className="para">
              <p>182 B, Golf Tower, Pitampura</p>
              <p>New Delhi- 110034</p>
            </div>
          </div>
          <div className="contact-infomation">
            <div className="contact-call">
              <img src={Call} alt="call" />
              <p>Call PinnateAi</p>
            </div>
            <div className="para">
              <p>+91 7970959155</p>
            </div>
          </div>
          <div className="contact-infomation">
            <div className="contact-mail">
              <img src={Mail} alt="mail" />
              <p>Drop an Email</p>
            </div>
            <div className="para">
              <p>pinnateai@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
