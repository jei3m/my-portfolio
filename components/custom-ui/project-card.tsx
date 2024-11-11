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
                className="md:mb-[-26px] bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-gray-500/[0.1] border-1 border-white/[0.4] w-full max-w-[420px] h-[400px] sm:h-[450px] lg:h-[500px] mx-auto rounded-xl p-4 sm:p-5 lg:p-5 text-white"
            >
                <div className="flex flex-col h-full">
                    <CardItem translateZ="50" className="w-full">
                        <AspectRatio ratio={16 / 9} className="bg-muted">
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
                            translateZ="50"
                            className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight"
                        >
                            {title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="50"
                            className="text-xs sm:text-sm text-gray-400"
                        >
                            {type}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="50"
                            className="text-xs sm:text-sm leading-5 sm:leading-6 mt-2 line-clamp-3"
                        >
                            {description}
                        </CardItem>
                        
                        {skills && (
                            <CardItem
                                translateZ="50"
                                className="flex gap-1 sm:gap-1.5 flex-wrap mt-2 sm:mt-3"
                            >
                                {skills.map((skill) => (
                                    <Badge 
                                        key={skill} 
                                        variant="default" 
                                        className="text-white text-[10px] sm:text-xs px-2 py-0.5"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </CardItem>
                        )}
                    
                        <CardItem
                            translateZ={34}
                            className="w-auto flex flex-row justify-between items-center mt-auto"
                        >
                            {githubUrl && (
                                <Link href={githubUrl} target="_blank" passHref>
                                    <Button 
                                        size="sm" 
                                        className="bg-white text-black hover:bg-green-500 hover:text-white px-3 h-8 sm:h-9"
                                    >
                                        <span className="text-xs sm:text-sm">Github</span>
                                        <FaGithub className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </Link>
                            )}

                           {demoUrl && (
                                <Link href={demoUrl} target="_blank" passHref>
                                    <Button 
                                        size="sm" 
                                        className="hover:bg-green-500 px-3 h-8 sm:h-9"
                                    >
                                        <span className="text-xs sm:text-sm">Demo</span>
                                        <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </Link>
                            )}
                        </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}