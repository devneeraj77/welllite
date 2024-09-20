"use client";
import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import TextFlipper from "./TextFlipper";
import Link from "next/link";
import { motion } from "framer-motion";


export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center z-40 w-full flex-col px-4">
      <motion.h2 
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: -5}}
      whileInView={{opacity: 1, x: 0}}
    
      className=" text-4xl md:text-5xl lg:text-7xl text-tp py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <div className=" flex  items-end justify-end   z-999  ">
          <TextFlipper />, made easy.
          <br />
        </div>{" "}
        Know your number.
      </motion.h2>
      <motion.p 

      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: -5}}
      whileInView={{opacity: 1, x: 0}}
      
      className="max-w-xl mx-auto font-normal text-base md:text-lg text-tMuted text-center">
        Your weight management partner. Accurate BMI calculations, helpful tips, and motivation to reach your health goals.
      </motion.p>
      <motion.div 
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: -5}}
      whileInView={{opacity: 1, x: 0}}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.9 }}
       transition={{ type: "spring", stiffness: 400, damping: 17, delay: 1 }}
      className="z-40 mt-8  md:my-16">
        <Link
          href={"/bmi-calculator"}
          className="text-base md:text-lg p-2 px-3 text-tMuted h-6 rounded-full bg-muted "
        >
          Make it 
        </Link>
      </motion.div>
    </BackgroundLines>
  );
}
