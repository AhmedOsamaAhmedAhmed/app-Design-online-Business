import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Hero } from "./components/Hero/Hero";
import { Hero2 } from "./components/Hero2/Hero2";
import { Products } from "./components/Products/Products";
import { Sales } from "./components/Sales/Sales.jsx";

import {Header} from"./components/Header/Header";

function App() {

  return (
   <>
   <Header />
   <Hero />
   <Sales/>
   <Products/>
   <Hero2/>
   <Footer/>
   </>
  );
}

export default App;


  //  <HeroSection />
