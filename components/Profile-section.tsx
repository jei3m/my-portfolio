"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { Sparkles, ChevronDown } from "lucide-react";
import { StarsBackground } from "./custom-ui/stars-background";
import { useState } from "react";
import { Circle, MapPin, FileText, Mail, FileTextIcon, CopyIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Reveal } from "./custom-ui/reveal";
import { IBM_Plex_Serif } from "next/font/google";
import EmailModal from './custom-ui/email-modal';
import { TransitionLink } from "@/utils/TransitionLink";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProfileSection() {
  const [isCopied, setIsCopied] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

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
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("justinmiguel.rys03@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full relative bg-zinc-950 relative">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      {/* Hero Section */}
      <div className="relative py-2 md:py-12 lg:py-24 z-10 flex-1 flex items-center justify-center px-2 md:px-20 lg:px-8">
        
        <div className="border-4 lg:border-8 border-neutral-800 bg-opacity-80 bg-zinc-900 w-full max-w-7xl mx-auto rounded-2xl px-6 py-2 md:py-8 lg:p-4">
          <Reveal
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            <div className="mt-4 md:mt-0 space-x-2 align-right flex justify-end">
            <Circle className="h-4 w-4 lg:h-5 lg:w-5 text-red-400 fill-current" />
            <Circle className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current" />
            <Circle className="h-4 w-4 lg:h-5 lg:w-5 text-green-400 fill-current" />
            </div>
            <motion.div 
              className="lg:grid lg:grid-cols-[0.8fr,1.2fr] lg:gap-6 items-center py-8 lg:py-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Image Section - Now on the left */}
              <div className="relative mb-4 lg:mb-0">
              
                <Reveal
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
                >
                  
                  <div className="relative w-[90%] mx-auto lg:w-[85%] aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      className="object-cover"
                      src="/JustinMiguel2.png"
                      alt="Profile picture"
                      fill
                      priority
                    />
                  </div>
                </Reveal>
              </div>

              {/* Text Content */}
              <div className="ml-[-10px]">
                <Reveal
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <motion.h1 
                    className={`${ibmPlexSerif.className} ml-1 lg:ml-3 text-xl lg:text-2xl leading-tight text-white md:mb-[-4px]`}
                    variants={childVariants}
                  >
                   Hey, my name is
                  </motion.h1>
                  <motion.h1 
                    className={`${ibmPlexSerif.className} text-4xl lg:text-7xl leading-tight font-bold text-white mb-2`}
                    variants={childVariants}
                  >
                    Justin Miguel
                  </motion.h1>
                </Reveal>

                <Reveal
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <motion.p 
                    className="text-md md:text-xl text-gray-400 font-semibold flex items-center mb-4 md:mb-12"
                    variants={childVariants}
                  >
                    <MapPin className="h-4 w-4 md:h-6 md:w-6 mr-1" />
                    Floridablanca, PH
                  </motion.p>
                </Reveal>

                <Reveal
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <motion.p 
                    className="text-md md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-11 leading-relaxed"
                    variants={childVariants}
                  >
                    I&apos;m a Computer Engineering student and an aspiring Full Stack Developer with a foundation in Web Development, IoT, and IT.
                    {/* <span className="text-4xl ml-2">👨🏻‍💻</span> */}
                  </motion.p>
                </Reveal>

                {/* Social Links */}
                <Reveal
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <motion.div 
                    className="flex justify-center md:justify-start space-x-4 md:space-x-6 md:mb-10"
                    variants={childVariants}
                  >
                    <motion.div 
                      variants={socialIconVariants} 
                      whileHover="hover"
                      onClick={() => setIsEmailModalOpen(true)}
                      className="cursor-pointer"
                    >
                      <Mail className="h-9 w-9 md:h-11 md:w-11 mt-[-3px] text-orange-300 hover:text-white transition-colors" />
                    </motion.div>

                    <motion.div variants={socialIconVariants} whileHover="hover">
                      <a
                        href="https://www.facebook.com/justinmiguel.reyes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faFacebook} className="h-7 w-7 md:h-9 md:w-9" />
                      </a>
                    </motion.div>

                    <motion.div variants={socialIconVariants} whileHover="hover">
                      <a
                        href="https://github.com/jei3m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} className="h-7 w-7 md:h-9 md:w-9" />
                      </a>
                    </motion.div>

                    <motion.div variants={socialIconVariants} whileHover="hover">
                      <a
                        href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7 md:h-9 md:w-9" />
                      </a>
                    </motion.div>

                    <motion.div variants={socialIconVariants} whileHover="hover">
                      <TransitionLink
                        href="/opencv"
                      >
                        <FileText className="h-7 w-7 md:h-9 md:w-9 text-red-300 hover:text-white transition-colors" />
                      </TransitionLink>
                    </motion.div>
                  </motion.div>
                </Reveal>

                {/* Email Section */}
                <Reveal
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                  <motion.div 
                    className="flex items-center space-x-2 hidden md:flex mb-[-2rem] lg:mb-0"
                    variants={childVariants}
                  >
                    <Circle className="h-3 w-3 text-green-400 fill-current" />
                    <span className="text-xl text-gray-300">justinmiguel.rys03@gmail.com</span>
                    <div className="relative w-6 h-6">
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.div
                            key="check"
                            className="absolute inset-0"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <CheckIcon className="h-6 w-6 text-green-400" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            className="absolute inset-0 cursor-pointer"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={handleCopy}
                          >
                            <CopyIcon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Background Effect */}
      <StarsBackground />

      {/* Email Modal */}
      <EmailModal 
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}``