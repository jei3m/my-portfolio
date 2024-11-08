"use client"
import { Circle, MapPin, FileText, Mail, FileTextIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FaRegEnvelope, FaFileLines, FaRegFileLines } from "react-icons/fa6"
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400","500","600", "700"], // or any other available weights
});

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    hover: { 
      scale: 1.4,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <div className="text-white flex flex-col justify-center p-4 mt-[6rem]">
      <motion.div variants={childVariants} initial="hidden" animate="visible">
      <div className="text-left mb-4 font-semibold text-lg">Hello! 🙂‍↕️</div>
      </motion.div>
      <motion.div 
        className="max-w-[870px] bg-gray-900 rounded-lg shadow-xl border border-white/[0.5]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:flex items-center">
          <div className="md:flex-shrink-0 flex justify-center py-4 md:pl-8">
          {/* className="mr-4relative w-40 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-52 md:h-60 lg:h-64 mb-sm-30" */}
            <motion.div 
              className="mr-4 relative w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-60 lg:w-56 lg:h-64 mb-sm-30"
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
          <div className="py-8 px-3 flex-grow">
            <motion.h1 
              className={`${ibmPlexSerif.className} text-4xl leading-8 font-semibold tracking-tight text-white md:text-5xl`}
              variants={childVariants}
            >
              Justin Miguel
            </motion.h1>
            <motion.p 
              className="mt-2 text-gray-400 font-semibold flex items-center"  
              variants={childVariants}
            >
              <MapPin className="h-5 w-5 mr-1" />
              Floridablanca, PH
            </motion.p>
            <motion.p 
              className="mt-4 text-lg text-gray-300"
              variants={childVariants}
            >
              A Computer Engineering student and Tech Enthusiast with a foundation in Web Development, IoT, and IT.<span className="text-2xl">👨🏻‍💻</span>
            </motion.p>
            <motion.div 
              className="mt-5 flex space-x-4"
              variants={childVariants}
            >
             <motion.div variants={socialIconVariants} whileHover="hover">
              <Link href="/email" className="text-orange-300 hover:text-white transition-colors">
                <Mail className="h-7 w-7 mt-[-2px]" />
              </Link>
            </motion.div>

            <motion.div variants={socialIconVariants} whileHover="hover">
              <a
                href="https://www.facebook.com/justinmiguel.reyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
            </motion.div>

            <motion.div variants={socialIconVariants} whileHover="hover">
              <a
                href="https://github.com/jei3m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
            </motion.div>

            <motion.div variants={socialIconVariants} whileHover="hover">
              <a
                href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7 mt-[-2px]" />
              </a>
            </motion.div>

            <motion.div variants={socialIconVariants} whileHover="hover">
              <a
                href="/opencv"
                className="text-red-300 hover:text-white transition-colors"
              >
                <FileText className="h-6 w-6" />
              </a>
            </motion.div>
    
            </motion.div>

            <motion.div 
              className="mt-4 flex items-center justify-between"
              variants={childVariants}
            >
              <motion.div 
                className="flex items-center space-x-2 mt-1"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              >
                <Circle className="h-3 w-3 text-green-400 fill-current mr-[-3px]" />
                <span className="text-md text-gray-300">justinmiguel.rys03@gmail.com</span>
              </motion.div>
              
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              >
                <Link href="/opencv">
                  <button className="group relative overflow-hidden rounded-full px-4 py-2 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
                    
                    <div className="relative flex items-center gap-2 text-zinc-100 sm:text-xs">
                      <span className="text-sm font-medium">Open CV</span>
                      <FileText className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors duration-200" />
                    </div>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
                  </button>
                </Link>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* <div className="text-right mt-4 font-semibold text-lg">please hmu. 🙁</div> */}
    </div>
  )
}