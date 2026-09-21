import React, { useState } from "react";
import "./contact.scss";
import { personalInfo } from "../../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'fallback', message: string }

  const triggerMailtoFallback = (customSubject, customMessage, customName, customEmail) => {
    const subject = encodeURIComponent(
      customSubject?.trim() || `Portfolio Inquiry from ${customName || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Vihanga,\n\n${customMessage || ""}\n\n---\nSender: ${customName || "Visitor"}\nEmail: ${customEmail || ""}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataPayload = new FormData(e.target);
    formDataPayload.append("access_key", "77972511-7da7-4cd5-897e-b964d5ed77fe");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataPayload
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Success! Your message has been sent directly to Vihanga's inbox."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.warn("Web3Forms response:", data);
        setSubmitStatus({
          type: "fallback",
          message: data.message || "Connecting via email client fallback..."
        });
        triggerMailtoFallback(formData.subject, formData.message, formData.name, formData.email);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        type: "fallback",
        message: "Something went wrong. Launching your email client as fallback..."
      });
      triggerMailtoFallback(formData.subject, formData.message, formData.name, formData.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <div className="header">
            <span className="sectionBadge">Get In Touch</span>
            <h1>Let's Connect & Collaborate</h1>
            <p className="subtitle">
              Have an exciting project, AI Agent initiative, or engineering leadership opportunity? Reach out directly!
            </p>
          </div>

          <div className="contactCards">
            <div className="card">
              <span className="icon">📧</span>
              <div className="info">
                <span className="label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="card">
              <span className="icon">📞</span>
              <div className="info">
                <span className="label">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="card">
              <span className="icon">📍</span>
              <div className="info">
                <span className="label">Location</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="socialLinks">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="socialBtn github"
            >
              GitHub Profile
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="socialBtn linkedin"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="right">
          <form onSubmit={handleSubmit} className="contactForm">
            <h2>Send a Message</h2>
            <div className="inputGroup">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Smith"
                disabled={isSubmitting}
              />
            </div>

            <div className="inputGroup">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="inputGroup">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="AI Agents / Enterprise Collaboration"
                disabled={isSubmitting}
              />
            </div>

            <div className="inputGroup">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submitBtn" disabled={isSubmitting}>
              {isSubmitting ? "Sending Message..." : "Send Message ➔"}
            </button>

            <button
              type="button"
              className="directMailtoBtn"
              onClick={() =>
                triggerMailtoFallback(
                  formData.subject,
                  formData.message,
                  formData.name,
                  formData.email
                )
              }
            >
              ✉️ Prefer email app? Click to send directly via mailto
            </button>

            {submitStatus && submitStatus.type === "success" && (
              <div className="successMsg">
                <p>✓ {submitStatus.message}</p>
                <p style={{ marginTop: "6px", fontSize: "12px", opacity: 0.9 }}>
                  Vihanga will review your note and get back to you shortly.
                </p>
              </div>
            )}

            {submitStatus && submitStatus.type === "fallback" && (
              <div className="fallbackMsg">
                <p>✓ {submitStatus.message}</p>
                <p style={{ marginTop: "6px", fontSize: "12px", opacity: 0.9 }}>
                  You can also write directly to{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ color: "#38bdf8", textDecoration: "underline" }}
                  >
                    {personalInfo.email}
                  </a>.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
