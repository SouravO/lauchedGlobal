import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Hero";
import CardsSection from "./CardsSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative bg-[#1a3a35]">
      {/* Cards Section - Fixed in center, behind Hero */}
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 bg-[#1a3a35]">
        <CardsSection />
      </div>

      {/* Hero Section - Fixed on top, splits on scroll */}
      <Hero />

      {/* Spacer for scroll */}
      <div className="h-[200vh] bg-[#1a3a35]"></div>
    </div>
  );
}

export default App;
