import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CardsSection = () => {
  const { scrollYProgress } = useScroll();

  // Cards emerge from center as Hero splits
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

  const cards = [
    {
      title: "Kiddo Account",
      description: "",
      image:
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop",
    },
    {
      title: "Bills",
      description:
        "Simplify payments, send Finexa Bills, manage subscriptions and elevate financial management, all in one place.",
      image:
        "https://images.unsplash.com/photo-1554224311-beee460ae6bb?w=400&h=300&fit=crop",
    },
    {
      title: "Customize",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      title: "Trainers cashback",
      description: "",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    },
  ];

  return (
    <motion.section
      className="w-full max-w-7xl px-6 md:px-12 lg:px-20"
      style={{ opacity: cardsOpacity, scale: cardsScale }}
    >
      <div className="w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ELEVATING YOUR
            <br />
            FINANCIAL EXPERIENCE
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative bg-[#0f2922] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Card Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f2922] via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-green-200 mb-2">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-green-400 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CardsSection;
