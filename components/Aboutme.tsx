import React from 'react';
import { 
  Terminal, 
  MoveHorizontal, 
  Brain, 
  Shield, 
  Scale, 
  HeartHandshake,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Problem Solver",
    description: "I thrive on solving complex challenges with creative solutions. I always bring a fresh perspective to every problem.",
    icon: Terminal,
  },
  {
    title: "Versatile Skill Set",
    description: "From coding to building computers, I quickly adapt to various roles and technologies, ensuring high-quality results..",
    icon: MoveHorizontal,
  },
  {
    title: "Constant Learner",
    description: "Continuously learning to bring the most current and effective solutions to each and every project.",
    icon: Brain,
  },
  {
    title: "Reliable Performance",
    description: "Committed to delivering consistent and dependable results. My work is designed to stand up to rigorous demands.",
    icon: Shield,
  },
  {
    title: "Scalable Solutions",
    description: "Create solutions that grow with your needs. Efficient and effective multi-tenant architecture for flexible scalability.",
    icon: Scale,
  },
  {
    title: "Dedicated Support",
    description: "Available around the clock to address your needs. Always reachable and responsive, with support systems in place to ensure success.",
    icon: HeartHandshake,
  },
  {
    title: "Adaptive Thinking",
    description: "Quick to embrace new challenges and technologies, I tailor my problem-solving approach to fit the evolving needs of each project.",
    icon: Lightbulb,
  },
  {
    title: "And Beyond",
    description: "Always evolving and ready to tackle new challenges, I bring a dynamic and innovative approach to every project. Let's see how my skills can meet your needs.",
    icon: Sparkles,
  },
];

export default function aboutme() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[1034px] mx-auto">
        {/* Hero Section */}
        <section className="py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
          <h2
          id="experience"
          style={{ fontFamily: "'DM Serif Display', serif" }}
          className="ml-[2px] mb-1 font-extrabold tracking-tight text-white text-4xl lg:text-4xl text-left w-full z-80"
        >
          Capabilities
        </h2>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gray-900 border-white"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}