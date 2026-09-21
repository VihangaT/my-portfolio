import React from "react";
import "./testimonial.scss";
import { achievementsData, educationData, referencesData } from "../../data";

export default function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <div className="container">
        <div className="header">
          <span className="sectionBadge">Recognition & Foundation</span>
          <h1>Achievements, Education & References</h1>
          <p className="subtitle">
            Notable honors, academic background, and professional endorsements.
          </p>
        </div>

        <div className="sectionsGrid">
          <div className="column">
            <h2>🏆 Achievements & Honors</h2>
            <div className="cardsList">
              {achievementsData.map((item) => (
                <div className="infoCard" key={item.id}>
                  <div className="cardTop">
                    <h3>{item.title}</h3>
                    <span className="yearBadge">{item.year}</span>
                  </div>
                  <h4>{item.organization}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="column">
            <h2>🎓 Education & Qualifications</h2>
            <div className="cardsList">
              {educationData.map((item) => (
                <div className="infoCard" key={item.id}>
                  <div className="cardTop">
                    <h3>{item.degree}</h3>
                  </div>
                  <h4>{item.institution}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="referencesSection">
          <h2>🤝 Professional References</h2>
          <div className="referencesGrid">
            {referencesData.map((ref, idx) => (
              <div className="refCard" key={idx}>
                <h3>{ref.name}</h3>
                <h4>
                  {ref.title} – <span>{ref.company}</span>
                </h4>
                <div className="contactDetails">
                  {ref.email && <a href={`mailto:${ref.email}`}>📧 {ref.email}</a>}
                  {ref.phone && <span>📞 {ref.phone}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
