import { TbBrandNextjs } from "react-icons/tb";
import { DiPython } from "react-icons/di"; // Python
import { SiC } from "react-icons/si"; // C
import { SiCplusplus } from "react-icons/si"; // C++
import { FaJava } from "react-icons/fa"; // Java
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Frontend (HTML, CSS, JavaScript, React)
import { SiMongodb } from "react-icons/si"; // MongoDB
import { DiMysql } from "react-icons/di"; // SQL (MySQL)
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import {  motion } from "framer-motion"


const iconVariants = (duration) => ({
  initial: {y:-10},
  animate:{
    y: [10,-10] ,
    transition:{
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
           whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
          whileHover={{ scale: 1.1 }}
          className="my-20 text-center text-4xl">
          Technologies
      </motion.h1>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <div className="w-full flex flex-wrap item-center justify-center gap-4">
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPython className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiC className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-green-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-red-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBootstrap className="text-7xl text-purple-600" />
          </motion.div>
        </div>
        <div className="w-full flex flex-wrap item-center justify-center gap-4">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJs className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl text-gray-800" />
          </motion.div>
          <motion.div variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-orange-600" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl text-gray-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
