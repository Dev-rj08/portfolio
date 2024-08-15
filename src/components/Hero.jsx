"use client";
import { motion } from 'framer-motion';
import { INTRO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, delay: delay }
  }
});

const Hero = () => {
  return (
    <div className="border-border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col gap-4">
        <div className="relative h-20 sm:h-28 lg:h-36"> {/* Adjust height as needed */}
          <TypeAnimation
            className="absolute inset-0 pb-4 text-4xl font-thin tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl"
            sequence={[
              "Ragavendra Raja Jagathish",
              3000,
              "I'm a Developer",
              1000,
              "I'm a Designer",
              1000,
            ]}
            repeat={Infinity}
          />
        </div>
        <motion.span
          variants={container(0.25)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-violet-200 via-slate-500 to-purple-700 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
        >
          Pre Final Year Student
        </motion.span>
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-6 font-light tracking-tighter"
        >
          {INTRO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
