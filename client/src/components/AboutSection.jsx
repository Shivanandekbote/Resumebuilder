import React from "react";
import "../css/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        Better than your doc resume, faster<br />
        than a <span className="highlight-purple">LaTeX editor</span>
      </h2>
      <p className="about-subtitle">
        Landing a sweet spot between customization and ease <span role="img" aria-label="lightning">⚡</span>
      </p>
    </section>
  );
};

export default AboutSection;
