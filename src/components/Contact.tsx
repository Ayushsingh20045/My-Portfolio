// import React, { useRef } from 'react'
// import HeadingAnim from "../components/HeadingAnim"
// import { IconArrowRightToArc, IconBrandGithub, IconBrandLinkedin, IconRecordMail, IconZoomExclamationFilled } from '@tabler/icons-react'
// import { ArrowUpRightFromSquare, Mail } from 'lucide-react'
// import emailjs from "@emailjs/browser"
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// const Contact = () => {

// const form =useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Send message to you
//     emailjs.sendForm(
//       "service_u75jfic",
//       "template_9o74ghv",
//       form.current,
//       "Muv1hAHMK-E1eOO5m"
//     );

//     // Auto reply to client
//     emailjs.sendForm(
//       "service_u75jfic",
//       "template_3zfn5id",
//       form.current,
//       "Muv1hAHMK-E1eOO5m"
//     );

//     toast.success("Message sent successfully!")
//     e.target.reset();
//   }


//   return (
//     <div id='contact' className='main  pt-22 mb-8'>
//       <HeadingAnim name="Contact" />
//       <div className="container flex flex-col md:flex-row justify-center items-center text-white md:gap-30">

//         <div className="left md:w-1/3 flex flex-col gap-8  text-white">
//           <h1 className="text-4xl md:text-5xl">Let's build
//             <p className=''> something great.</p></h1>
//           <p
//             className='text-gray-400  '>Have a project in mind or just want to <p>chat? I'm always open to interesting</p> <p>conversations and collaboration.</p>
//           </p>

//           <div className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm  ">
//             <div className="logo flex items-center justify-center w-14 border-r border-gray-500 h-full">
//              <Mail/>
//             </div>
//             <div className="content">
//               <p className='text-sm tracking-wide text-gray-400'>Email</p>
//               <p ><a href="mailto:ayush440896@gmail.com">ayush440896@gmail.com</a></p>
//             </div>
//           </div>
//           <div className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm  ">
//             <div className="logo border-gray-500 flex items-center justify-center w-14 border-r h-full">
//            <IconBrandLinkedin/>
//             </div>
//             <div className="content">
//               <p className='text-sm tracking-wide text-gray-400'>Linkedin</p>
//               <p className='text-wrap  '><a href="https://www.linkedin.com/in/ayush-singh-b15b39263/">linkedin.com/in/ayush-singh</a></p>
//             </div>
//           </div>
//           <div className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm  ">
//             <div className="logo border-gray-500 flex items-center justify-center w-14  h-full border-r">
//              <IconBrandGithub/>
//             </div>
//             <div className="content">
//               <p className='text-sm tracking-wide text-gray-400'>Github</p>
//               <p><a href="https://github.com/Ayushsingh20045">github.com/Ayushsingh20045</a></p>
//             </div>
//           </div>
//         </div>

//         <div className="right  lg:w-[40%] bg-gray-900 rounded-lg items-center justify-center w-[75%] mt-12 md:mt-0">

//           <form
//           ref={form}
//           onSubmit={sendEmail}
          
//           className='flex px-6  py-5 flex-col gap-8'>
//            <div className="singleLine flex flex-col md:flex-row gap-6 md:gap-16 md:mr-4">
//            <div className="inputdiv flex flex-col gap-2">
//                 <label className='text-sm text-gray-400 tracking-wide'>Name</label>
//                 <input type="text" required name="user_name" placeholder='Your name'  className='w-fit px-1 outline-none bg-gray-800  rounded-sm text-lg py-1'/>
//            </div>
//               <div className="inputdiv gap-2  flex flex-col">
//                 <label className='text-sm text-gray-400 tracking-wide'>Email</label>
//                 <input type="text" required  name="user_email" placeholder='Your Email' className='w-fit px-1 outline-none bg-gray-800  rounded-sm text-lg py-1' />
//            </div>
//            </div>
//             <div className="subject flex flex-col gap-2  ">
//               <label className='text-sm text-gray-400 tracking-wide'>Subject</label>
//               <input type="text" required name="subject" placeholder='Project Inquiry' className='w-full px-1 outline-none bg-gray-800  rounded-sm text-lg py-1' />
//            </div>
//             <div className="textarea flex flex-col gap-2">
//               <label className='text-sm text-gray-400 tracking-wide'>Message</label>
//               <textarea required rows={6} name="message" placeholder="Tell me about your project..." className='w-full px-1 outline-none bg-gray-800  rounded-sm text-lg py-1'></textarea>
//            </div>
//             <button type='submit' className='formbtn flex gap-2 text-lg w-full bg-blue-900 py-4 px-4 mb-6 items-center justify-center rounded-4xl cursor-pointer'>Send Message <ArrowUpRightFromSquare/></button>
//           </form>
         
//         </div>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   )
// }

// export default Contact

import React, { useRef } from 'react'
import HeadingAnim from "../components/HeadingAnim"
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react'

import { ArrowUpRightFromSquare, Mail } from 'lucide-react'
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { motion } from "framer-motion"

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // Send message to you
    emailjs.sendForm(
      "service_u75jfic",
      "template_9o74ghv",
      form.current,
      "Muv1hAHMK-E1eOO5m"
    )

    // Auto reply to client
    emailjs.sendForm(
      "service_u75jfic",
      "template_3zfn5id",
      form.current,
      "Muv1hAHMK-E1eOO5m"
    )

    toast.success("Message sent successfully!")
    e.target.reset()
  }

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
    <div id='contact' className='main pt-22 mb-8'>
      <HeadingAnim name="Contact" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="container flex flex-col md:flex-row justify-center items-center text-white md:gap-30"
      >

        {/* Left Section */}
        <motion.div
          variants={item}
          className="left md:w-1/3 flex flex-col gap-8 text-white"
        >

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl"
          >
            Let's build
            <p> something great.</p>
          </motion.h1>

          <motion.p
            variants={item}
            className='text-gray-400'
          >
            Have a project in mind or just want to
            <p>chat? I'm always open to interesting</p>
            <p>conversations and collaboration.</p>
          </motion.p>

          {/* Email */}
          <motion.div
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm"
          >
            <div className="logo flex items-center justify-center w-14 border-r border-gray-500 h-full">
              <Mail />
            </div>

            <div className="content">
              <p className='text-sm tracking-wide text-gray-400'>Email</p>

              <p>
                <a href="mailto:ayush440896@gmail.com">
                  ayush440896@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Linkedin */}
          <motion.div
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm"
          >
            <div className="logo border-gray-500 flex items-center justify-center w-14 border-r h-full">
              <IconBrandLinkedin />
            </div>

            <div className="content">
              <p className='text-sm tracking-wide text-gray-400'>Linkedin</p>

              <p className='text-wrap'>
                <a href="https://www.linkedin.com/in/ayush-singh-b15b39263/">
                  linkedin.com/in/ayush-singh
                </a>
              </p>
            </div>
          </motion.div>

          {/* Github */}
          <motion.div
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="w-80 h-16 bg-gray-900 flex gap-6 items-center rounded-sm"
          >
            <div className="logo border-gray-500 flex items-center justify-center w-14 h-full border-r">
              <IconBrandGithub />
            </div>

            <div className="content">
              <p className='text-sm tracking-wide text-gray-400'>Github</p>

              <p>
                <a href="https://github.com/Ayushsingh20045">
                  github.com/Ayushsingh20045
                </a>
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Form */}
        <motion.div
          variants={item}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="right lg:w-[40%] bg-gray-900 rounded-lg items-center justify-center w-[75%] mt-12 md:mt-0"
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex px-6 py-5 flex-col gap-8'
          >

            <div className="singleLine flex flex-col md:flex-row gap-6 md:gap-16 md:mr-4">

              <motion.div
                variants={item}
                className="inputdiv flex flex-col gap-2"
              >
                <label className='text-sm text-gray-400 tracking-wide'>
                  Name
                </label>

                <input
                  type="text"
                  required
                  name="user_name"
                  placeholder='Your name'
                  className='w-fit px-1 outline-none bg-gray-800 rounded-sm text-lg py-1'
                />
              </motion.div>

              <motion.div
                variants={item}
                className="inputdiv gap-2 flex flex-col"
              >
                <label className='text-sm text-gray-400 tracking-wide'>
                  Email
                </label>

                <input
                  type="text"
                  required
                  name="user_email"
                  placeholder='Your Email'
                  className='w-fit px-1 outline-none bg-gray-800 rounded-sm text-lg py-1'
                />
              </motion.div>

            </div>

            <motion.div
              variants={item}
              className="subject flex flex-col gap-2"
            >
              <label className='text-sm text-gray-400 tracking-wide'>
                Subject
              </label>

              <input
                type="text"
                required
                name="subject"
                placeholder='Project Inquiry'
                className='w-full px-1 outline-none bg-gray-800 rounded-sm text-lg py-1'
              />
            </motion.div>

            <motion.div
              variants={item}
              className="textarea flex flex-col gap-2"
            >
              <label className='text-sm text-gray-400 tracking-wide'>
                Message
              </label>

              <textarea
                required
                rows={6}
                name="message"
                placeholder="Tell me about your project..."
                className='w-full px-1 outline-none bg-gray-800 rounded-sm text-lg py-1'
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='formbtn flex gap-2 text-lg w-full bg-blue-900 py-4 px-4 mb-6 items-center justify-center rounded-4xl cursor-pointer'
            >
              Send Message

              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <ArrowUpRightFromSquare />
              </motion.div>

            </motion.button>

          </form>

        </motion.div>

      </motion.div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Contact