import React from "react";

import  "./Sales.css"


export const Sales= () => {

	const products = [
		{
		  name: "Minimal Chair",
		  price: 299.0,
		  image:
			"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80",
		},
		{
		  name: "Beats Headphone",
		  price: 199.0,
		  image:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
		},
	]
  return (
	<div className="bg-white py-24">
	<div className="container">
	  <div className="grid">
		<div className="space-y-6">
		  <span className="text-purple-600">WE HELP YOU</span>
		  <h2 className="text-4xl">Sell Stunning Product </h2>
		  <p className="text-gray-600">
			Well guide you through our unique 5-step brand-building framework
		  </p>
		  <button className="btn-primary">
			MORE DETAILS
			<span className="icon">→</span>
		  </button>
		</div>

		<div className="product-grid">
		  {products.map((product) => (
			<div className="product-card" key={product.name}>
			  <img
				src={product.image}
				alt={product.name}
				className="product-image"
			  />
			  <h3 className="product-title">{product.name}</h3>
			  <p className="product-price">${product.price.toFixed(2)}</p>
			  <button className="product-btn">
				<span className="icon">→</span>
			  </button>
			</div>
		  ))}
		</div>
	  </div>
	</div>
  </div>
  )
}
