import React from "react";
import "./agentic.scss";
import { aiAgentHighlights, personalInfo } from "../../data";

export default function Agentic() {
  return (
    <div className="agentic" id="agentic">
      <div className="container">
        <div className="header">
          <span className="sectionBadge">Specialization & Innovation</span>
          <h1>Fullstack Development with AI Agentic Flows</h1>
          <p className="subtitle">
            Engineered fullstack application platforms (Java, Vue, React, Python) seamlessly integrated with autonomous AI agentic workflows and SRE automation.
          </p>
        </div>

        <div className="cardsGrid">
          {aiAgentHighlights.map((item) => (
            <div className="agentCard" key={item.id}>
              <div className="cardHeader">
                <span className="icon">{item.icon}</span>
                <span className="badge">AI Agentic Flow</span>
              </div>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
              <div className="techStack">
                {item.tech.map((t, idx) => (
                  <span className="tag" key={idx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="githubBanner">
          <div className="bannerContent">
            <h3>Explore AI Agentic Flow Repositories</h3>
            <p>
              Check out fullstack codebases, automation plugins, and repositories directly on GitHub.
            </p>
          </div>
          <a
            href={personalInfo.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="btnGithub"
          >
            Visit GitHub Repositories ➔
          </a>
        </div>
      </div>
    </div>
  );
}
