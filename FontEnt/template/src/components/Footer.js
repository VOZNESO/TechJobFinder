// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <div>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
