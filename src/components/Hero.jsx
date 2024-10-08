import React from 'react';
import { motion } from 'framer-motion';
import { INTRO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTwitterSquare } from "react-icons/fa";

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
    <section id="hero" className="py-16">
    <div className="border-border-neutral-900 pb-4 lg:mb-35 mt-16 lg:mt-32"> {/* Add top margin */}
      <div className="flex flex-col gap-4">
        <div className="relative h-20 sm:h-28 lg:h-36"> {/* Adjust height as needed */}
          <TypeAnimation
            className="absolute inset-0 pb-4 text-4xl font-thin tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl"
            sequence={[
              "Ragavendra Raja Jagathish",
              3000,
            ]}
            repeat={1}
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
        <motion.div 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-50}}
          transition={{duration:0.5}}
          className="mt-6 flex items-start justify-start gap-10 text-2xl">
          <motion.a 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            href="https://www.linkedin.com/in/ragavendra-raja-jagathish-49bb91179/" target="_blank" >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}  
            href="https://github.com/Dev-rj08" target="_blank">
            <FaGithub />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            href="https://x.com/RagavendraJaga" target="_blank">
            <FaXTwitter/>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            href="https://www.instagram.com/ragavendraraja_jagathish/" target="_blank">
            <FaInstagram />
          </motion.a>
        </motion.div>
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
    </section>
  );
};

export default Hero;
