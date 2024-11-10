import React from 'react';
import { Brain } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "./custom-ui/3d-card2";
import Image from 'next/image';
import { DM_Serif_Text } from "next/font/google";
import techStackData from '@/lib/techData.json';

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
      <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className={`${dmSerifText.className} text-3xl lg:text-5xl text-white mb-2`}>
            Highlight of Technologies
          </h2>
          <p className="mb-[-10px] mt-4 max-w-2xl mx-auto text-sm md:text-lg text-gray-400">
            My current skill set that&apos;s constantly evolving.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 mb-[-4rem]">
          {techStack.map((tech, index) => (
            <CardContainer key={index} className="mt-[-10px] mb-2 w-full h-auto">
              <CardBody className="mb-[-76px] relative w-full h-full bg-gray-900 border border-white/[0.4] rounded-xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-500/[0.1] transition-all duration-300 flex flex-col">
                <CardItem
                  translateZ="64"
                  className="flex flex-row items-center gap-4 p-6 pb-2"
                >
                  <div className="flex-shrink-0 flex gap-2 bg-gray-800 p-2 rounded-lg">
                    {tech.isLucideIcon && tech.LucideIcon ? (
                      <tech.LucideIcon className="w-7 h-7 text-white" />
                    ) : tech.icons ? (
                      tech.icons.map((icon, i) => (
                        <Image
                          key={i}
                          src={icon}
                          alt={`${tech.title} icon ${i + 1}`}
                          className="w-7 h-7"
                          width={30}
                          height={30}
                        />
                      ))
                    ) : (
                      <Image
                        src={tech.icon!}
                        alt={`${tech.title} icon`}
                        className="w-7 h-7"
                        width={30}
                        height={30}
                      />
                    )}
                  </div>
                  <CardItem
                    translateZ="0"
                    as="h3"
                    className="text-xl font-semibold text-white truncate"
                  >
                    {tech.title}
                  </CardItem>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="flex-1 p-6 pt-2 overflow-hidden"
                >
                  <p className="text-white/80 line-clamp-3">
                    {tech.description}
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;