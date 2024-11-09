"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden overflow-hidden w-full h-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
                className="mb-2 text-2xl md:text-3xl font-light text-zinc-300"
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
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed  mt-[-10px]">
              A Computer Engineering student that bridge academic knowledge with real-world applications.              
              </p>
              
              {/* <div className="text-sm font-medium text-zinc-400 tracking-wide">
                A PORTFOLIO SHOWCASE WITH NEXT.JS
              </div> */}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6"
            >
              <Link href="/home">
              <button className="group relative overflow-hidden rounded-full px-8 py-3 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-300">                  {/* Button gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-2 text-zinc-100">
                    <span className="text-base font-medium">Explore Portfolio</span>
                    <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  
                  {/* Animated highlight */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}