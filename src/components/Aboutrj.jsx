import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.png"; 
import { motion } from "framer-motion";

const Aboutrj = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial= {{y:-100, opacity:0}}
        transition= {{duration:0.5}}
        whileHover={{ scale: 1.1 }}
        className="my-20 text-center text-4xl"> About
        <span className= "text-neutral-500"> Me </span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row flex-wrap">
        <motion.div
              whileInView={{opacity:1,x:0}}
              initial= {{x:-100, opacity:0}}
              transition= {{duration:0.5}}
              className="w-full lg:w-1/2 lg:p-8 mb-8 lg:mb-0">
              <div className="flex items-center justify-center">
                <img src={aboutImg} alt="about" className="w-full h-auto lg:w-auto lg:max-w-full"/>
              </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial= {{x:100, opacity:0}}
          transition= {{duration:0.5}}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start px-4">
            <p className="text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutrj;
