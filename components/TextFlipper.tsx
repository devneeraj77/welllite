// components/TextFlipper.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Alata } from "next/font/google";
import { useState, useEffect } from "react";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const TextFlipper = () => {
  const [isBMI, setIsBMI] = useState(false);
  const [stopFlipping, setStopFlipping] = useState(false);

  useEffect(() => {
    // Flip every 3 seconds
    const interval = setInterval(() => {
      if (!stopFlipping) {
        setIsBMI((prev) => !prev);
      }
    }, 10000);

    // Stop flipping after 10 seconds
    const timeout = setTimeout(() => {
      setStopFlipping(true);
    }, 10000); // 10 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [stopFlipping]);

  return (
    <div className={alata.className}>
      <div className="relative text-tP  bg-secondary px-2 rounded-md flex items-end justify-end border-primary  text-4xl">
        <div className="inline-flex overflow-hidden  font-bold z-999">
          <AnimatePresence mode="wait">
            <motion.div
              key={stopFlipping ? "final" : isBMI ? "BMI" : "wellit!"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: 1, ease: "easeIn" }}
              className="inline-block  text-3xl md:text-4xl  lg:text-7xl"
            >
              {stopFlipping ? "BMI?" : isBMI ? "BMI" : "wellite!"}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TextFlipper;
