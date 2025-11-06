import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  React.useEffect(() => {
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
      <div className="w-[150px] aspect-square grid place-items-center animate-spin">
        <div className="relative w-3/4 aspect-[7/1] bg-teal-200 rounded-bl-[50%_100%] rounded-tr-[25%_90%] rounded-br-[20%_20%]">
          <div className="absolute left-[calc(-0.3%+1px)] top-[-120%] w-[15%] aspect-[1/1.25] bg-teal-200 skew-x-[5deg] translate-x-[-5%] rounded-tl-[10%] rounded-tr-[100%_100%]">
            <div className="absolute h-[55%] aspect-square right-[-60%] bottom-[4.5%] bg-gradient-radial from-transparent from-70% to-teal-200 to-70% rounded-full transform skew-x-0 -rotate-[8deg]"></div>
          </div>
          
          <div className="absolute left-1/2 top-[-190%] w-1/4 aspect-square bg-teal-200 origin-bottom skew-x-45 translate-x-[-30%] scale-75 rounded-tl-[10%] rounded-tr-[60%_100%]"></div>
          
          <div className="absolute left-1/2 bottom-[-170%] w-1/4 aspect-square bg-teal-200 origin-top -skew-x-45 rounded-bl-[10%] rounded-br-[60%_100%]"></div>
        </div>
      </div>

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
    </motion.div>
  );
};

export default LoadingScreen;
