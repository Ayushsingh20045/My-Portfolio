

import React from 'react'
import HeadingAnim from "../components/HeadingAnim"
import { ServicesData } from '../data/ServicesData'
import { motion } from "framer-motion"

const Services = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
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
        <>
            <div className="text-white mb-4">

                <HeadingAnim name="Services" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 lg:gap-12 bg-black lg:px-32"
                >

                    {ServicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={item}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: {
                                    duration: 0.3,
                                },
                            }}
                            className="card border border-[#50A2FF] transition px-8 text-wrap bg-gray-900 w-80 h-72 outline-none hover:border-blue-600"
                        >

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className='pt-6 text-4xl tracking-wider italic text-transparent stroke-text'
                            >
                                {service.id}
                            </motion.h3>

                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className='text-3xl mt-3'
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='text-gray-400 mt-4'
                            >
                                {service.description}
                            </motion.p>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </>
    )
}

export default Services

