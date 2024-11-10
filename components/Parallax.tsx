"use client";
import React from "react";
import { HeroParallax } from "./custom-ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={projects} />;
}

export const projects = [
  {
    title: "ScribeAI",
    link: "https://ai-scribe.netlify.app",
    thumbnail: "/assets/img/scribeai.png",
  },
  {
    title: "AI-Ponics",
    link: "https://ai-ponics.netlify.app",
    thumbnail: "/assets/img/aiponics2.png",
  },
  {
    title: "AI Coder",
    link: "https://ai-coder-llama.netlify.app",
    thumbnail: "/assets/img/aicoder.png",
  },
  {
    title: "Ollama Chat",
    link: "https://ollama-chat.netlify.app",
    thumbnail: "/assets/img/OllamaChat.png",
  },
  {
    title: "Pogi Typings",
    link: "https://pogi-typings.vercel.app",
    thumbnail: "/assets/img/pogitypings.png",
  },
  {
    title: "Life Expectancy",
    link: "https://life-expectancy-prediction.netlify.app",
    thumbnail: "/assets/img/life.png",
  },
  {
    title: "About Me",
    link: "https://aboutjm.vercel.app",
    thumbnail: "/assets/img/aboutme.png",
  },
  {
    title: "CYD Marauder",
    link: "https://cyd-marauder.netlify.app",
    thumbnail: "/assets/img/cyd.png",
  },
  
];
