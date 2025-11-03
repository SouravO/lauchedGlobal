import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from "./assets/student-global.png";
import plane from "./assets/plane.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Transform values for "door opening" scroll animations
  // Left door (text) slides further left
  const textX = useTransform(scrollYProgress, [0, 0.5], [0, -800]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.7, 0]);

  // Right door (image) slides further right
  const imageX = useTransform(scrollYProgress, [0, 0.5], [0, 800]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 0.7, 0]
  );

  // Make Hero disappear after splitting
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 0.3, 0]);
  const heroDisplay = useTransform(scrollYProgress, (value) =>
    value > 0.6 ? "none" : "block"
  );

  // Plane 3D animation - travels from hero to cards section
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
      <nav className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1a3a35] font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-semibold">Lauched Global</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#personal"
            className="hover:text-green-300 transition-colors"
          >
            Personal
          </a>
          <a
            href="#business"
            className="hover:text-green-300 transition-colors"
          >
            Business
          </a>
          <a href="#feature" className="hover:text-green-300 transition-colors">
            Feature
          </a>
          <a href="#company" className="hover:text-green-300 transition-colors">
            Company
          </a>
          <a href="#help" className="hover:text-green-300 transition-colors">
            Help
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm hover:text-green-300 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-green-200 text-[#1a3a35] rounded-full text-sm font-medium hover:bg-green-300 transition-colors">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-5 flex flex-col lg:flex-row items-center justify-between gap-12 pointer-events-auto">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          style={{ x: textX, opacity: textOpacity }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight text-[#d4e8d4]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            India's <span className="text-red-800">#1</span>
            <br />
            <div className="flex items-center gap-4">
              Career
              <motion.img
                className="w-12 md:w-16 lg:w-20"
                src={plane}
                alt="Flying plane"
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
            </div>
            Accelerator
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-medium text-green-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            EXCLUSIVELY
            <br />
            CURATED PROGRAMS
          </motion.p>

          <motion.button
            className="flex items-center gap-3 px-8 py-4 bg-green-200 text-[#1a3a35] rounded-full text-base font-medium hover:bg-green-300 transition-colors w-fit group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Get Started
            <span className="w-6 h-6 bg-[#1a3a35] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg
                className="w-4 h-4 text-white"
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
        </motion.div>

        {/* Right Side - Circular Image with animations */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          style={{ x: imageX, rotate: imageRotate, opacity: imageOpacity }}
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden border-4 border-green-800"
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
            {/* Decorative lines with staggered animation */}
            <motion.div
              className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                className="w-16 h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              ></motion.div>
              <motion.div
                className="w-12 h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              ></motion.div>
              <motion.div
                className="w-8 h-1 bg-green-200"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
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
