"use client";
import Image from "next/image";
import educationItems from '@/lib/education.json';
import achievementsItems from '@/lib/achievements.json';
import { useState } from 'react';
import { Reveal } from './custom-ui/reveal';
import { Star } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

export default function Component() {
  const [isEducation, setIsEducation] = useState(true);

  const toggleSection = () => {
    setIsEducation(!isEducation);
  };

  return (
    <section className="mt-2 text-white p-4">
      <div className="max-w-[870px] w-full mx-auto relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <Reveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <h2 className={`${dmSerifText.className} text-3xl lg:text-4xl text-white`}>
              {isEducation ? 'Education' : 'Achievements'}
            </h2>
            {/* <p className="text-sm md:text-lg text-gray-400 mt-2">A summary of my education and achievements</p> */}

          </Reveal>

          <Reveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <div className="flex items-center">
              <span className="mr-2 text-xl relative hidden sm:block">👉</span>
              <button
                onClick={toggleSection}
                className="group relative overflow-hidden rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
                <div className="relative flex items-center gap-2 text-zinc-100">
                  <span className="text-sm font-medium">{isEducation ? 'Achievements' : 'Education'}</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-purple-300 transition-colors duration-200" />
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isEducation ? "education" : "achievements"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
            className="space-y-4"
          >
            {(isEducation ? educationItems : achievementsItems).map((item, index) => (
              <Reveal
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              >
                <div className="bg-gray-900 p-3 sm:p-4 rounded-lg shadow-lg border border-white/[0.4] hover:scale-[1.04] transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.school || item.school} logo`}
                        width={64}
                        height={64}
                        className="rounded-full bg-white w-16 h-16 sm:w-[86px] sm:h-[86px]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow w-full">
                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-0">
                          <h3 className="text-xl sm:text-2xl font-semibold">
                            {item.school || item.school}
                          </h3>
                          <p className="text-sm sm:text-md text-gray-400">
                            {item.year}
                          </p>
                        </div>
                      </Reveal>

                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <p className="text-base sm:text-lg text-gray-300">
                          {item.degree || item.degree}
                        </p>
                      </Reveal>

                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <p className="text-sm sm:text-md text-gray-300 mt-1 whitespace-pre-line">
                          {item.description}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}