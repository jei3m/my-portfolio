"use client";
import React, { useRef } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const CVPage = () => {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.click();
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-full">
        <div className="w-full h-full bg-neutral-950 bg-grid-neutral-800" />
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10 w-full min-h-screen">
        <div className="p-2 flex flex-col w-full">

          <Head>
            <title>My CV</title>
            <meta name="description" content="View my professional CV" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>

          <main className="max-w-[800px] flex-grow container mx-auto px-4 py-10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
            <motion.h2
              id="OpenCV"
              className={`${dmSerifText.className} mt-2 text-left mb-[4px] text-3xl sm:text-4xl lg:text-4xl z-80 text-white`}                        
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
             Curriculum Vitae
            </motion.h2>

            <motion.div
              className="mb-[1px] text-gray-600 cursor-pointer text-xl"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
              onClick={() => window.location.href = '/#profile'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 256 256">
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </motion.div>
            </div>
  
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[800px]"
            >
              <div className="relative w-full h-full" style={{ paddingBottom: "141.4%" }}>
                <iframe
                  src="https://drive.google.com/file/d/1UiTnnIj4jY54-4aKDCLcoHCOkSiaBblB/preview" 
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                ></iframe>
              </div>
            </motion.div>
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center text-white mb-4"
            >
              If the CV doesn&apos;t load, please{' '}
              <a
                href="https://drive.google.com/file/d/1UiTnnIj4jY54-4aKDCLcoHCOkSiaBblB/view?usp=sharing"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>{' '}
              to view it directly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-6 py-2 bg-white text-black rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleDownload}
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </motion.button>
              <a
                ref={downloadRef}
                href="/CV_Reyes,JustinMiguelB.pdf"
                download="CV_Reyes,JustinMiguelB.pdf" 
                style={{ display: 'none' }}
              />
            </motion.div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default CVPage;