import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import { personalInfo } from "../../data";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 40,
        strings: [
          "Forward Deployed Engineer",
          "Tech Lead",
          "Logistics & Supply Chain Specialist",
          "Fullstack Dev with AI Agentic Flows",
          "Enterprise Application Architect",
          "Associate Technical Lead",
          "Full Stack Specialist (Java, Vue, React)",
          "SRE & DevOps Engineer",
          "Scrum Master"
        ],
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Vihanga Liyanage" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="badge">Tech Lead • Logistics &amp; Supply Chain • AI Agentic Flows</div>
          <h2>Hi There, I'm</h2>
          <h1>Vihanga Liyanage</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p className="bioText">{personalInfo.bio}</p>

          <div className="ctaButtons">
            <a href="#agentic" className="btn btn-primary">
              AI Agentic Work
            </a>
            <a href="#work" className="btn btn-outline">
              Experience
            </a>
            <a
              href={personalInfo.githubRepos}
              target="_blank"
              rel="noreferrer"
              className="btn btn-github"
            >
              GitHub Repositories
            </a>
          </div>
        </div>
        <a href="#agentic" className="scrollDown">
          <img src="assets/down.png" alt="Scroll Down" />
        </a>
      </div>
    </div>
  );
}
