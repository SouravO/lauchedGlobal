import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "./assets/student-global.png";
import plane from "./assets/plane.png";
import Navbar from "./Navbar";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [titleComplete, setTitleComplete] = useState(false);

  const titleText = "India's #1\nCareer\nAccelerator";
  const subtitleText = "EXCLUSIVELY\nCURATED PROGRAMS";

  // Typing animation for title
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayedTitle(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(typingInterval);
      }
    }, 80); 

    return () => clearInterval(typingInterval);
  }, []);

  // Typing animation for subtitle 
  useEffect(() => {
    if (titleComplete) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= subtitleText.length) {
          setDisplayedSubtitle(subtitleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setShowCursor(false);
          clearInterval(typingInterval);
        }
      }, 60); 

      return () => clearInterval(typingInterval);
    }
  }, [titleComplete]);

  //  blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (showCursor) {
        setShowCursor((prev) => !prev);
      }
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  // slides to the left
  const textX = useTransform(scrollYProgress, [0, 0.5], [0, -800]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.7, 0]);

  // Slides to the right
  const imageX = useTransform(scrollYProgress, [0, 0.5], [0, 800]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 0.7, 0]
  );

  // hero page to half 
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 0.3, 0]);
  const heroDisplay = useTransform(scrollYProgress, (value) =>
    value > 0.6 ? "none" : "block"
  );

  // Plane 3D animation 
  const planeX = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 400, 800]);
  const planeY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, -150, -350]);
  const planeRotateZ = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0, 15, 30]
  );
  const planeRotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0, -10, -20]
  );
  const planeRotateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0, 20, 45]
  );
  const planeScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [1, 1.8, 2.5]
  );
  const planeOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.65],
    [1, 1, 0.7, 0]
  );

  return (
    <motion.div
      className="w-full min-h-screen bg-[#1a3a35] text-white fixed top-0 left-0 right-0 z-20 pointer-events-none"
      style={{ opacity: heroOpacity }}
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Content */}
      <div className="w-full px-4 md:px-6 lg:px-12 xl:px-20 py-6 md:py-10 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 pointer-events-auto">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8"
          style={{ x: textX, opacity: textOpacity }}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#d4e8d4] min-h-[200px] relative">
            {displayedTitle.split("\n").map((line, index) => {
              if (line.includes("#1")) {
                const parts = line.split("#1");
                return (
                  <div key={index}>
                    {parts[0]}
                    <span className="text-red-800">#1</span>
                    {parts[1]}
                  </div>
                );
              }

              if (line.trim() === "Career") {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-3 lg:gap-4"
                  >
                    Career
                    {titleComplete && (
                      <motion.img
                        className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20"
                        src={plane}
                        alt="Flying plane"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                          x: planeX,
                          y: planeY,
                          rotateZ: planeRotateZ,
                          rotateX: planeRotateX,
                          rotateY: planeRotateY,
                          scale: planeScale,
                          opacity: planeOpacity,
                          transformStyle: "preserve-3d",
                        }}
                      />
                    )}
                  </div>
                );
              }

              return <div key={index}>{line}</div>;
            })}

            {/* Typing part */}
            {!titleComplete && showCursor && (
              <motion.span
                className="inline-block w-1 h-[0.8em] bg-white ml-2 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </div>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-green-200 min-h-[80px]">
            {displayedSubtitle.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}

            {/* Subtitle cursor part*/}
            {titleComplete &&
              !showCursor &&
              displayedSubtitle.length < subtitleText.length && (
                <motion.span
                  className="inline-block w-1 h-[0.6em] bg-green-200 ml-2 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              )}
          </div>

          <motion.button
            className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-green-200 text-[#1a3a35] rounded-full text-sm md:text-base font-medium hover:bg-green-300 transition-colors w-fit group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity:
                titleComplete && displayedSubtitle.length >= subtitleText.length
                  ? 1
                  : 0,
              scale:
                titleComplete && displayedSubtitle.length >= subtitleText.length
                  ? 1
                  : 0.8,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Get Started
            <span className="w-5 h-5 md:w-6 md:h-6 bg-[#1a3a35] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>{" "}
        {/* Right Side image part */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{ x: imageX, rotate: imageRotate, opacity: imageOpacity }}
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-sm lg:max-w-md aspect-square">
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden border-2 md:border-4 border-green-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src={img}
                alt="Person working on laptop"
                className="w-full h-full object-cover"
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </motion.div>

            <motion.div
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                className="w-10 md:w-16 h-0.5 md:h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1.1 }}
              ></motion.div>
              <motion.div
                className="w-8 md:w-12 h-0.5 md:h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1.2 }}
              ></motion.div>
              <motion.div
                className="w-6 md:w-8 h-0.5 md:h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1.3 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
