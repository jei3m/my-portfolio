"use client"
import { Circle, Github, Linkedin, Mail, MapPin, Instagram, Facebook, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FaEnvelope } from "react-icons/fa6"

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="text-white flex flex-col items-center justify-center p-4 mt-[6rem]">
      <motion.div 
        className="max-w-[870px] bg-gray-900 rounded-lg shadow-xl border border-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:flex items-center">
          <div className="md:flex-shrink-0 flex justify-center p-4 md:p-8">
            <motion.div 
              className="relative w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-sm-30"
              variants={imageVariants}
            >
              <Image
                className="rounded-lg object-cover"
                src="/JustinMiguel.png"
                alt="Profile picture"
                fill
              />
            </motion.div>
          </div>
          <div className="p-8 flex-grow">
            <motion.h1 
              className="text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl"
              variants={childVariants}
            >
              Justin Miguel
            </motion.h1>
            <motion.p 
              className="mt-2 text-gray-400 flex items-center"
              variants={childVariants}
            >
              <MapPin className="h-5 w-5 mr-2" />
              Floridablanca, PH
            </motion.p>
            <motion.p 
              className="mt-4 text-lg text-gray-300"
              variants={childVariants}
            >
              A Computer Engineering student and tech enthusiast with a foundation in web development, IoT, and IT.
            </motion.p>
            <motion.div 
              className="mt-6 flex space-x-4"
              variants={childVariants}
            >
              <motion.div variants={socialIconVariants} whileHover="hover">
                <Link href="/email" className="text-gray-300 hover:text-white transition-colors">
                  <FaEnvelope className="h-7 w-7 mt-[-1px]" />
                </Link>
              </motion.div>
              
              <motion.div variants={socialIconVariants} whileHover="hover">
                <a
                  href="https://www.facebook.com/justinmiguel.reyes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                </a>
              </motion.div>

              <motion.div variants={socialIconVariants} whileHover="hover">
                <a
                  href="https://github.com/jei3m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                </a>
              </motion.div>

              <motion.div variants={socialIconVariants} whileHover="hover">
                <a
                  href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                </a>
              </motion.div>

              <motion.div variants={socialIconVariants} whileHover="hover">
                <a
                  href="https://www.instagram.com/_justinmiguel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-4 flex items-center justify-between"
              variants={childVariants}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Circle className="h-3 w-3 text-green-400 fill-current" />
                <span className="text-sm text-gray-300">Ready to connect</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/opencv">
                  <button className="group relative overflow-hidden rounded-full px-4 py-2 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center gap-2 text-zinc-100">
                      <span className="text-sm font-medium">Open CV</span>
                      <FileText className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}