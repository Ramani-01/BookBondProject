import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Logo_Bookbond.png";
import loginImg from "../assets/Login_Img.jpg";

const Login = () => {   // ✅ Define the component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // ✅ Add useNavigate() for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/users", { email, password });
      console.log("Login success:", response.data);
      alert("Login successful!");
      navigate("/LandingPage"); // ✅ Correct redirection after login
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };
  return(
    <div className="auth-page signup-container">
    <div className="auth-logo-container">
      <img src={logo} alt="BookBond Logo" className="auth-logo" />
    </div>
    <div className="auth-box signup-box">
      <div className="auth-form-section signup-form">
        <h2 className="auth-title signup-title">Sign Up</h2>
        {error && <p className="auth-error-message">{error}</p>}
        <form onSubmit={handleSubmit}>

          <div className="auth-input-group input-container">
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              placeholder="Your Email"
              className="auth-input-field input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-input-group input-container">
            <i className="fas fa-lock input-icon"></i>
            <input
              type="password"
              placeholder="Password"
              className="auth-input-field input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="auth-button signup-btn">Sign Up</button>
        </form>

        
        <p className="auth-links signup-links">
          Already have an account? <Link to="/login" className="auth-link signup-link">Login</Link>
        </p>
      </div>
      <div className="auth-illustration-container login-illustration">
        <img src={loginImg} alt="Login Illustration" className="auth-illustration-image illustration-img" />
      </div>
    </div>
  </div>
  );
};



export default Login;