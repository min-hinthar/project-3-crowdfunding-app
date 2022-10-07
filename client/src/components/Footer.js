import React from 'react';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="mainFooter">
        <div className="footerText">
        <h4 className="studentName">Min Khant</h4>
          <a className="gitHub" href="https://github.com/min-hinthar/">
            GitHub Profile
          </a>
        </div>
        <div className="footerText">
        <h4 className="studentName">Elaine Liao</h4>
        <a className="gitHub" href="https://github.com/ehliao/">
            GitHub Profile
          </a>
        </div>
        <div className="footerText">
        <h4 className="studentName">Alexa Punzalan</h4>
        <a className="gitHub" href="https://github.com/AlexaP2022/">
            GitHub Profile
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
