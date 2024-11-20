import "./Footer.css";
import React from "react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
	 }		;
  return (
	<div className="contact-container">
  <div className="contact-left">
    <h2 className="contact-title">Write Us</h2>
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="contact@email.com"
          className="contact-input"
          required
        />
      </div>
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows={4}
          className="contact-textarea"
          required
        ></textarea>
      </div>
      <button type="submit" className="contact-button">
        SEND YOUR MESSAGE
      </button>
    </form>
  </div>
  <div className="contact-right">
    <img
      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop"
      alt="Contact"
      className="contact-image"
    />
  </div>
</div>

  )
}
