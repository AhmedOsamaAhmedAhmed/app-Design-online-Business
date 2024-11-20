import "./Hero2.css";
import React from "react";

export const Hero2 = () => {
  return (
    <div className="stats-container">
    <div className="stats-graphs">
      <div className="stats-card">
        <div className="card-header">
          <div className="profile-image">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Profile" 
            />
          </div>
          <div>
            <h4 className="card-title">$7,654</h4>
            <p className="card-description">Total Revenue</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
  
      <div className="stats-card">
        <div className="card-header">
          <div className="profile-image">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
              alt="Profile" 
            />
          </div>
          <div>
            <h4 className="card-title">$9,978</h4>
            <p className="card-description">Total Sales</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  
    <div className="text-section">
      <h3>WHAT WE DO</h3>
      <h2>Increase our Customers Sales</h2>
      <p>Our customers see positive ROI results within the first three months</p>
      <button className="button">
        MORE DETAILS
      </button>
    </div>
  </div>
  )
}
