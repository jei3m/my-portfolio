"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="p-8 flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black dark: bg-grid-white/[0.1] relative flex items-center justify-center">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-8 px-4 w-full"
      >
        <div className="h-screen w-full rounded-md flex items-center justify-center overflow-hidden">
          <div className="text-center p-4 w-full pt-20 md:pt-0">
            <h1
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-8 w-full"
            >
              <span className="block text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6rem]">This is</span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6rem]">Justin Miguel</span>
            </h1>

            <div className="text-base sm:text-sm md:text-xl lg:text-xl text-white py-4">
              He dreams big, aims high, and has goals to achieve.
            </div>

            <p className="font-normal text-sm sm:text-base md:text-md lg:text-lg text-neutral-300 max-w-lg mx-auto text-white">
              A PORTFOLIO SHOWCASE WITH NEXT.JS
            </p>

            <Link href="/home">
              <button className="relative p-1 mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent">
                  Learn More
                </div>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
