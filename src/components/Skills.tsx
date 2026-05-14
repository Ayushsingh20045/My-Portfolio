"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

import HeadingAnim from "./HeadingAnim"
export default function HeroScrollDemo() {
  return (
    <div  className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
           
           <HeadingAnim name="Unleashing Skills Through Code"/>
            
          </>
        }
      >
       
        <img
  src="/skills.png"
  alt="skills"
  className="
  w-full

  
  md:h-[700px]
  h-[465px]
  mx-auto
  rounded-2xl
  object-cover
  "
  draggable={false}
/>
      </ContainerScroll>
    </div>
  );
}
