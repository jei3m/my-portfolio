import React from 'react';
import { Brain } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/custom-ui/card';
import { Reveal } from './custom-ui/reveal';

const techStack = [
  {
    title: 'React.js',
    description:
      'Building dynamic and responsive user interfaces with React\'s component-based architecture and hooks.',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
  },
  {
    title: 'Next.js',
    description:
      'Leveraging server-side rendering and static site generation for optimal performance and SEO.',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg',
  },
  {
    title: 'HTML & CSS',
    description:
      'Crafting semantic markup and stylish designs with modern HTML5 and CSS3 features.',
    icons: [
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    ],
  },
  {
    title: 'Tailwind CSS',
    description:
      'Utilizing utility-first CSS framework for rapid and consistent UI development.',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
  },

  {
    title: 'Vite',
    description:
      'Leveraging Vite for lightning-fast development server and optimized production builds.',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg',
  },

  {
    title: 'JavaScript Ecosystem',
    description:
      'Creating interactive and dynamic web applications with modern JavaScript and TypeScript.',
    icons: [
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
    ],
  },

  {
    title: 'Python',
    description:
      'Implementing machine learning algorithms for data analysis and predictive modeling.',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
  },

  {
    title: 'Firebase & Supabase',
    description:
      'Implementing real-time databases, authentication, and cloud functions for web applications.',
    icons: [
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg',
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg',
    ],
  },
  {
    title: 'IoT Development',
    description:
      'Creating embedded systems with Arduino and Raspberry Pi for innovative hardware solutions.',
    icons: [
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg',
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/raspberrypi-colored.svg',
    ],
  },
  {
    title: 'AI Integration',
    description:
      'Implementing AI capabilities through API inferences and local models like Ollama.',
    isLucideIcon: true,
    LucideIcon: Brain,
  },
];

export default function TechStack() {
  return (
    <div className="mt-14 flex justify-center items-center">
      <div className="max-w-[1000px] mx-auto">
        <section className="py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              id="techstack"
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="ml-[2px] mb-1 font-extrabold tracking-tight text-white text-4xl lg:text-4xl text-left w-full z-80"
            >
              Technologies
            </h2>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <Reveal
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
              >
                <Card className="bg-gray-900 border-white hover:border-blue-500 hover:scale-105 transition-all duration-300">
                <Reveal
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex gap-2 bg-gray-800 p-3 rounded-lg">
                      {tech.isLucideIcon ? (
                        <tech.LucideIcon className="w-6 h-6 text-white" />
                      ) : tech.icons ? (
                        tech.icons.map((icon, i) => (
                          <img
                            key={i}
                            src={icon}
                            alt={`${tech.title} icon ${i + 1}`}
                            className="w-6 h-6"
                          />
                        ))
                      ) : (
                        <img
                          src={tech.icon}
                          alt={`${tech.title} icon`}
                          className="w-6 h-6"
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
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}