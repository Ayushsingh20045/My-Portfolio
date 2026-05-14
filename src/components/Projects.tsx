import React from "react";
import projectData from "../data/ProjectData";
import HeadingAnim from "./HeadingAnim";

import { IconBrandGithub, IconLiveViewFilled } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
const Projects = () => {
  return (
    <div className="py-10 text-white">
      <HeadingAnim name="Projects" />
      <div id="projects" className="w-full flex flex-col gap-12 items-center h-auto ">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="card flex flex-col md:flex-row gap-4 w-[80%] bg-[#0F172A] rounded-lg overflow-hidden 
                        md:h-90   "
          >
            <div className="left md:w-[40%] h-full">
              <img
                src={project.img}
                alt="project Img"
                className="object-cover h-full "
              />
            </div>
            <div className="right flex flex-col md:w-[60%] py-4 px-2     ">
              <h1 className="text-center text-3xl   lg:text-4xl underline underline-offset-4 tracking-tighter leading-snug text-wrap">
                {project.projectName}
              </h1>
              <p className="text-sm md:text-lg mt-2 text-gray-400">
                {project.description}
              </p>

              <div className="techSection flex flex-wrap gap-2 items-center   mt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-gray-400 px-2 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="links border-t border-gray-400 mt-4 flex gap-6  items-center justify-end">
                        <a
                            href="https://github.com/Ayushsingh20045"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 hover:scale-110 py-2 border border-blue-400 transition duration-200 ease-in-out hover:border-blue-600 cursor-pointer mt-4 rounded-full"
                        >
                            <IconBrandGithub />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.link}
                            className="px-2 hover:scale-110 transition duration-200 ease-in-out py-2 border border-blue-400 hover:border-blue-600 cursor-pointer mt-4 rounded-full"
                        >
                            <ExternalLink />
                        </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
