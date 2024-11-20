import "./Header.css";
import React from "react";

// import { Search } from "lucide-react";

// import imgbg from "../img/boot.png";

export const Header = () => {
	
  return (
	<header> <nav className="navbar"> 
	<div className="navbar-logo">
	<h2>BusinessGrow</h2>
  </div>
<div className="navbar-links" >
<button className="btn-secondary">Get Started Now</button>
	 <button className="btn-primary-h">Login</button>
</div>
	
	</nav>
 
  
	
	</header>
	
  )
}



// <input type="text" placeholder="Tell us what you need to build..." /> 