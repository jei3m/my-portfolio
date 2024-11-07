"use client";
import { ExperienceCard } from "./custom-ui/experience-card";
import experiences from '@/lib/experiences.json';
import Head from "next/head";
import { motion } from "framer-motion";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mt-[-30px] flex flex-col overflow-x-hidden overflow-hidden w-full max-w-[900px] mx-auto relative flex items-center justify-center">
        <motion.section
          id="experiences"
          className="p-4 w-full flex flex-col items-start justify-start gap-4 text-white"
        >
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
              rel="stylesheet"
            />
          </Head>
          <br/>

          <motion.h2
            variants={titleVariants}
            id="experience"
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="ml-[-1px] mb-1 font-extrabold tracking-tight text-4xl lg:text-4xl text-left w-full"
          >
            Education
          </motion.h2>

          <motion.div 
            className="flex flex-col gap-4"
            variants={cardContainerVariants}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <ExperienceCard
                  title={experience.title}
                  course={experience.course}
                  school={experience.school}
                  description={experience.description}
                  skills={experience.skills}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}