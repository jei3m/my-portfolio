"use client"
import { Circle, Github, Linkedin, Mail, MapPin, Instagram, Facebook, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope} from "react-icons/fa6"

export default function Profile() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h2 id="experience" style={{ fontFamily: "'DM Serif Display', serif" }} className="mb-[30px] font-extrabold tracking-tight text-white text-4xl lg:text-4xl text-center w-full z-80">
            Contact Me
        </h2>
      <div className="shadow-card-animation max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-white">
        <div className="md:flex items-center">
          <div className="md:flex-shrink-0 flex justify-center p-4 md:p-8">
          <div className="relative w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-sm-30">
              <Image
                className="rounded-lg object-cover"
                src="/JustinMiguel.png"
                alt="Profile picture"
                fill
              />
            </div>
          </div>
          <div className="p-8 flex-grow">
            <h1 className="text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              Justin Miguel
            </h1>
            <p className="mt-2 text-gray-400 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Floridablanca, PH
            </p>
            <p className="mt-4 text-lg text-gray-300">
              A Computer Engineering student and tech enthusiast with a foundation in web development, IoT, and IT.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="/email" className="text-gray-300 hover:text-white transition-colors">
                <FaEnvelope className="h-7 w-7 mt-[-1px]" />
              </Link>
              <a
                href="https://www.facebook.com/justinmiguel.reyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/jei3m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/_justinmiguel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
              <FontAwesomeIcon icon={faInstagramSquare} className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Circle className="h-3 w-3 text-green-400 fill-current" />
                <span className="text-sm text-gray-300">Ready to connect</span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}