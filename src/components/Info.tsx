

import React from 'react'
import { motion } from "framer-motion"

const Info = () => {

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
            y: 40,
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
        <div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="main mb-8 md:mb-16 flex flex-col lg:flex-row justify-between items-center px-12 md:px-40"
            >

                {/* Left Stats */}
                <motion.div
                    variants={container}
                    className="left text-white flex gap-12 lg:gap-20 lg:pl-12 mt-10"
                >

                    {/* Experience */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -6,
                            scale: 1.03,
                        }}
                        className="exp"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className='text-4xl md:text-6xl italic'
                        >
                            1+
                        </motion.h1>

                        <p className='text-sm text-gray-400'>
                            YEARS
                            <p> EXPERIENCE</p>
                        </p>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -6,
                            scale: 1.03,
                        }}
                        className="pro"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className='text-4xl md:text-6xl italic'
                        >
                            15 +
                        </motion.h1>

                        <p className='text-sm text-gray-400'>
                            PROJECTS
                            <p>COMPLETED</p>
                        </p>
                    </motion.div>

                    {/* Students */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -6,
                            scale: 1.03,
                        }}
                        className="stu"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className='text-4xl md:text-6xl italic'
                        >
                            20 +
                        </motion.h1>

                        <p className='text-sm text-gray-400'>
                            STUDENTS
                            <p>TAUGHT</p>
                        </p>
                    </motion.div>

                </motion.div>

                {/* Right Status Box */}
                <motion.div
                    variants={item}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="right mt-8"
                >

                    <motion.div
                        whileHover={{
                            y: -5,
                            scale: 1.02,
                        }}
                        className="box bg-gray-900 flex flex-col justify-start text-white px-16 py-8"
                    >

                        <p className='text-sm tracking-wider text-transparent pl-4 stroke-textInfo'>
                            CURRENT STATUS
                        </p>

                        <p className='text-gray-300 tracking-wide flex items-center gap-1'>

                            <motion.span
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                }}
                                className='text-3xl text-teal-600'
                            >
                                •
                            </motion.span>

                            Available for Full Time Opportunity
                        </p>

                        <p className='text-sm text-gray-500 pl-3'>
                            Based in Raipur, India · Remote OK
                        </p>

                    </motion.div>

                </motion.div>

            </motion.div>
        </div>
    )
}

export default Info
