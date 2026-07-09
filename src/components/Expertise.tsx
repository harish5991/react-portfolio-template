import React from "react";
import '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'; // 1. Imported the Avatar component
import '../assets/styles/Expertise.scss';
import pythonIcon from '../assets/images/python.svg'; 
import mysqlIcon from '../assets/images/sql.png';
import pandasIcon from '../assets/images/pandas.svg';
import numpyIcon from '../assets/images/numpy.svg';
import jupyterIcon from '../assets/images/jupyter.svg';
import azureIcon from '../assets/images/azure.svg';
import scikitIcon from '../assets/images/scikitlearn.svg';
import powerbiIcon from '../assets/images/powerbi.png'; 

const labelsFirst = [
    { name: "Python", icon: pythonIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Pandas", icon: pandasIcon },
    { name: "NumPy", icon: numpyIcon },
    { name: "Jupyter", icon: jupyterIcon },
];

const labelsSecond = [
    { name: "Logistic Regression", icon: null },
    { name: "Decision Trees", icon: null },
    { name: "Random Forest", icon: null },
    { name: "SVM", icon: null },
    { name: "KNN", icon: null },
    { name: "Scikit-learn", icon: scikitIcon }
];

const labelsThird = [
    { name: "Microsoft Azure AI", icon: azureIcon },
    { name: "Power BI", icon: powerbiIcon },
    { name: "Matplotlib", icon: null },
    { name: "Seaborn", icon: null },
    { name: "Statistical Analysis", icon: null },
    { name: "Data Interpretation", icon: null }
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
                {labelsFirst.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.name}
                    className="chip"
                    avatar={
                      skill.icon ? (
                        <Avatar 
                          src={skill.icon} 
                          alt={skill.name} 
                          imgProps={{ style: { objectFit: 'contain' } }} // Prevents clipping
                        />
                      ) : undefined
                    }
                  />
                ))}
                </div>
            </div>

            <div className="skill">
                <h3>Machine Learning & Modeling</h3>
                <p>Constructing, checking, and deploying multiple machine learning models to identify anomalies or predict complex classification structures.</p>
                <div className="flex-chips">
                {labelsSecond.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.name}
                    className="chip"
                    avatar={
                      skill.icon ? (
                        <Avatar 
                          src={skill.icon} 
                          alt={skill.name} 
                          imgProps={{ style: { objectFit: 'contain' } }}
                        />
                      ) : undefined
                    }
                  />
                ))}
                </div>
            </div>

            <div className="skill">
                <h3>Cloud Infrastructure & Analytics</h3>
                <p>Leveraging Microsoft Azure and cloud environments to implement smart data pipelines, visualizing metrics smoothly using interactive charts.</p>
                <div className="flex-chips">
                {labelsThird.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.name}
                    className="chip"
                    avatar={
                      skill.icon ? (
                        <Avatar 
                          src={skill.icon} 
                          alt={skill.name} 
                          imgProps={{ style: { objectFit: 'contain' } }}
                        />
                      ) : undefined
                    }
                  />
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;