import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  React.useEffect(() => {
    // Auto-hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#1a3a35] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Airplane Loader */}
      <div className="planeWrapper">
        <div className="planeBody">
          <div className="planeTail"></div>
          <div className="wingLeft"></div>
          <div className="wingRight"></div>
        </div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Lauched Global
        </h2>
        <p className="text-gray-300 text-sm md:text-base">
          Preparing your journey...
        </p>
      </motion.div>

      <style jsx>{`
        :root {
          --planeColor: hsl(160, 50%, 85%);
          --size: 150px;
        }

        .planeWrapper {
          width: var(--size);
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          transform-origin: center;
          animation: loadingAnimation 2s ease-in-out infinite;
        }

        @keyframes loadingAnimation {
          to {
            transform: rotate(-360deg);
          }
        }

        .planeBody,
        .planeBody * {
          background: var(--planeColor);
        }

        .planeBody {
          position: relative;
          width: 75%;
          aspect-ratio: 7/1;
          border-bottom-left-radius: 50% 100%;
          border-top-right-radius: 25% 90%;
          border-bottom-right-radius: 20% 20%;
        }

        .planeTail,
        .wingLeft,
        .wingRight {
          position: absolute;
        }

        .planeTail {
          left: calc(-0.3% + 1px);
          top: -120%;
          width: 15%;
          aspect-ratio: 1/1.25;
          transform: skewX(5deg) translateX(-5%);
          border-top-left-radius: 10%;
          border-top-right-radius: 100% 100%;
        }

        .wingLeft,
        .wingRight {
          left: 50%;
          width: 25%;
          aspect-ratio: 1;
        }

        .wingLeft {
          transform-origin: bottom;
          top: -190%;
          transform: skewX(45deg) translateX(-30%);
          scale: 0.8;
          border-top-left-radius: 10%;
          border-top-right-radius: 60% 100%;
        }

        .wingRight {
          transform-origin: top;
          bottom: -170%;
          transform: skewX(-45deg);
          border-bottom-left-radius: 10%;
          border-bottom-right-radius: 60% 100%;
        }

        .planeTail::after {
          content: "";
          position: absolute;
          height: 55%;
          aspect-ratio: 1;
          transform: skewX(0deg) rotate(-8deg);
          right: -60%;
          bottom: 4.5%;
          background: radial-gradient(
            circle at 100% 0%,
            transparent 70%,
            var(--planeColor) calc(70% + 0.5px)
          );
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingScreen;
