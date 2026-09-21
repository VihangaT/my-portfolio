import React, { useState } from "react";
import "./skills.scss";
import { skillsCategories } from "../../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="header">
          <span className="sectionBadge">Technical Stack</span>
          <h1>Skills & Proficiencies</h1>
          <p className="subtitle">
            A comprehensive matrix of technical tools, frameworks, engineering methodologies, and AI capabilities.
          </p>
        </div>

        <div className="categoryTabs">
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`tabBtn ${activeCategory === idx ? "active" : ""}`}
              onClick={() => setActiveCategory(idx)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="skillsGrid">
          {skillsCategories[activeCategory].skills.map((skill, index) => (
            <div className="skillCard" key={index}>
              <div className="skillInfo">
                <span className="skillName">{skill.name}</span>
                <span className="skillLevel">{skill.level}</span>
              </div>
              <div className="progressBar">
                <div
                  className="progressFill"
                  style={{
                    width:
                      skill.level === "Expert"
                        ? "95%"
                        : skill.level === "Advanced"
                        ? "85%"
                        : "75%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="summaryBoxes">
          <div className="summaryBox">
            <h3>Backend & Cloud</h3>
            <p>Java (Spring Boot), Python (Flask/Django), Node.js, Kubernetes, Docker, Ansible, AWS, Jenkins, SQL & NoSQL Databases.</p>
          </div>
          <div className="summaryBox">
            <h3>Frontend & UX</h3>
            <p>Vue.js, React, TypeScript, JavaScript, Angular, HTML5/CSS3, SCSS, UI/UX Design System standards.</p>
          </div>
          <div className="summaryBox">
            <h3>AI & Automation</h3>
            <p>Autonomous AI Agents, Agentic Platforms, LLM APIs, Vector RAG Search, UiPath RPA, VS Code Plugin Development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
