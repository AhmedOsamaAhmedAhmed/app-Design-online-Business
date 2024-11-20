import "./Products.css";
import React from "react";

export const Products = ( ) => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=300&fit=crop",
      title: "FASHION STORE",
      description: "Find the latest trends at discounted prices with a wide range of styles to choose from.",
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&h=300&fit=crop",
      title: "HOME FURNITURE",
      description: "Browse modern stylish furniture and transform your living space beautifully.",
    },
    {
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=300&fit=crop",
      title: "SUPER GADGET STORE",
      description: "Shop smart technology and gadgets at great deals with the latest tech.",
    },
  ];  
  return (
    <div className="app-container">
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
