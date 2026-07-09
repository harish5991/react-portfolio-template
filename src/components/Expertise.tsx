import React from "react";
import '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ];

const labelsSecond = [
    "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "KNN", "Scikit-learn"
];

const labelsThird = [
    "Microsoft Azure AI", "Power BI", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Interpretation"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Technical Skills</h1>
        <div className="skills-grid">
            <div className="skill">
                <h3>Data Engineering & Languages</h3>
                <p>Writing highly efficient programmatic code, executing complex queries to structure, parse, and pull deep trends from databases.</p>
                <div className="flex-chips">
                    {labelsFirst.map((label, index) => (<Chip key={index} label={label} />))}
                </div>
            </div>

            <div className="skill">
                <h3>Machine Learning & Modeling</h3>
                <p>Constructing, checking, and deploying multiple machine learning models to identify anomalies or predict complex classification structures.</p>
                <div className="flex-chips">
                    {labelsSecond.map((label, index) => (<Chip key={index} label={label} />))}
                </div>
            </div>

            <div className="skill">
                <h3>Cloud Infrastructure & Analytics</h3>
                <p>Leveraging Microsoft Azure and cloud environments to implement smart data pipelines, visualizing metrics smoothly using interactive charts.</p>
                <div className="flex-chips">
                    {labelsThird.map((label, index) => (<Chip key={index} label={label} />))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;