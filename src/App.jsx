import './index.css'; // or './tailwind.css'
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutrj from './components/Aboutrj';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll } from "framer-motion";
import Preloader from './components/Preloader';


function App() {
    const { scrollYProgress } = useScroll();
    const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

    return (
        <>
            <motion.div
                className="progress-bar fixed top-0 left-0 right-0 h-2 bg-cyan-500 origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                <div
                    style={{ scaleX: scrollYProgress }}
                    className="fixed inset-0 -z-10 h-full w-full"
                >
                    <div className="relative h-full w-full bg-slate-950">
                        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                    </div>
                </div>

                <div className="container mx-auto px-8">
                    {!isPreloaderComplete && (
                        <Preloader onComplete={() => setIsPreloaderComplete(true)} />
                    )}
                    {isPreloaderComplete && (
                        <>
                            <Navbar />
                            <Hero />
                            <Aboutrj />
                            <Technologies />
                            <Experience />
                            <Projects />
                            <Contact />
                            
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
