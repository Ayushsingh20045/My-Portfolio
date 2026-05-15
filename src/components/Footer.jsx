// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//       <footer  className="flex flex-col border-t-1  items-center justify-around w-full py-16 text-sm text-gray-400">
//         <div className="flex items-center gap-8">
//           <a
//             href="#home"
//             className="font-medium text-gray-400 hover:text-gray-300 transition-all"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="font-medium text-gray-400 hover:text-gray-300 transition-all"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             className="font-medium text-gray-400 hover:text-gray-300 transition-all"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="font-medium text-gray-400 hover:text-gray-300 transition-all"
//           >
//             Contact
//           </a>
//           <a
//             href="#about"
//             className="font-medium text-gray-400 hover:text-gray-300 transition-all"
//           >
//             Resume
//           </a>
//         </div>
//         <div className="flex items-center gap-8 mt-8 text-indigo-500">
//           <a
//             href="https://github.com/Ayushsingh20045"
//             className="hover:-translate-y-0.5 transition-all duration-300"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/ayush-singh-b15b39263/"
//             className="hover:-translate-y-0.5 transition-all duration-300"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>

//           <a
//             href="https://github.com/Ayushsingh20045"
//             className="hover:-translate-y-0.5 transition-all duration-300"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M9 18c-4.51 2-5-2-7-2"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </div>
//         <p className="mt-8 text-center">
//           © 2026 Ayush Singh <a href="https://prebuiltui.com"></a>. All
//           rights reserved.
//         </p>
//       </footer>
//     </>
//   );
// }

// export default Footer
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col border-t-1 items-center justify-around w-full py-16 text-sm text-gray-400"
      >
        {/* Nav Links */}
        <motion.div variants={container} className="flex items-center gap-8">
          <motion.a
            variants={item}
            whileHover={{ y: -3 }}
            href="#home"
            className="font-medium text-gray-400 hover:text-gray-300 transition-all"
          >
            Home
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ y: -3 }}
            href="#about"
            className="font-medium text-gray-400 hover:text-gray-300 transition-all"
          >
            About
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ y: -3 }}
            href="#projects"
            className="font-medium text-gray-400 hover:text-gray-300 transition-all"
          >
            Projects
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ y: -3 }}
            href="#contact"
            className="font-medium text-gray-400 hover:text-gray-300 transition-all"
          >
            Contact
          </motion.a>

          <motion.a
            variants={item}
            whileHover={{ y: -3 }}
            href="/NewMainResume.pdf"
            target="_blank"
            className="font-medium text-gray-400 hover:text-gray-300 transition-all"
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={container}
          className="flex items-center gap-8 mt-8 text-indigo-500"
        >
          {/* Instagram */}
          <motion.a
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Ayushsingh20045"
            className="transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          {/* Linkedin */}
          <motion.a
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/ayush-singh-b15b39263/"
            className="transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          {/* Github */}
          <motion.a
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Ayushsingh20045"
            className="transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18c-4.51 2-5-2-7-2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.p variants={item} className="mt-8 text-center">
          © 2026 Ayush Singh. All rights reserved.
        </motion.p>
      </motion.footer>
    </>
  );
};

export default Footer;