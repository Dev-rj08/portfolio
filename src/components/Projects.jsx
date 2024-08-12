import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            whileHover={{ scale: 1.1 }}
            className="my-20 text-center text-4xl">Projects
        </motion.h1>
        <div>{PROJECTS.map((project,index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/4">
                <motion.img src={project.image} 
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}}
                     width={150}
                     height={150}
                     alt={project.title}
                     className="mb-6 rounded"/>
            </motion.div>
          
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className="w-full max-w-xl lg:w-3/4">
            
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold">{project.title}</h6>
              <div className="space-x-2">
                <button
                as="a"
                href={project.githubUrl}
                target="_blank"
                className="mr-2 rounded-full border-2 border-purple-300 bg-transparent text-purple-300 px-2 py-1 text-xs font-medium shadow-md hover:bg-purple-100 hover:text-purple-800">
                  Github
                </button>              
                <button 
                as="a"
                href={project.demoUrl}
                target="_blank"
                className="mr-2 rounded-full border-2 border-purple-300 bg-transparent text-purple-300 px-2 py-1 text-xs font-medium shadow-md hover:bg-purple-100 hover:text-purple-800">
                  Demo
                </button>              
              </div>
            </div>

            <p className="mb-4 text-neutral-400">{project.description}</p>
            
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                whileHover={{ scale: 1.2 }}
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                {tech}
              </motion.span>
            ))}
          </motion.div>

        </div>
        ))}
        </div>
    </div>
  );
};

export default Projects;