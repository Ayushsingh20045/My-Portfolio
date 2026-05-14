
"use client";
import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import Navbar from "./Navbar";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function SpotlightNewDemo() {
  return (
    <div id="home" className="mb-2 md:mb-[-12px]   not-visited:relative h-screen w-full bg-black/[0.96] overflow-hidden">

      {/* ✅ Navbar (independent of flex) */}
      <div className="absolute top-0 left-0 w-full z-50  ">
        <Navbar />
      </div>

      {/* ✅ Main Section */}
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-between bg-grid-white/[0.02] lg:pl-40 mt-4 md:mt-2">

        <Spotlight />

        {/* Text Section */}
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center md:text-left pt-24 md:pt-0 ">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Ayush Singh — <br /> Full Stack Developer.
          </h1>

          <p className="mt-4 text-neutral-300 max-w-lg mx-auto md:mx-0">
            Full Stack Developer focused on modern MERN and AI applications.
          </p>

     <div className="links mt-8 flex gap-6 justify-center md:justify-start">
{/* github */}
     <a href="https://github.com/Ayushsingh20045" className="text-white border w-fit px-3 py-3 rounded-full  cursor-pointer hover:bg-neutral-800 transition">
            <IconBrandGithub size={32} className="text-gray-400"/>
          </a>
          {/* linkdin */}
     <a href="https://www.linkedin.com/in/ayush-singh-b15b39263/" className="text-white border w-fit px-3 py-3 rounded-full  cursor-pointer hover:bg-neutral-800 transition">
            <IconBrandLinkedin  size={32} className="text-blue-600"/>
          </a>

          {/* instagram */}
     <a href="" className="text-white border w-fit px-3 py-3 rounded-full  cursor-pointer hover:bg-neutral-800 transition">
            <IconBrandInstagram size={32} className="text-pink-500"/>
          </a>

     </div>
        </div>
        

        {/* Image Section */}
        <div className="flex justify-center md:mr-20">
          <img src="/myimg.png" alt="profile" className="md:w-[500px]" />
        </div>

      </div>
    </div>
  );
}