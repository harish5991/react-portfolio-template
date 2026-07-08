import React from "react";
import nsd from '../assets/images/nsd.png'; 
import fdc from '../assets/images/fdc.png';
import govtconnect from '../assets/images/govtconnect.png'; // Make sure a placeholder or image exists for mock03
import '../assets/styles/Project.scss';

function Project() {
  return(
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><img src={nsd} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><h2>Network Security Analysis Using Data Science</h2></a>
          <p>Built a data pipeline to collect and analyze network traffic logs to detect anomalies and cybersecurity threats. Applied machine learning algorithms to identify suspicious behaviors and strengthen defense mechanisms.</p>
        </div>

        <div className="project">
          <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><img src={fdc} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/harish5991" target="_blank" rel="noreferrer"><h2>Comparison of Classification Algorithms</h2></a>
          <p>Evaluated and compared multiple machine learning algorithms including Logistic Regression, Decision Trees, Random Forest, SVM, and KNN on benchmark datasets. Documented performance across precision, recall, and ROC-AUC metrics.</p>
        </div>

        <div className="project">
          <a href="https://github.com/harish5991/govt-connect" target="_blank" rel="noreferrer"><img src={govtconnect} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/harish5991/govt-connect" target="_blank" rel="noreferrer"><h2>Govt-Connect</h2></a>
          <p>Designed and developed a centralized digital interface to streamline communication and data transparency between administrative bodies and citizens. Focused on secure portal design, robust data handling, and accessible user workflows.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;