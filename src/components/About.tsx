
import React from 'react'
import AboutImg from './AboutImg'
import HeadingAnim from "./HeadingAnim"
import { Terminal } from './ui/terminal'
import { Download } from 'lucide-react'
import { motion } from "framer-motion"

const About = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.18,
            },
        },
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    }

    return (
        <>
            <div
                id='about'
                className="mb-15 text-white px-4 mt-12 md:mt-2"
            >

                <HeadingAnim name="About Me" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex md:flex-row flex-col gap-4 md:gap-8 md:px-12'
                >

                    {/* Left Section */}
                    <motion.div
                        variants={item}
                        className="left w-full md:w-1/2"
                    >

                        <div className="hidden md:block">
                            <AboutImg />
                        </div>

                        <div className="md:hidden">
                            <Terminal />
                        </div>

                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={container}
                        className="right w-full md:flex flex-col gap-4 justify-start pl-2"
                    >

                        <motion.h4
                            variants={item}
                            className='mb-4 mt-3 md:mt-12 text-xl font-semibold pl-2 text-[#fff]'
                        >
                            I turn complex problems
                            into elegant solutions.
                        </motion.h4>

                        <motion.p
                            variants={item}
                            className='text-lg pl-2 md:pr-6 mb-2 flex-nowrap text-gray-400'
                        >
                            I'm a Full Stack Developer with a passion for building products that are fast, accessible, and genuinely useful. I've worked across fintech, e-commerce, and SaaS — each project sharpening my ability to balance technical depth with real-world constraints.
                        </motion.p>

                        <motion.p
                            variants={item}
                            className='text-lg pl-2 md:pr-6 text-gray-400'
                        >
                            I thrive across the full cycle: architecting databases, crafting APIs, polishing UIs, and shipping to production. The best code is the code your users never have to think about.
                        </motion.p>

                        <motion.a
                            variants={item}
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                            href="/NewMainResume.pdf"
                            download
                            target='_blank'
                        >
                            <div className="btn flex gap-2 justify-center items-center border w-fit px-8 py-3 rounded-4xl text-lg mt-8 md:mt-4 text-center cursor-pointer hover:bg-neutral-900 transition text-gray-300">

                                Download Resume

                                <motion.div
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                    }}
                                >
                                    <Download />
                                </motion.div>

                            </div>
                        </motion.a>

                    </motion.div>

                </motion.div>
            </div>
        </>
    )
}

export default About