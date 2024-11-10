"use client";
import Image from "next/image";
import experienceItems from '@/lib/experience.json';
import { Reveal } from './custom-ui/reveal';
import { AnimatePresence, motion } from 'framer-motion';
import { DM_Serif_Text } from "next/font/google";
import { Badge } from "./custom-ui/badge";

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

export default function Component() {
  return (
    <section className="mt-2 text-white p-4">
      <div className="max-w-[870px] w-full mx-auto relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <Reveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <h2 className={`${dmSerifText.className} mb-1 text-3xl lg:text-4xl text-white`}>
              Experience
            </h2>
            {/* <p className="text-sm md:text-lg text-gray-400 mt-2">Not that much but we'll get there</p> */}

          </Reveal>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
            className="space-y-4"
          >
            {experienceItems.map((item, index) => (
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
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                      >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-0">
                          <h3 className="text-xl sm:text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-md text-gray-400">
                            {item.school}
                          </p>
                        </div>
                      </Reveal>

                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <p className="text-base sm:text-lg text-gray-300">
                          {item.course}
                        </p>
                      </Reveal>

                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <p className="text-sm sm:text-md text-gray-300 mt-2 whitespace-pre-line">
                          {item.description}
                        </p>
                      </Reveal>

                      {/* Skills Badges */}
                      <Reveal
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                      >
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              className="rounded-md px-1 mt-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
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