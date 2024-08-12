"use client"
import { motion } from 'framer-motion';
import { INTRO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, delay: 0 }
  }
});


const Hero = () => {
  return (
    <div className="border-border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col gap-4"> 
        <TypeAnimation
        className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" 
        sequence={[
          "Ragavendra Raja Jagathish",
          2500,
          "Integrated MTech CSE Core",
          800,
          "I'm a Developer",
          900,
          "I'm a Designer",
          900,
        ]}
        repeat={Infinity}
        />
        <motion.span
          variants={container(0.25)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-violet-200 via-slate-500 to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent"
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
