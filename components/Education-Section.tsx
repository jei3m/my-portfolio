"use client";
import Image from "next/image";
import educationItems from '@/lib/education.json';
import experienceItems from '@/lib/experience.json';
import { useState } from 'react';
import { Reveal } from './custom-ui/reveal';
import { Star } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';

export default function Component() {
  const [isEducation, setIsEducation] = useState(true);

  const toggleSection = () => {
    setIsEducation(!isEducation);
  };

  return (
    <section className="mt-2 text-white flex items-center justify-center p-4">
      <div className="max-w-[900px] w-full mx-auto relative">
        <Reveal
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: 'white'
            }}
            className="mb-4 font-extrabold tracking-tight text-4xl lg:text-4xl text-left z-80"
          >
            {isEducation ? 'Education' : 'Experience'}
          </h2>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={isEducation ? "education" : "experience"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
            className="space-y-4"
          >
            {(isEducation ? educationItems : experienceItems).map((item, index) => (
              <Reveal
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              >
                <div
                  className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center justify-between border border-white/[0.5] hover:border-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-grow">
                    <Reveal
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                    >
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.school || item.school}
                      </h3>
                    </Reveal>

                    <Reveal
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                      <p className="text-lg text-gray-300">
                        {item.degree || item.degree}
                      </p>
                    </Reveal>

                    <Reveal
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                      <p className="text-md text-gray-400 mb-2">
                        {item.year}
                      </p>
                    </Reveal>

                    <Reveal
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                      <p className="text-md text-gray-300 max-w-2xl">
                        {item.description}
                      </p>
                    </Reveal>
                  </div>

                  <div className="ml-6 flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={`${item.school || item.school} logo`}
                      width={90}
                      height={90}
                      className="rounded-full bg-white"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-0 right-0 mt-1">
        <Reveal
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <button
            onClick={toggleSection}
            className="group relative overflow-hidden rounded-full px-4 py-2 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
            <div className="relative flex items-center gap-2 text-zinc-100">
              <span className="text-sm font-medium">{isEducation ? 'Experience' : 'Education'}</span>
              <Star className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors duration-200" />
            </div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" /> 
          </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}