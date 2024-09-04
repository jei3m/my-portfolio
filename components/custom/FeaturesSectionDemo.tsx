import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Problem Solver",
      description:
        "I thrive on solving complex challenges with creative solutions. I always bring a fresh perspective to every problem.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Versatile Skill Set",
      description:
        "From coding to building computers, I quickly adapt to various roles and technologies, ensuring high-quality results..",
      icon: <IconEaseInOut />,
    },
    {
      title: "Constant Learner",
      description:
        "Continuously learning to bring the most current and effective solutions to each and every project.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Performance",
      description: "Committed to delivering consistent and dependable results. My work is designed to stand up to rigorous demands.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Solutions",
      description: "Create solutions that grow with your needs. Efficient and effective multi-tenant architecture for flexible scalability.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Dedicated Support",
      description:
        "Available around the clock to address your needs. Always reachable and responsive, with support systems in place to ensure success.",
      icon: <IconHelp />,
    },
    {
      title: "Adaptive Thinking",
      description:
        "Quick to embrace new challenges and technologies, I tailor my problem-solving approach to fit the evolving needs of each project.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And Beyond",
      description: "Always evolving and ready to tackle new challenges, I bring a dynamic and innovative approach to every project. Let’s see how my skills can meet your needs.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 ios:text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 ios:text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 ios:text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
