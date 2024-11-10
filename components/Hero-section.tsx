"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Sparkles, ChevronDown } from "lucide-react";
import { StarsBackground } from "./custom-ui/stars-background";

export default function Hero() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-hidden w-full h-full relative flex items-center justify-center bg-neutral-900 z-50">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
  
      {/* Content container */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex min-h-screen flex-col items-center justify-center px-4"
        >
          <div className="relative text-center max-w-5xl mx-auto">

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 
                className="mb-1 text-2xl md:text-3xl font-light text-zinc-300"
                style={{ fontFamily: "Inter" }}
              >
                Welcome to the portfolio of
              </h2>
              <h1
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
              >
                <span className="inline-block text-white">
                  Justin Miguel
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 space-y-6"
            >
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mt-[-10px]">
                A Computer Engineering student that bridge academic knowledge with real-world applications.              
              </p>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center text-zinc-400 cursor-pointer hover:text-zinc-200 transition-colors duration-300"
              >
                <span className="text-md font-medium mb-1">Scroll Down</span>
                <div className="flex flex-col items-center gap-1">
                  <ChevronDown className="w-5 h-5" />
                  <ChevronDown className="w-5 h-5 -mt-3" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <StarsBackground/>
    </div>
  );
}