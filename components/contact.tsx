"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    "/JustinMiguel.png",
  ];

  return (
    <div className="p-4 flex flex-col overflow-x-hidden overflow-hidden w-full relative flex items-center justify-center">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
          <h2 id="experience" style={{ fontFamily: "'DM Serif Display', serif" }} className="mb-[40px] font-extrabold tracking-tight text-white text-4xl lg:text-4xl text-center w-full z-80">
            Contact Me
          </h2>

          <div className="bg-gray-900 rounded-xl overflow-hidden p-4 sm:p-6 md:p-8 shadow-card-animation flex flex-col items-center w-full border border-white">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative mb-4">
              <Image
                src={images[currentImage - 1]}
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                sizes="100vw"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Justin Miguel Reyes</h1>
            <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-4">BsCpE Student</p>
            <div className="flex flex-wrap justify-center items-center mb-4 text-white text-lg sm:text-xl md:text-3xl" style={{ marginLeft: '1rem' }}>
              <a href="/email" className="flex justify-center items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.facebook.com/justinmiguel.reyes/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://github.com/jei3m" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/_justinmiguel/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
            <div className="text-sm sm:text-sm md:text-base text-white text-center">
              <p>+63 985-184-5658</p>
              <br/>
              If you&apos;d like to contact me, feel free to reach out on my socials!
              <br/><br/>
              <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link href="/opencv">
                <button className="group relative overflow-hidden rounded-full px-8 py-3 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-300">                  {/* Button gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center gap-2 text-zinc-100">
                      <span className="text-base font-medium">Open CV</span>
                      <Sparkles className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    
                    {/* Animated highlight */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                  </button>
                </Link>
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
