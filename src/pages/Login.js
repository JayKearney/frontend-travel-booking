import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "../css/Login.css"; // Importing CSS file for styling
import sideImage from '../img/bg.jpg'; // Image to be placed on the right
import axios from "axios"; // Importing axios for API calls

export default function Login() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Check if credentials match
    axios.post("http://localhost:5033/Login", { "name":username, password }).then((res) => {
      if (res.status === 200) {
        console.log("Login successful!");
        navigate("/home"); // Navigate to /home on successful login
      } else {
        console.log("Invalid credentials");
        alert("Invalid username or password"); // Notify user of invalid credentials
      }
    }).catch((err) => {
      console.log(err);
      alert("Invalid username or password"); // Notify user of invalid credentials
    });
  
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-box">
        <div className="login-form">
          <h1 className="login-title">TravelBookingCA</h1>
          <p className="login-subtitle">Login to continue your journey</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="login-footer">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <img src={sideImage} alt="Travel Background" className="side-image" /> {/* Image on the right */}
      </div>
    </div>
  );
}
