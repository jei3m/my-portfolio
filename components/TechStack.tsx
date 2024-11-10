import React from 'react';
import { Brain } from 'lucide-react';
import { Card, CardHeader, CardContent } from './custom-ui/card';
import techStackData from '@/lib/techData.json'
import Image from 'next/image';
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
    <div className="relative py-24 mb-[2rem]">

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className={`${dmSerifText.className} text-4xl lg:text-5xl text-white mb-2`}>
           Highlight of Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-gray-400">
            My current skill set that&apos;s constantly evolving.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 mb-[-4rem]">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative"
            >
              <Card className="relative h-full bg-gray-900 border-white/[0.5] hover:scale-[1.05] transition-all duration-200">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex gap-2 bg-gray-800 p-2 rounded-lg">
                    {tech.isLucideIcon && tech.LucideIcon ? (
                      <tech.LucideIcon className="w-6 h-6 text-white" />
                    ) : tech.icons ? (
                      tech.icons.map((icon, i) => (
                        <Image
                          key={i}
                          src={icon}
                          alt={`${tech.title} icon ${i + 1}`}
                          className="w-7 h-7"
                          width={20}
                          height={20}
                        />
                      ))
                    ) : (
                      <Image
                        src={tech.icon!}
                        alt={`${tech.title} icon`}
                        className="w-7 h-7"
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
                  <p className="text-white/80">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;