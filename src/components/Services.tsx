import React from 'react'
import HeadingAnim from "../components/HeadingAnim"
import { ServicesData } from '../data/ServicesData'

const Services = () => {
    return (
        <>

            <div className="text-white  mb-4">

                <HeadingAnim name="Services" />
               
                <div className="container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 lg:gap-12 bg-black lg:px-32">
                   {ServicesData.map((service)=>(
                       <div key={service.id} className="card border border-[#50A2FF] transition px-8 text-wrap bg-gray-900 w-80 h-72 outline-none hover:border-blue-600">
                           <h3 className=' pt-6 text-4xl tracking-wider italic text-transparent stroke-text'>{service.id}</h3>
                           <h1 className='text-3xl mt-3'>{service.title}</h1>
                           <p className='text-gray-400 mt-4'>{service.description}</p>
                       </div>

                   ))}

                </div>

            </div>

        </>
    )
}

export default Services
