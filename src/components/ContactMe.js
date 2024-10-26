import React from "react";
import { FaCat, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <FaCat className="cat" />

      <a
        href="www.linkedin.com/in/ved-thakur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/ved74thakur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.instagram.com/ved74thakur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="icon" />
      </a>
    </div>
  );
};

export default ContactMe;
