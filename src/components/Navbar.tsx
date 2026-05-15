
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // stagger container
  const navContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  // stagger item
  const navItem = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <>
      <nav className='w-full md:flex md:items-center md:justify-between md:px-15 px-4 flex items-center justify-between'>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="logo"
        >
          <img src="logo.png" alt="" className='w-32 h-24' />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden mr-2 cursor-pointer"
        >
          {isOpen ? (
            <X className='text-white' />
          ) : (
            <Menu className='text-white' />
          )}
        </motion.div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden"
            >
              <motion.a
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                href="#home"
                className='text-white font-semibold tracking-wide'
              >
                Home
              </motion.a>

              <motion.a
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                href="#about"
                className='text-white font-semibold tracking-wide'
              >
                About
              </motion.a>

              <motion.a
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className='text-white font-semibold tracking-wide'
              >
                Projects
              </motion.a>

              <motion.a
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className='text-white font-semibold tracking-wide'
              >
                Contact
              </motion.a>

              <motion.a
                variants={navItem}
                whileHover={{ scale: 1.05 }}
                href="/NewMainResume.pdf"
                target='_blank'
                className='text-white font-semibold tracking-wide'
              >
                Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="links flex hidden md:block"
        >
          <motion.ul className='flex text-white font-semibold gap-8 text-lg cursor-pointer mr-8'>
            <motion.ul className="flex gap-6 tracking-wide">

              <motion.li
                variants={navItem}
                whileHover={{ y: -2 }}
              >
                <a href="#home" className="nav-item">
                  Home
                </a>
              </motion.li>

              <motion.li
                variants={navItem}
                whileHover={{ y: -2 }}
              >
                <a href="#about" className="nav-item">
                  About
                </a>
              </motion.li>

              <motion.li
                variants={navItem}
                whileHover={{ y: -2 }}
              >
                <a href="#projects" className="nav-item">
                  Projects
                </a>
              </motion.li>

              <motion.li
                variants={navItem}
                whileHover={{ y: -2 }}
              >
                <a href="#contact" className="nav-item">
                  Contact
                </a>
              </motion.li>

              <motion.li
                variants={navItem}
                whileHover={{ y: -2 }}
              >
                <a
                  href="/NewMainResume.pdf"
                  target='_blank'
                  className="nav-item"
                >
                  Resume
                </a>
              </motion.li>

            </motion.ul>
          </motion.ul>
        </motion.div>

      </nav>
    </>
  )
}

export default Navbar