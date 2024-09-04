"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@nextui-org/button";

export default function Contact() {
  const [currentImage, setCurrentImage] = useState(1);
  const images = [
    "/picofme1.png",
  ];

  return (
    <div className="p-8 flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black bg-black dark:bg-grid-white/[0.1] relative flex items-center justify-center">
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
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 relative mb-4">
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
            <div className="flex flex-wrap justify-center items-center mb-4 text-white text-lg sm:text-xl md:text-2xl">
              <a href="/email" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              </a>
              <a href="https://www.facebook.com/justinmiguel.reyes/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              </a>
              <a href="https://github.com/jei3m" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
              </a>
              <a href="https://www.instagram.com/_justinmiguel/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 mr-4">
                <FontAwesomeIcon icon={faInstagramSquare} className="mr-2" />
              </a>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white text-center">
              <p>+63 985-184-5658</p>
              <br/>
              If you&apos;d like to contact me, feel free to reach out on my socials!
              <br/><br/>
              <div className="text-center">
                <a href="#contacts">
                  <Button 
                    color="primary" 
                    size="md" 
                    variant="ghost" 
                    style={{ color: "white", borderColor: "white", transition: "all 0.3s ease-in-out" }}
                  >
                    Résumé
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
