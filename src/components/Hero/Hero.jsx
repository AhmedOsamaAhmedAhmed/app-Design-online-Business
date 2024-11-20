import "./Hero.css";
import React from "react";
import { Search } from "lucide-react";

// import photo1 from "./public/img/photo1.png";


export const Hero = () => {

  const companies = [
    { name: 'Media24', className: 'font-medium' },
    { name: 'Naspers', className: 'font-light' },
    { name: 'Western Cape', className: 'font-medium' },
    { name: 'Smart', className: 'font-medium' },
    { name: 'iCOM', className: 'font-semibold' },
  ];
  return (
    <div className="hero">
    <div className="hero-image">
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
      alt="Business Professional"
      className="profile-image"
    />
    <div className="profile-card">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
        alt="James Bruno"
        className="avatar"
      />
      <div className="profile-info">
        <h3>Ahmed Osama</h3>
        <p>Front End developer </p>
      </div>
    </div>
  </div>

    
    <div className="hero-content">
      <h1>We Help You Build & Grow an Online Business</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Tell us what you need to build..."
          className="search-input"
        />
        <button className="search-button">
          <Search className="search-icon" />
        </button>
      </div>

      
      
    </div>   

    <div className="company-section">
    <p>Companies weve helped build</p>
    <div className="company-list">
      {companies.map((company) => (
        <span key={company.name} className="company-item">
          {company.name}
        </span>
      ))}
    </div>
  </div>  
    


    
  </div>

	
  )
}
