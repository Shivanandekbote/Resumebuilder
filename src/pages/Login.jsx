import React, { useState } from "react";
import "../css/Login.css";
import { auth, provider, signInWithPopup } from "../services/firebase"; // Make sure this path is correct

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!\nEmail: ${user.email}`);
      // Optional: Store user in context or localStorage
    } catch (error) {
      console.error("Google Sign-In Error", error);
      alert("Google sign-in failed.");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Sign In\nEmail: ${email}\nPassword: ${password}\nRemember me: ${remember}`);
    // Add your sign in logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Sign Up\nEmail: ${signupEmail}\nPassword: ${signupPassword}\nConfirm: ${signupConfirm}`);
    // Add your sign up logic here
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="toggle-row">
          <button
            className={`toggle-btn${isSignIn ? " active" : ""}`}
            onClick={() => setIsSignIn(true)}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`toggle-btn${!isSignIn ? " active" : ""}`}
            onClick={() => setIsSignIn(false)}
            type="button"
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? (
          <form className="login-form" onSubmit={handleSignIn}>
            <h2>Welcome Back</h2>
            <p className="login-subtitle">Sign in to your account</p>

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>
            <div className="login-divider">or</div>
            <button type="button" className="google-login-btn" onClick={handleGoogleLogin}>
              <span style={{ color: "#4285f4", fontWeight: "bold", marginRight: 8 }}>G</span>
              Continue with Google
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSignUp}>
            <h2>Create Account</h2>
            <p className="login-subtitle">Sign up to get started</p>

            <label>Email</label>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
              placeholder="Create a password"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              value={signupConfirm}
              onChange={(e) => setSignupConfirm(e.target.value)}
              required
              placeholder="Confirm your password"
            />

            <button type="submit" className="login-btn">Sign Up</button>
            <div className="login-divider">or</div>
            <button type="button" className="google-login-btn" onClick={handleGoogleLogin}>
              <span style={{ color: "#4285f4", fontWeight: "bold", marginRight: 8 }}>G</span>
              Continue with Google
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
