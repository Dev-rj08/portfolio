import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/rjlogo.png";
import coffeeLogo from "../assets/Coffee.png";
import { navItems } from "../constants";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#hero">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            </motion.a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li 
                whileHover={{ scale: 1.1 }}
                key={index}>
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="/documents/resume.pdf" className="py-2 px-3 border rounded-md" download="resume.pdf">
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://buymeacoffee.com/rj08"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 flex items-center space-x-2"
            >
              <img src={coffeeLogo} alt="Coffee Logo" className="w-10 h-7 sm:w-10 sm:h-10" />
              <span>Buy Me a Coffee</span>
            </motion.a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="/documents/resume.pdf" className="py-2 px-3 border rounded-md" download="resume.pdf">
                Resume
              </a>
              <a
                href="https://buymeacoffee.com/rj08"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 flex items-center space-x-2"
              >
                <img src={coffeeLogo} alt="Coffee Logo" className="w-4 h-4 sm:w-4 sm:h-4" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
