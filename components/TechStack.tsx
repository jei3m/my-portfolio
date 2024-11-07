import React from 'react';
import { Brain } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/custom-ui/card';
import { Reveal } from './custom-ui/reveal';
import techStackData from '@/lib/techData.json'; 

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
    <div className="mt-14 flex justify-center items-center">
      <div className="max-w-[900px] mx-auto">
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
                        {tech.isLucideIcon && tech.LucideIcon ? (
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
};

export default TechStack;