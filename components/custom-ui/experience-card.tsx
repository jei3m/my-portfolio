import { Reveal } from "./reveal";
import { Badge } from "./badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/custom-ui/card";

interface ExperienceCardProps {
    title: string;
    course: string;
    school: string;
    description: string;
    skills?: string[];
}

export function ExperienceCard({ title, course, school, description, skills }: ExperienceCardProps) {
    return (
        <Reveal
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
    >
        <Card className="w-full bg-gray-900">
            <Reveal
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
                <CardHeader>
                    <CardTitle>{title}  {course}</CardTitle>
                    <CardDescription>{school}</CardDescription>
                </CardHeader>
            </Reveal>
            <CardContent className="flex flex-col gap-4">
                <Reveal
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                >
                    <p className="leading-7">{description}</p>
                </Reveal>
                {skills && (
                    <div className="flex gap-2 flex-wrap">
                        {skills.map((skill, index) => (
                            <Reveal
                                key={skill}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, delay: index / 40 } }}
                            >
                                <Badge variant="default">{skill}</Badge>
                            </Reveal>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
        </Reveal>
    )
}