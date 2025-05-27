import React from "react";
import "../css/HeroSection.css";

const HeroSection = () => (
  <section className="hero-section">
    <h1 className="hero-title">
      <span>Beautiful </span>
      <span className="gradient-text">single-page</span>
      <br />
      <span className="gradient-text">resumes</span>
      <span> within minutes.</span>
    </h1>
    <p className="hero-subtitle">
      Resuminator gives you fastest and the simplest resume building experience. Apply to your dream job, 2x faster!
    </p>
    <button className="cta-button">Start building your resume →</button>
  </section>
);

export default HeroSection;
