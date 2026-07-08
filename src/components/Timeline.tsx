import React from "react";
import '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Expected 06/2027"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">B.Tech - Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Malla Reddy Engineering College, Hyderabad</h4>
            <p>Pursuing undergraduate engineering track. Core performance marker maintaining an overall CGPA of 8.78 / 10.0.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Completed 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Job Simulation</h3>
            <h4 className="vertical-timeline-element-subtitle">Deloitte (Virtual)</h4>
            <p>Performed extensive statistical evaluations, engineered insight visuals, and presented findings on real-world datasets.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Completed 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Intermediate (Class XII)</h3>
            <h4 className="vertical-timeline-element-subtitle">Sri Prakash Junior College</h4>
            <p>Focused engineering track foundation. Completed with a final academic CGPA of 8.8 / 10.0.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;