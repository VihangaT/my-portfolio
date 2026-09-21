import React, { useState } from "react";
import "./portfolio.scss";
import { portfolioCategories, portfolioItems, personalInfo } from "../../data";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const handleImageError = (e) => {
    e.target.src = "assets/projects/ai-dlc.svg";
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="header">
          <span className="sectionBadge">Featured GitHub Repositories</span>
          <h1>Projects & Domain Engineering Work</h1>
          <p className="subtitle">
            Highlighting key open-source repositories and engineering architectures across Enterprise Logistics & Supply Chain Management, Fullstack AI Agentic Workflows, and SRE/DevOps.
          </p>
        </div>

        <ul className="categories">
          {portfolioCategories.map((cat) => (
            <li
              key={cat.id}
              className={selectedCategory === cat.id ? "active" : ""}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title}
            </li>
          ))}
        </ul>

        <div className="projectsGrid">
          {filteredItems.map((item) => (
            <div className="projectCard" key={item.id}>
              <div className="imgBox">
                <img
                  src={item.img}
                  alt={item.title}
                  onError={handleImageError}
                />
                <div className="overlay">
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="viewRepoBtn"
                  >
                    View on GitHub ➔
                  </a>
                </div>
              </div>
              <div className="cardBody">
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="cardTitleLink"
                >
                  <h3>{item.title}</h3>
                </a>
                <p>{item.desc}</p>
                <div className="tags">
                  {item.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="cardFooter">
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="directRepoLink"
                  >
                    Explore Repository <span>➔</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footerCTA">
          <p>Want to inspect more source code and full repositories?</p>
          <a
            href={personalInfo.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="btnGithubMain"
          >
            Explore All Repositories (github.com/VihangaT)
          </a>
        </div>
      </div>
    </div>
  );
}
