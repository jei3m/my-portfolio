import projects from '@/lib/projects.json';
import { Reveal } from './custom-ui/reveal';
import { ProjectCard3d } from './custom-ui/ProjectCard'; 
import Head from "next/head";


export default function Projects() {
    return (
        <div className="max-w-[900px] flex flex-col w-full mx-auto relative flex items-center justify-center">
        <div className="p-4 flex flex-col w-full max-w-[1050px] mx-auto relative flex items-center justify-center">
        <section id="projects" className="flex flex-col items-center justify-center">
    
            <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
            </Head>

            <h2
                id="projects"
                style={{ fontFamily: "'DM Serif Display', serif", color: 'white' }}
                className="ml-[24px] mb-[-20px] font-extrabold tracking-tight text-4xl lg:text-4xl text-left w-full z-80"
                >
                Projects
            </h2>
            
           
            <div className="flex-wrap flex justify-center gap-x-7 max-w-screen-lg">
                {projects.map((project, index) => (
                    <Reveal
                        key={project.title}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                    >
                        <div className="mb-[-50px]"> {/* Example of wrapping with a container */}
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
