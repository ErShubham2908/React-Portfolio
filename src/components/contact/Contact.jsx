import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { SiGithub, SiWhatsapp } from "react-icons/si";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mishubhamk007@gmail.com</h5>
            <a href="mailto:mishubhamk007@gmail.com" target="_blank" rel="noreferrer noopener">Send a message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>https://bit.ly/Linkedin_SK2908</h5>
            <a href="https://www.linkedin.com/in/shubhamkitian007/" target="_blank" rel="noreferrer noopener">
              Send a message
            </a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <SiGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>https://github.com/ErShubham2908</h5>
            <a href="https://github.com/ErShubham2908" target="_blank" rel="noreferrer noopener">Checkout Repositories</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatapp</h4>
            <h5>https://bit.ly/Whatapp_SK2908</h5>
            <a href="https://api.whatsapp.com/send?phone=917549831252" rel="noreferrer noopener" target="_blank">Send a Message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <FaPhone className="contact__option-icon" />
            <h4>Call</h4>
            <h5>+91-7281924141</h5>
            <a href="+91-7281924141" target="_blank" rel="noreferrer noopener">Call Now</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
