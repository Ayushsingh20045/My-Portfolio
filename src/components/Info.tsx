import React from 'react'

const Info = () => {
  return (
    <div>
          <div className="main mb-8 md:mb-16 flex flex-col lg:flex-row justify-between items-center  px-12 md:px-40">

              <div className="left text-white flex gap-12 lg:gap-20 lg:pl-12 mt-10">
                  <div className="exp ">
                   <h1 className='text-4xl md:text-6xl italic'>1+</h1>
                      <p className='text-sm text-gray-400'>YEARS <p> EXPERIENCE</p></p>
                  </div>
                  <div className="pro">
                      <h1 className='text-4xl md:text-6xl italic'>15 +</h1>
                      <p className='text-sm text-gray-400'>PROJECTS<p>COMPLETED</p></p>
                  </div>
                  <div className="stu">
                      <h1 className='text-4xl md:text-6xl italic'>20 +</h1>
                      <p className='text-sm text-gray-400'>STUDENTS<p>TAUGHT</p></p>

                  </div>
        </div>
        <div className="right mt-8  ">
                  <div className="box bg-gray-900  flex flex-col justify-start text-white px-16 py-8">
                      <p className='text-sm tracking-wider text-transparent pl-4  stroke-textInfo'>CURRENT STATUS </p>

                      <p className='  text-gray-300 tracking-wide'>
                        <span className=' animate-ping text-3xl  text-teal-600 '>•</span>Available for Full Time Opportunity</p>
                      <p className='text-sm text-gray-500 pl-3'>Based in Raipur, India · Remote OK</p>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Info
