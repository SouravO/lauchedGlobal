import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import card1 from "./assets/card1.png";
import card2 from "./assets/caed2.png";
import card3 from "./assets/card3.jpeg";
import card4 from "./assets/card4.png";

const CardsSection = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText =
    "Launch Your Global Career with Expert Training & Internships";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50); // 50ms per character for smooth typing

    return () => clearInterval(typingInterval);
  }, []);

  // Auto-carousel effect - cycles through cards every 3 seconds (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setFocusedCardIndex((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Cards emerge from center as Hero splits - all scroll-based (Desktop only)
  const cardsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    isMobile ? [1, 1, 1] : [0, 0.5, 1]
  );
  const cardsScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    isMobile ? [1, 1, 1] : [0.6, 0.85, 1]
  );
  const cardsRotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    isMobile ? [0, 0, 0] : [45, 20, 0]
  );
  const cardsY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    isMobile ? [0, 0, 0] : [100, 50, 0]
  );

  // Title animations - scroll-based (always visible on mobile)
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5],
    isMobile ? [1, 1, 1] : [0, 0.5, 1]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    isMobile ? [0, 0] : [80, 0]
  );
  const titleRotateX = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    isMobile ? [0, 0] : [60, 0]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    isMobile ? [1, 1] : [0.7, 1]
  );

  // Individual card animations - different for mobile vs desktop
  // Mobile: Sequential stacking effect
  // Desktop: 3D reveal from center
  const card1Y = useTransform(
    scrollYProgress,
    isMobile ? [0.2, 0.3] : [0.25, 0.5],
    isMobile ? [300, 0] : [120, 0]
  );
  const card1Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.2, 0.28] : [0.25, 0.45],
    [0, 1]
  );
  const card1RotateX = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    isMobile ? [0, 0] : [75, 0]
  );
  const card1RotateY = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    isMobile ? [0, 0] : [-25, 0]
  );
  const card1Scale = useTransform(
    scrollYProgress,
    isMobile ? [0.2, 0.3] : [0.25, 0.5],
    isMobile ? [0.8, 1] : [0.3, 1]
  );

  const card2Y = useTransform(
    scrollYProgress,
    isMobile ? [0.35, 0.45] : [0.3, 0.55],
    isMobile ? [300, 0] : [120, 0]
  );
  const card2Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.35, 0.43] : [0.3, 0.5],
    [0, 1]
  );
  const card2RotateX = useTransform(
    scrollYProgress,
    [0.3, 0.55],
    isMobile ? [0, 0] : [75, 0]
  );
  const card2RotateY = useTransform(
    scrollYProgress,
    [0.3, 0.55],
    isMobile ? [0, 0] : [25, 0]
  );
  const card2Scale = useTransform(
    scrollYProgress,
    isMobile ? [0.35, 0.45] : [0.3, 0.55],
    isMobile ? [0.8, 1] : [0.3, 1]
  );

  const card3Y = useTransform(
    scrollYProgress,
    isMobile ? [0.5, 0.6] : [0.35, 0.6],
    isMobile ? [300, 0] : [120, 0]
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.5, 0.58] : [0.35, 0.55],
    [0, 1]
  );
  const card3RotateX = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    isMobile ? [0, 0] : [75, 0]
  );
  const card3RotateY = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    isMobile ? [0, 0] : [-25, 0]
  );
  const card3Scale = useTransform(
    scrollYProgress,
    isMobile ? [0.5, 0.6] : [0.35, 0.6],
    isMobile ? [0.8, 1] : [0.3, 1]
  );

  const card4Y = useTransform(
    scrollYProgress,
    isMobile ? [0.65, 0.75] : [0.4, 0.65],
    isMobile ? [300, 0] : [120, 0]
  );
  const card4Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.65, 0.73] : [0.4, 0.6],
    [0, 1]
  );
  const card4RotateX = useTransform(
    scrollYProgress,
    [0.4, 0.65],
    isMobile ? [0, 0] : [75, 0]
  );
  const card4RotateY = useTransform(
    scrollYProgress,
    [0.4, 0.65],
    isMobile ? [0, 0] : [25, 0]
  );
  const card4Scale = useTransform(
    scrollYProgress,
    isMobile ? [0.65, 0.75] : [0.4, 0.65],
    isMobile ? [0.8, 1] : [0.3, 1]
  );

  const cardTransforms = [
    {
      y: card1Y,
      opacity: card1Opacity,
      rotateX: card1RotateX,
      rotateY: card1RotateY,
      scale: card1Scale,
    },
    {
      y: card2Y,
      opacity: card2Opacity,
      rotateX: card2RotateX,
      rotateY: card2RotateY,
      scale: card2Scale,
    },
    {
      y: card3Y,
      opacity: card3Opacity,
      rotateX: card3RotateX,
      rotateY: card3RotateY,
      scale: card3Scale,
    },
    {
      y: card4Y,
      opacity: card4Opacity,
      rotateX: card4RotateX,
      rotateY: card4RotateY,
      scale: card4Scale,
    },
  ];

  const cards = [
    {
      title: "Study Abroad",
      description: "Expert guidance, scholarships and visa support",
      image: card1,
    },
    {
      title: "Career Launchpad",
      description: "Mentorship and tools to fast-track your growth.",
      image: card2,
    },
    {
      title: "Professional Courses",
      description: "Industry-relevant courses for better roles.",
      image: card3,
    },
    {
      title: "Healthcare Jobs Abroad",
      description: "Training and placement assistance worldwide.",
      image: card4,
    },
  ];

  return (
    <motion.section
      className="w-full max-w-7xl px-4 md:px-6 lg:px-12 xl:px-20 pt-8 md:pt-0"
      style={{
        opacity: cardsOpacity,
        scale: cardsScale,
        rotateX: cardsRotateX,
        y: cardsY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6 md:mb-12 lg:mb-16"
          style={{
            opacity: titleOpacity,
            y: titleY,
            rotateX: titleRotateX,
            scale: titleScale,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl px-4 min-h-[3em]">
            {displayedText}
            {!isTypingComplete && (
              <motion.span
                className="inline-block w-1 h-[0.8em] bg-white ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </h2>
        </motion.div>

        {/* Cards Grid - Desktop: grid layout, Mobile: stacking layout */}
        <div
          className={`${
            isMobile
              ? "relative h-[500px] mt-4"
              : "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          } max-w-sm md:max-w-none mx-auto`}
          style={{ perspective: "2000px" }}
        >
          {cards.map((card, index) => {
            const isFocused = !isMobile && focusedCardIndex === index;

            return (
              <motion.div
                key={index}
                className="group relative"
                style={{
                  ...(isMobile
                    ? {
                        opacity: cardTransforms[index].opacity,
                        y: cardTransforms[index].y,
                        scale: cardTransforms[index].scale,
                        position: "absolute",
                        top: `${index * 20}px`,
                        left: 0,
                        right: 0,
                        zIndex: index + 1,
                      }
                    : {}),
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000,
                }}
                animate={
                  !isMobile && isFocused
                    ? {
                        y: -20,
                        scale: 1.05,
                        transition: { duration: 0.5, ease: "easeOut" },
                      }
                    : !isMobile
                    ? {
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: "easeOut" },
                      }
                    : {}
                }
                onHoverStart={() => !isMobile && setFocusedCardIndex(index)}
              >
                <div
                  className={`relative overflow-hidden transition-all duration-700 ${
                    isMobile
                      ? "bg-[#0f2922] rounded-xl shadow-2xl h-full"
                      : `rounded-3xl ${
                          isFocused
                            ? "shadow-[0_35px_90px_rgba(34,197,94,0.4)] ring-2 ring-white/30"
                            : "shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                        }`
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    ...(isMobile
                      ? {}
                      : { aspectRatio: "3/4", minHeight: "unset" }),
                  }}
                >
                  {/* Card Image - Full card on desktop, top section on mobile */}
                  <div
                    className={`relative ${
                      isMobile
                        ? "h-48 sm:h-52 overflow-hidden"
                        : "absolute inset-0 w-full h-full"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full"
                      style={{
                        filter: isMobile
                          ? "none"
                          : "brightness(0.85) contrast(1.1)",
                        objectFit: "cover",
                        objectPosition: "center center",
                        display: "block",
                      }}
                    />

                    {/* Desktop: Dark overlay that fades on focus */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 transition-all duration-700 pointer-events-none"
                        style={{
                          background: isFocused
                            ? "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.8))"
                            : "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.6))",
                        }}
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      ></motion.div>
                    )}

                    {/* Mobile: Gradient overlay */}
                    {isMobile && (
                      <div className="absolute inset-0 bg-linear-to-t from-[#0f2922] via-transparent to-transparent"></div>
                    )}

                    {/* Premium shine effect on hover (desktop only) */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background:
                            "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4,
                        }}
                      />
                    )}
                  </div>

                  {/* Card Content Overlay (Desktop) - Shows when focused or hovered */}
                  {!isMobile && (
                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      {/* Title - Always visible at bottom */}
                      <motion.h3
                        className="text-2xl lg:text-3xl font-bold text-white mb-3 transform transition-all duration-700"
                        animate={{
                          marginBottom: isFocused ? "1rem" : "0.75rem",
                        }}
                        style={{
                          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                        }}
                      >
                        {card.title}
                      </motion.h3>

                      {/* Description - Slides up when focused or hovered */}
                      <motion.div
                        className="overflow-hidden"
                        animate={{
                          height: isFocused ? "auto" : 0,
                          opacity: isFocused ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-light tracking-wide mb-4">
                          {card.description}
                        </p>

                        {/* Premium CTA button */}
                        <motion.button
                          className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More →
                        </motion.button>
                      </motion.div>
                    </div>
                  )}

                  {/* Card Content (Mobile) - Traditional layout */}
                  {isMobile && (
                    <div
                      className="p-3"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-green-200 mb-1">
                        {card.title}
                      </h3>
                      {card.description && (
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {card.description}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Premium border glow when focused (desktop only) */}
                  {!isMobile && (
                    <div
                      className={`absolute inset-0 border-2 rounded-3xl transition-all duration-700 pointer-events-none ${
                        isFocused ? "border-white/20" : "border-white/0"
                      }`}
                    ></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CardsSection;
