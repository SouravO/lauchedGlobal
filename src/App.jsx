import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Hero";
import CardsSection from "./CardsSection";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <div className="relative bg-[#1a3a35]">
        {/* card sction  */}
        <div className="fixed top-0 left-0 w-full h-screen flex items-start md:items-center justify-center z-10 bg-[#1a3a35] pt-20 md:pt-0">
          <CardsSection />
        </div>

        {/* Hero Section */}
        <Hero />

        <div className="h-[200vh] bg-[#1a3a35]"></div>
      </div>
    </>
  );
}

export default App;
