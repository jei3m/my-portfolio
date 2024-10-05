import projects from '@/lib/projects.json';
import { Reveal } from './custom/reveal';
import { ProjectCard3d} from './custom/project-card-3d'; // Importing ProjectCardProps interface if available
import Head from "next/head";


export default function Projects() {
    return (
        <div className="p-8 flex flex-col overflow-x-hidden overflow-hidden w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center">

        <section id="projects" className="flex flex-col items-center justify-center">
    
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
                </Head>

            <br/><br/><br/>
            <h2
                id="experience"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'white' }}
                className="scroll-m-20 font-extrabold tracking-tight text-4xl lg:text-4xl lg:text-5xl text-center w-full z-20"
                >
                My Projects
            </h2>
            
            <div className="flex-wrap flex justify-center gap-x-10 row-gap-2 max-w-screen-lg">
            </div>
            <div className="flex-wrap flex justify-center gap-x-16 row-gap-2 max-w-screen-lg">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.title}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <div className="mb-0"> {/* Example of wrapping with a container */}
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
    );
}
