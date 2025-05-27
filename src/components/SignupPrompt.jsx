import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignupPrompt.css";
import { auth, provider, signInWithPopup } from "../services/firebase";

const features = [
  {
    icon: "🗂️",
    text: "Update and rearrange your resume section with Drag-n-Drop Layouts."
  },
  {
    icon: "👁️",
    text: "Keep only relevant data while downloading your resume with Easy Toggles."
  },
  {
    icon: "📝",
    text: "Add custom section as per your need for achievements, contributions, hobbies and anything!"
  }
];

const SignupPrompt = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!\nEmail: ${user.email}`);
      // Redirect to a protected page or dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error", error);
      alert("Google sign-in failed.");
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-content">
        <h2>
          Log in to craft your resume and<br />boost productivity with Resuminator
        </h2>
        <ul className="feature-list">
          {features.map((f, i) => (
            <li key={i}>
              <span className="feature-icon">{f.icon}</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
        <Link to="/login">
          <button className="signup-button">Log in / Sign up</button>
        </Link>
      </div>

      <div className="signup-side-card">
        <div className="side-logo-row">
          <div className="side-logo">Re</div>
          <span className="side-logo-text">Resuminator</span>
        </div>
        <h3 className="side-welcome">
          Welcome Back!<br />
          Craft your resume &amp; apply to your<br />
          dream job 2x faster!
        </h3>
        <div className="side-divider">Login with Google or email</div>

        <button className="google-login" onClick={handleGoogleLogin}>
          <span style={{ color: "#4285f4", fontWeight: "bold", marginRight: 8 }}>G</span>
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default SignupPrompt;
