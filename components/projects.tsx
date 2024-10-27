import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d} from './custom/project-card-3d'; // Importing ProjectCardProps interface if available
import Head from "next/head";


export default function Projects() {
    return (
        <div className="flex flex-col overflow-x-hidden overflow-hidden w-full mx-auto dark:bg-black dark:bg-dot-white/[0.3] relative flex items-center justify-center">
        <div className="p-4 flex flex-col overflow-x-hidden overflow-hidden w-full max-w-[1050px] mx-auto relative flex items-center justify-center">
        <section id="projects" className="flex flex-col items-center justify-center">
    
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
            </Head>

            <h2
                id="experience"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'white' }}
                className="ml-[24px] mb-[-20px] font-extrabold tracking-tight text-4xl lg:text-4xl text-center w-full z-80"
                >
                My Projects
            </h2>
            
           
            <div className="flex-wrap flex justify-center gap-x-10 max-w-screen-lg">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.title}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <div className="mb-[-40px]"> {/* Example of wrapping with a container */}
                            <ProjectCard3d
                                title={project.title}
                                type={project.type}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                githubUrl={project.githubUrl}
                                demoUrl={project.demoUrl}
                                skills={project.skills}
                            />
                        </div>
                    </Reveal>
                ))}
            </div>
           
        </section>
        </div>
        </div>
    );
}
