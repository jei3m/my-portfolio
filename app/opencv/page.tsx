"use client";
import React, { useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CVPage = () => {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.click();
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-auto min-h-screen bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
    <div className="p-6 flex flex-col overflow-x-hidden overflow-hidden w-full h-full relative flex items-center justify-center">
      <Header />
      <Head>
        <title>My CV</title>
        <meta name="description" content="View my professional CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-20 flex flex-col items-center">
        <h2
          id="experience"
          style={{ fontFamily: "DM Serif Display, serif", color: "white" }}
          className="scroll-m-20 font-extrabold tracking-tight text-3xl lg:text-4xl sm:text-4xl text-center w-full z-20"
        >
          My Curriculum Vitae
        </h2>
        <br />
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
            <iframe
              src="https://drive.google.com/file/d/1Z26ZeU7EK-BiPP8ftuZHk4ptH84pq3IP/preview" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        <br />
        <p className="mt-2 text-center text-white mb-3">
          If the CV doesn&apos;t load, please{' '}
          <a
            href="https://drive.google.com/file/d/1-x7_I7pG3Hz_rN8Y5HqavvgJ9jHKLWBC/view?usp=sharing"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{' '}
          to view it directly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleDownload}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download CV
          </button>
          <a
            ref={downloadRef}
            href="/Reyes_Justin_Miguel_CV.pdf" 
            download="Reyes_Justin_Miguel_CV.pdf" 
            style={{ display: 'none' }}
          />
        </div>
      </main>
    </div>
    </div>
  );
};

export default CVPage;