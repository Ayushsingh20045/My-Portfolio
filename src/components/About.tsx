import React from 'react'
import AboutImg from './AboutImg'
import HeadingAnim from "./HeadingAnim"
import { Terminal } from './ui/terminal'
import { Download } from 'lucide-react'



const About = () => {

 


  return (
   <>
   <div id='about' className="mb-15 text-white px-4 mt-12 md:mt-2 ">

 <HeadingAnim name="About Me"/>

     <div className=' flex md:flex-row flex-col gap-4 md:gap-8  md:px-12 '>
      
        <div className="left w-full md:w-1/2">

        <div className="hidden md:block">
            <AboutImg/>
        </div>

        <div className="md:hidden">
            <Terminal/>
        </div>
        
        </div>

        <div className="right w-full   md:flex flex-col gap-4 justify-start pl-2">

                      <h4 className='mb-4 mt-3 md:mt-12 text-xl font-semibold pl-2 text-[#fff]'>I turn complex problems
                          into elegant solutions.
</h4>

                      <p className='text-lg pl-2 md:pr-6 mb-2 flex-nowrap text-gray-400'>I'm a Full Stack Developer with a passion for building products that are fast, accessible, and genuinely useful. I've worked across fintech, e-commerce, and SaaS — each project sharpening my ability to balance technical depth with real-world constraints.</p>
             
                      <p className='text-lg pl-2 md:pr-6 text-gray-400'>I thrive across the full cycle: architecting databases, crafting APIs, polishing UIs, and shipping to production. The best code is the code your users never have to think about.</p>
                      <a href="/public/NewMainResume.pdf"
                    download
                          target='_blank'>
             <div className="btn flex gap-2 justify-center items-center border w-fit px-8 py-3 rounded-4xl text-lg mt-8 md:mt-4 text-center cursor-pointer hover:bg-neutral-900 transition  text-gray-300">
            
                              Download Resume  <Download className='animate-bounce' />
             
             </div>
             </a>
        </div>
      
    </div>
   </div>
   </>
  )
}

export default About
