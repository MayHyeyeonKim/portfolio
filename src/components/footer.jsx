import React, { memo } from "react";
import "../styles/footer.scss";
import { IoArrowUp } from "react-icons/io5";

import { Github } from "@icons-pack/react-simple-icons";
import { Linkedin } from "@icons-pack/react-simple-icons";

const Footer = memo(({ handleScroll }) => {
  return (
    <footer className="footer-section">
            <div className="footer-contents">
        <button onClick={() => handleScroll()} className="topButton">
          <IoArrowUp />
        </button>
      </div>
      <div className="footer-contents">
        <a href="https://github.com/MayHyeyeonKim" className="footer-link">
          <Github color="#000" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/hykim-may/" className="footer-link">
          <Linkedin color="#000" size={30} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
