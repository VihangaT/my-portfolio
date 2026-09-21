import React, { useState } from "react";
import "./work.scss";
import { workExperience } from "../../data";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState("timeline"); // "timeline" shows all 6 roles simultaneously, "slider" shows focused card

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : workExperience.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < workExperience.length - 1 ? prev + 1 : 0));
  };

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    if (viewMode === "timeline") {
      const el = document.getElementById(`milestone-${index}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const prevIndex = currentSlide > 0 ? currentSlide - 1 : workExperience.length - 1;
  const nextIndex = currentSlide < workExperience.length - 1 ? currentSlide + 1 : 0;

  return (
    <div className="work" id="work">
      <div className="workHeader">
        <span className="sectionBadge">Career Milestones & Leadership</span>
        <h1>Work Experience</h1>
        <p className="subtitle">
          Demonstrated leadership and technical excellence across Tech Lead, Associate Technical Lead, Senior Engineer, and Consultant roles with deep Logistics & Supply Chain Management domain expertise.
        </p>

        {/* View Mode Switcher */}
        <div className="viewModeSwitcher">
          <button
            className={`modeBtn ${viewMode === "timeline" ? "active" : ""}`}
            onClick={() => setViewMode("timeline")}
          >
            📜 Full Career Timeline (All 6 Roles)
          </button>
          <button
            className={`modeBtn ${viewMode === "slider" ? "active" : ""}`}
            onClick={() => setViewMode("slider")}
          >
            🎴 Focused Slide View
          </button>
        </div>

        {/* Interactive Milestones Navigation Bar (All 6 Roles) */}
        <div className="milestoneTabs">
          {workExperience.map((item, index) => (
            <button
              key={item.id}
              className={`milestoneTab ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <div className="tabIcon">{item.icon}</div>
              <div className="tabContent">
                <span className="tabRole">{item.role}</span>
                <span className="tabCompany">{item.company} • {item.period.split("–")[0].trim()}</span>
              </div>
              <span className="tabBadge">{item.badge}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE MODE: Displays ALL 6 roles simultaneously */}
      {viewMode === "timeline" && (
        <div className="timelineContainer">
          <div className="timelineTrack"></div>
          {workExperience.map((item, index) => (
            <div
              className={`timelineItem ${currentSlide === index ? "highlighted" : ""}`}
              key={item.id}
              id={`milestone-${index}`}
            >
              <div className="timelineNode">
                <span className="nodeIcon">{item.icon}</span>
              </div>

              <div className="itemCard">
                <div className="left">
                  <div className="leftContainer">
                    <div className="topMeta">
                      <span className="badge">{item.badge}</span>
                      <span className="period">{item.period}</span>
                      {item.domain && (
                        <span className="domainBadge">📦 {item.domain}</span>
                      )}
                    </div>
                    <h2>{item.role}</h2>
                    <h3 className="company">
                      {item.company} <span className="location">• {item.location}</span>
                    </h3>
                    <p className="desc">{item.description}</p>

                    <ul className="bulletList">
                      {item.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="right">
                  <div className="rightCard">
                    <div className="companyLogoContainer">
                      <h2>{item.company}</h2>
                    </div>
                    <div className="infoBlock">
                      <span className="label">Timeline</span>
                      <span className="val">{item.period}</span>
                    </div>
                    <div className="infoBlock">
                      <span className="label">Location</span>
                      <span className="val">{item.location}</span>
                    </div>
                    <div className="infoBlock">
                      <span className="label">Domain Focus</span>
                      <span className="val">{item.domain || "Enterprise Software"}</span>
                    </div>
                    <div className="infoBlock">
                      <span className="label">Role Tier</span>
                      <span className="val">{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SLIDER MODE: Focused Single Card View */}
      {viewMode === "slider" && (
        <div className="sliderWrapper">
          <div className="slideContainer">
            {workExperience.map((item, index) => (
              <div
                className={`slideCard ${currentSlide === index ? "active" : ""}`}
                key={item.id}
              >
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="topMeta">
                        <span className="badge">{item.badge}</span>
                        <span className="period">{item.period}</span>
                        {item.domain && (
                          <span className="domainBadge">📦 {item.domain}</span>
                        )}
                      </div>
                      <h2>{item.role}</h2>
                      <h3 className="company">
                        {item.company} <span className="location">• {item.location}</span>
                      </h3>
                      <p className="desc">{item.description}</p>

                      <ul className="bulletList">
                        {item.highlights.map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="right">
                    <div className="rightCard">
                      <div className="companyLogoContainer">
                        <h2>{item.company}</h2>
                      </div>
                      <div className="infoBlock">
                        <span className="label">Timeline</span>
                        <span className="val">{item.period}</span>
                      </div>
                      <div className="infoBlock">
                        <span className="label">Location</span>
                        <span className="val">{item.location}</span>
                      </div>
                      <div className="infoBlock">
                        <span className="label">Domain Focus</span>
                        <span className="val">{item.domain || "Enterprise Software"}</span>
                      </div>
                      <div className="infoBlock">
                        <span className="label">Role Tier</span>
                        <span className="val">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls with role preview */}
          <div className="sliderControls">
            <button className="navBtn prev" onClick={handlePrev}>
              ❮ Prev: {workExperience[prevIndex].role}
            </button>
            <div className="pagination">
              {workExperience.map((item, index) => (
                <span
                  key={item.id}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  title={`${item.role} @ ${item.company}`}
                />
              ))}
            </div>
            <button className="navBtn next" onClick={handleNext}>
              Next: {workExperience[nextIndex].role} ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
