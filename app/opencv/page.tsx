"use client";
import React, { useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const CVPage = () => {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.click();
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto min-h-screen bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
    <div className="p-5 flex flex-col overflow-x-hidden overflow-hidden w-full h-full relative flex items-center justify-center">
      <Header />
      <Head>
        <title>My CV</title>
        <meta name="description" content="View my professional CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="experience"
          style={{ fontFamily: "DM Serif Display, serif", color: "white" }}
          className="scroll-m-20 font-extrabold tracking-tight text-3xl lg:text-4xl sm:text-4xl text-center w-full z-20"
        >
          My Curriculum Vitae
        </motion.h2>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl"
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
  );
};

export default CVPage;