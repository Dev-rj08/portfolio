import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/rjlogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
     <nav className="mb-20 flex items-center justify-between py-6">
        <motion.div 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-50}}
            transition={{duration:0.25}}
            className="flex flex-shrink-0 items-center">
            <motion.img 
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="mx-2 w-10" src={logo} alt="logo"/>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-50}}
          transition={{duration:0.5}}
          className="m-8 flex items-center justify-center gap-4 text-2xl">
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
     </nav>
  );
};

export default Navbar;
