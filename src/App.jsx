import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/ExperienceSection'
import About from './components/About'
import useScrollToTop from "./hooks/scrollToTop"

import { ArrowUpFromDot } from 'lucide-react'
import Footer from './components/Footer'
import Services from './components/Services'
import Info from './components/Info'
import Contact from './components/Contact'
import Projects from './components/Projects'
const App = () => {

const{showButton,scrollToTop}=useScrollToTop(700)

  return (
    <>
      <div className=" bg-black overflow-x-hidden font-serif">
        <Hero />
        <Info />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
      {showButton && (
        <div
          className="fixed right-2 bottom-5 border border-dashed border-[#50A2FF] text-[#50A2FF] px-3 py-3 rounded-full hover:border-blue-400 hidden md:block cursor-pointer "
          onClick={scrollToTop}
        >
          <ArrowUpFromDot
            className="animate-pulse"
            size={36}
            width={35}
            height={35}
          />
        </div>
      )}
    </>
  );
}

export default App
