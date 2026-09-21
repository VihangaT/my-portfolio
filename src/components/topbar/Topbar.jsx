import React from "react";
import "./topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";
import { personalInfo } from "../../data";

export default function Topbar({ menuOpen, setmenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {"<VihangaLiyanage/>"}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>{personalInfo.email}</span>
          </div>
          <a
            href={personalInfo.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="itemContainer githubLink"
          >
            <GitHub className="icon" />
            <span>GitHub Repositories</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
