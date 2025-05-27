import React from "react";
import "../css/FeaturesSection.css";
import featureImage from "../assests/feature-image.jpg"; // <-- Correct import

const FeaturesSection = () => (
  <section className="features-section">
    <div className="feature-row">
      <div className="feature-text">
        <h3 className="feature-title highlight-yellow">Easy Toggles</h3>
        <p>
          Keep the data, but hide the content OR simply convert your single column
          resume into a two-column one with a click. Easy toggle support allows you
          to put your best foot forward.
        </p>
      </div>
      <div className="feature-image-card">
        <img
          src={featureImage}
          alt="Feature"
          className="feature-image"
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
