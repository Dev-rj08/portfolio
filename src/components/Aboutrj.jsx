import { ABOUT_TEXT } from "../constants";
import backgroundImg from "../assets/aboutbackground.jpg";
import { motion } from "framer-motion";

const Aboutrj = () => {
  return (
    <section id="about" className="relative w-full h-screen overflow-x-hidden">
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center w-full h-full px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-4xl text-white mb-8"
            >
              About
              <span className="text-neutral-500"> Me </span>
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutrj;