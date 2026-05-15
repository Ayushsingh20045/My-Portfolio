

import React from "react";
import projectData from "../data/ProjectData";
import HeadingAnim from "./HeadingAnim";

import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-10 text-white">

      <HeadingAnim name="Projects" />

      <motion.div
        id="projects"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col gap-12 items-center h-auto"
      >

        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
            className="card flex flex-col md:flex-row gap-4 w-[80%] bg-[#0F172A] rounded-lg overflow-hidden md:h-90"
          >

            {/* Left */}
            <div className="left md:w-[40%] h-full overflow-hidden">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={project.img}
                alt="project Img"
                className="object-cover h-full"
              />

            </div>

            {/* Right */}
            <div className="right flex flex-col md:w-[60%] py-4 px-2">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-3xl lg:text-4xl underline underline-offset-4 tracking-tighter leading-snug text-wrap"
              >
                {project.projectName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm md:text-lg mt-2 text-gray-400"
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="techSection flex flex-wrap gap-2 items-center mt-4"
              >

                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#1E293B",
                    }}
                    className="border border-gray-400 px-2 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}

              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="links border-t border-gray-400 mt-4 flex gap-6 items-center justify-end"
              >

                <motion.a
                  whileHover={{
                    scale: 1.12,
                    rotate: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Ayushsingh20045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 border border-blue-400 transition duration-200 ease-in-out hover:border-blue-600 cursor-pointer mt-4 rounded-full"
                >
                  <IconBrandGithub />
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.12,
                    rotate: 3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="px-2 py-2 border border-blue-400 transition duration-200 ease-in-out hover:border-blue-600 cursor-pointer mt-4 rounded-full"
                >
                  <ExternalLink />
                </motion.a>

              </motion.div>

            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Projects;