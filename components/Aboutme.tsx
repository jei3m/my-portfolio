import React from 'react';

import {
  Blocks, // React
  FileCode, // Next.js
  Code2, // HTML
  Paintbrush, // CSS
  Wind, // Tailwind
  Binary, // Python
  FileJson, // JavaScript
  Cpu, // C++
  Flame, // Firebase
  Cloud, // Netlify
  Rocket, // Vercel
  CircuitBoard, // Arduino
  Server, // Raspberry Pi
  Brain, // AI
} from 'lucide-react';

import { Card, CardHeader, CardContent } from '@/components/custom-ui/card';
import { Reveal } from './custom-ui/reveal';

const techStack = [
  {
    title: 'React.js',
    description:
      'Building dynamic and responsive user interfaces with React\'s component-based architecture and hooks.',
    icon: Blocks,
  },
  {
    title: 'Next.js',
    description:
      'Leveraging server-side rendering and static site generation for optimal performance and SEO.',
    icon: FileCode,
  },
  {
    title: 'HTML & CSS',
    description:
      'Crafting semantic markup and stylish designs with modern HTML5 and CSS3 features.',
    icon: Code2,
  },
  {
    title: 'Tailwind CSS',
    description:
      'Utilizing utility-first CSS framework for rapid and consistent UI development.',
    icon: Wind,
  },
  {
    title: 'Python',
    description:
      'Implementing machine learning algorithms for data analysis and predictive modeling.',
    icon: Binary,
  },
  // {
  //   title: 'JavaScript',
  //   description:
  //     'Creating interactive and dynamic web applications with modern JavaScript features and APIs.',
  //   icon: FileJson,
  // },
  {
    title: 'C++',
    description:
      'Developing input/output programs with complex calculations and computational logic implementation.',
    icon: Cpu,
  },
  {
    title: 'Firebase',
    description:
      'Implementing real-time databases, authentication, and cloud functions for web applications.',
    icon: Flame,
  },
  {
    title: 'Deployment',
    description:
      'Deploying and hosting applications on Netlify and Vercel for optimal performance and reliability.',
    icon: Cloud,
  },
  {
    title: 'IoT Development',
    description:
      'Creating embedded systems with Arduino and Raspberry Pi for innovative hardware solutions.',
    icon: CircuitBoard,
  },
  {
    title: 'AI Integration',
    description:
      'Implementing AI capabilities through API inferences and local models like Ollama.',
    icon: Brain,
  },
];

export default function TechStack() {
  return (
    <div className="mt-14 flex justify-center items-center">
      <div className="max-w-[1050px] mx-auto">
        {/* Hero Section */}
        <section className="py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              id="techstack"
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="ml-[2px] mb-1 font-extrabold tracking-tight text-white text-4xl lg:text-4xl text-left w-full z-80"
            >
              Technologies
            </h2>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <Reveal
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              >
                <Card key={index} className="bg-gray-900 border-white">
                  <Reveal
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-white rounded-lg">
                        <tech.icon className="w-6 h-6 text-black" />
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
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
