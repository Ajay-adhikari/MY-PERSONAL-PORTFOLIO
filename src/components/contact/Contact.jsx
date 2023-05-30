import React from "react";

import "./contact.css";
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_44xghff', 'template_1iaidnc', form.current, 'kEtWUv_u0cquhy6HA')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ajayadhi23@gmail.com</h5>
            <a href="mailto:dummyajayadhi23@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Not Available</h5>
            <a href="mailto:dummyajayadhi23@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>ajayadhi@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+xyz" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name"  required/>
          <input type="email" name="email" placeholder=" Your Email" required />
          <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
