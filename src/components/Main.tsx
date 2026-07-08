import React from "react";
import ram  from '../assets/images/ram.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ram} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social-icons">
            <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ram-harish-7872b229b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Satya Phani Ram Harish M</h1>
          <p>Data Analyst & Computer Science Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ram-harish-7872b229b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;