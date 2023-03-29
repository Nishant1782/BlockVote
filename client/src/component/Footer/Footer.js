import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          {" "}
          <a
            className="profile"
            href="https://github.com/arlbibek/dVoting"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made by{" "}
          <a
            className="profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            20IT070 NISHANT MIYANI &
            20IT152 LOPA THAKKAR
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
