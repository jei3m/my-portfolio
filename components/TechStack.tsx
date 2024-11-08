"use client";
import React from 'react';
import { Brain } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/custom-ui/card';
import { Reveal } from './custom-ui/reveal';
import techStackData from '@/lib/techData.json'; 
import Image from 'next/image';
import Head from "next/head";
import { motion } from 'framer-motion';
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });


interface TechStackItem {
  title: string;
  description: string;
  icon?: string;
  icons?: string[];
  isLucideIcon?: boolean;
  LucideIcon?: typeof Brain;
}

const techStack: TechStackItem[] = techStackData.map(item => ({
  ...item,
  LucideIcon: item.LucideIcon === 'Brain' ? Brain : undefined,
}));

const TechStack: React.FC = () => {
  return (
    <div className="flex justify-center items-center z-50">
      <div className="max-w-[900px] mx-auto">
        <section className="py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
              >
                    <motion.h2
                        id="Tech"
                        className={`${dmSerifText.className} text-left mb-[-1px] text-4xl lg:text-4xl z-80 text-white`}                        
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        Technologies
                    </motion.h2>
            </Reveal>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
              >
                <Card className="bg-gray-900 border-white/[0.5] hover:border-blue-500 hover:scale-104 transition-all duration-300">
                  <Reveal
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="flex gap-2 bg-gray-800 p-3 rounded-lg">
                        {tech.isLucideIcon && tech.LucideIcon ? (
                          <tech.LucideIcon className="w-6 h-6 text-white" />
                        ) : tech.icons ? (
                          tech.icons.map((icon, i) => (
                            <Image
                              key={i}
                              src={icon}
                              alt={`${tech.title} icon ${i + 1}`}
                              className="w-6 h-6"
                              width={20}
                              height={20}
                            />
                          ))
                        ) : (
                          <Image
                            src={tech.icon!}
                            alt={`${tech.title} icon`}
                            className="w-6 h-6"
                            width={20}
                            height={20}
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {tech.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{tech.description}</p>
                    </CardContent>
                  </Reveal>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-right mr-[-4px] mt-4 font-semibold text-white text-lg">thank you. 🥺</div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;