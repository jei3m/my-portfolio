"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@nextui-org/button";

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    "/picofme1.png",
  ];

  return (
    <div className="p-8 flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black dark: bg-grid-white/[0.1] relative flex items-center justify-center">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
          <h2 id="experience" style={{ fontFamily: "'DM Serif Display', serif" }} className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white text-center w-full mb-4">
            Contact Me
          </h2>
          <br />
          <br />
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 shadow-card-animation flex flex-col items-center w-full border border-white">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative mb-4">
              <Image
                src={images[currentImage - 1]}
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
                sizes="100vw"
              />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Justin Miguel Reyes</h1>
            <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-4">BsCpE Student</p>
            <div className="flex flex-wrap justify-center items-center mb-4 text-white text-lg sm:text-xl md:text-2xl" style={{ marginLeft: '1rem' }}>
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
                <a href="/opencv">
                  <Button 
                    color="secondary" 
                    size="md" 
                    variant="ghost" 
                    style={{ color: "white", borderColor: "white", transition: "all 0.3s ease-in-out" }}
                  >
                    Open CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
