import { ExternalLink} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { AspectRatio } from "./aspect-ratio";
import { Badge } from "./badge";
import { Button } from "./button";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: string[];
}

export function ProjectCard3d({ title, type, description, imageUrl, githubUrl, demoUrl, skills }: ProjectCardProps) {
    return (
        <CardContainer className="inter-var w-full">
            <CardBody 
                className="md:mb-[-26px] bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 border-1 border-white/[0.4] w-full max-w-[420px] mx-auto h-auto rounded-xl p-4 text-white"
            >
                <CardItem translateZ="50" className="w-full">
                    <AspectRatio ratio={16 / 9.4} className="bg-muted">
                        <Image
                            src={imageUrl}
                            alt="Project Image"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </CardItem>
                <CardItem
                    as="h3"
                    translateZ="60"
                    className="scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight mt-4"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm sm:text-md text-gray-400"
                >
                    {type}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="50"
                    className="text-sm sm:text-md leading-6 [&:not(:first-child)]:mt-4"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="40"
                        className="flex gap-1.5 flex-wrap mt-4"
                    >
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default" className="text-white text-xs">{skill}</Badge>
                        ))}
                    </CardItem>
                )}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between items-start sm:items-center mt-6">
                    {githubUrl && (
                        <CardItem
                            translateZ={30}
                            className="w-full sm:w-auto"
                        >
                            <Link href={githubUrl} target="_blank" passHref className="w-full sm:w-auto">
                                <Button size="sm" className="w-full sm:w-auto bg-white text-black hover:bg-green-500 hover:text-white">
                                    Github
                                    <FaGithub className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                    {demoUrl && (
                        <CardItem
                            translateZ={30}
                            className="w-full sm:w-auto"
                        >
                            <Link href={demoUrl} target="_blank" passHref className="w-full">
                                <Button size="sm" className="w-full sm:w-auto hover:bg-green-500">
                                    Demo
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
}