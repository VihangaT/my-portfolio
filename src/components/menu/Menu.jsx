import React from "react";
import "./menu.scss";
import { personalInfo } from "../../data";

export default function Menu({ menuOpen, setmenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#agentic">AI & Agentic Work</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#work">Experience</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#testimonial">Achievements & References</a>
        </li>
        <li onClick={() => setmenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li className="githubMenuItem">
          <a
            href={personalInfo.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="githubDirectBtn"
          >
            GitHub Repositories ➔
          </a>
        </li>
      </ul>
    </div>
  );
}
