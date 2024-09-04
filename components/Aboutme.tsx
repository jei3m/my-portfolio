"use client";
import React from "react";
import Head from "next/head";
import { FeaturesSectionDemo } from "./custom/FeaturesSectionDemo";

const content = [
  // {
  //   title: "Introduction",
  //   description:
  //     "I'm a passionate and dedicated computer engineering student with a focus on creating both innovative software and hardware solutions. My experience spans multiple domains, from firmware installation to ESP32 devices, web development, computer building and troubleshooting, and also basic mobile device repair to common issues. I am continuously studying the current trends in both hardware and software development, and one day, I'll be working within those developments.",
  //   bgColor: "bg-gray-900", // Dark gray background
  // },
  {
    title: "Background",
    description:
      "My overall background as a computer engineering student comes with a strong foundation in both hardware and software. Whether porting intricate firmware like 'Marauder' for ESP32 devices, or working on web development with HTML, CSS, React.js, and Next.js, with a touch of the Django REST framework. I'm also experienced with various hardware components with Arduino, and I can build computers, and do basic troubleshooting on both the hardware and software side.",
    bgColor: "bg-gray-900", // Dark gray background
  },
  {
    title: "Hobbies/Skills",
    description:
      "• Keyboard building and modding.\n• PC building and Windows software optimization.\n• Mobile device repair, replacing common parts.\n• Working on hardware projects like ESP32.\n• Playing table tennis as I am a student athlete.\n• Web development, working on projects, and studying languages.\n• To constantly learn about anything there is about technology.",
    bgColor: "bg-gray-900", // Dark gray background
  },
];

export default function Aboutme() {
  return (
    <div className="p-8 w-full max-w-screen-xl mx-auto dark:bg-black bg-black relative flex flex-col items-center justify-center">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h2 id="experience" style={{ fontFamily: "'DM Serif Display', serif", color: 'white' }} className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center w-full">
        Capabilities
      </h2>
       <FeaturesSectionDemo/>
      <br/>
    </div>
  );
}
