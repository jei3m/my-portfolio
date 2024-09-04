import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        <CardContainer className="inter-var">
            <CardBody 
                className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 border-1 border-white sm:border-white sm:w-[30rem] h-auto w-auto rounded-xl p-5 text-white"
            >
                <CardItem translateZ="60" className="w-full">
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
                    translateZ="70"
                    className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="70"
                    className="text-sm text-gray-400"
                >
                    {type}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="leading-7 [&:not(:first-child)]:mt-6"
                >
                    {description}
                </CardItem>
                {skills && (
                    <CardItem
                        translateZ="50"
                        className="flex gap-2 flex-wrap mt-6"
                    >
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default" className="text-white">{skill}</Badge>
                        ))}
                    </CardItem>
                )}
                <div className="flex justify-between items-center mt-10">
                    {githubUrl && (
                        <CardItem
                            translateZ={40}
                        >
                            <Link href={githubUrl} target="_blank" passHref>
                                <Button className="bg-white text-black hover:bg-gray-200">
                                    Open Github
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                    {demoUrl && (
                        <CardItem
                            translateZ={40}
                        >
                            <Link href={demoUrl} target="_blank" passHref>
                                <Button>
                                    Live URL
                                    <ExternalLink className="ml-2" />
                                </Button>
                            </Link>
                        </CardItem>
                    )}
                </div>
            </CardBody>
        </CardContainer>
    );
}
