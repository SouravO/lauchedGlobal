import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import card1 from "./assets/card1.png";
import card2 from "./assets/caed2.png";
import card3 from "./assets/card3.jpeg";
import card4 from "./assets/card4.png";

const CardsSection = () => {
  const { scrollYProgress } = useScroll();

  // Cards emerge from center as Hero splits - all scroll-based
  const cardsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 0.5, 1]
  );
  const cardsScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0.6, 0.85, 1]
  );
  const cardsRotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [45, 20, 0]
  );
  const cardsY = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 50, 0]);

  // Title animations - scroll-based
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5],
    [0, 0.5, 1]
  );
  const titleY = useTransform(scrollYProgress, [0.15, 0.4], [80, 0]);
  const titleRotateX = useTransform(scrollYProgress, [0.15, 0.4], [60, 0]);
  const titleScale = useTransform(scrollYProgress, [0.15, 0.4], [0.7, 1]);

  // Individual card animations - scroll-based with offsets
  const card1Y = useTransform(scrollYProgress, [0.25, 0.5], [120, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const card1RotateX = useTransform(scrollYProgress, [0.25, 0.5], [75, 0]);
  const card1RotateY = useTransform(scrollYProgress, [0.25, 0.5], [-25, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.25, 0.5], [0.3, 1]);

  const card2Y = useTransform(scrollYProgress, [0.3, 0.55], [120, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const card2RotateX = useTransform(scrollYProgress, [0.3, 0.55], [75, 0]);
  const card2RotateY = useTransform(scrollYProgress, [0.3, 0.55], [25, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.55], [0.3, 1]);

  const card3Y = useTransform(scrollYProgress, [0.35, 0.6], [120, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const card3RotateX = useTransform(scrollYProgress, [0.35, 0.6], [75, 0]);
  const card3RotateY = useTransform(scrollYProgress, [0.35, 0.6], [-25, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.35, 0.6], [0.3, 1]);

  const card4Y = useTransform(scrollYProgress, [0.4, 0.65], [120, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const card4RotateX = useTransform(scrollYProgress, [0.4, 0.65], [75, 0]);
  const card4RotateY = useTransform(scrollYProgress, [0.4, 0.65], [25, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.4, 0.65], [0.3, 1]);

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
      className="w-full max-w-7xl px-6 md:px-12 lg:px-20"
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
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: titleOpacity,
            y: titleY,
            rotateX: titleRotateX,
            scale: titleScale,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
            Launch Your Global Career with Expert Training & Internships
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          style={{ perspective: "2000px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group"
              style={{
                opacity: cardTransforms[index].opacity,
                y: cardTransforms[index].y,
                rotateX: cardTransforms[index].rotateX,
                rotateY: cardTransforms[index].rotateY,
                scale: cardTransforms[index].scale,
                transformStyle: "preserve-3d",
                transformPerspective: 1000,
              }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.05,
                z: 50,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className="relative bg-[#0f2922] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.5)] transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f2922] via-transparent to-transparent"></div>

                  {/* 3D shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-4" style={{ transform: "translateZ(20px)" }}>
                  <h3 className="text-lg md:text-xl font-semibold text-green-200 mb-2">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Hover border effect with glow */}
                <div className="absolute inset-0 border-2 border-green-400 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>

                {/* Particle effect on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, 100, 200, 300],
                    y: [0, -50, -100, -150],
                    scale: [1, 1.5, 1, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CardsSection;
