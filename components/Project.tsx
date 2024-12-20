"use client";
import { useState, useEffect } from 'react';
import projects from '@/lib/projects.json';
import { Reveal } from './custom-ui/reveal';
import { ProjectCard3d } from './custom-ui/project-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IBM_Plex_Serif } from "next/font/google";
import { DM_Serif_Text } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
});

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const ProjectsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
        };
        
        // Set initial value
        handleResize();
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const projectsPerPage = isMobile ? 1 : 2;
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + projectsPerPage >= projects.length 
                ? 0 
                : prevIndex + projectsPerPage
        );
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - projectsPerPage < 0 
                ? Math.max(0, projects.length - projectsPerPage) 
                : prevIndex - projectsPerPage
        );
    };

    const displayedProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

    return (
        <div className="py-10 bg-gray/10 backdrop-blur-sm">
            <div className="max-w-[920px] mx-auto px-2 flex flex-col items-center justify-center relative">
                <section id="projects" className="w-full">
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                    >
                        <h2 className={`${dmSerifText.className} mt-4 text-center text-3xl lg:text-5xl text-white`}>
                            Featured Projects
                        </h2>
                        <p className="text-center mt-2 max-w-2xl mb-[-1rem] mx-auto text-sm md:text-lg text-gray-400">
                         A collection of my personal and school projects.
                        </p>
                    </Reveal>

                    <div className="relative">

                        {/* Projects Container */}
                        <div className={`
                            flex justify-center 
                            ${isMobile ? 'gap-0' : 'gap-6'} 
                            transition-all duration-500 ease-in-out
                            mx-3 lg:mx-0
                        `}>
                            {displayedProjects.map((project, index) => (
                                <Reveal
                                    key={`${project.title}-${currentIndex}-${index}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
                                >
                                    <div className={`
                                        ${isMobile ? 'w-full' : 'w-auto'}
                                        transform transition-all duration-500
                                    `}>
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

                        {/* Pagination Dots & Navigation Buttons*/}
                        <div className="flex justify-center gap-2 mt-[-20px] md:mt-8">

                        <button 
                            onClick={prevSlide}
                            className="mt-2 md:mt-0 mr-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white hover:bg-white/40 transition-colors z-10"
                            aria-label="Previous projects"
                        >
                            <ChevronLeft className="w-7 h-7 text-black" />
                        </button>
                            
                            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index * projectsPerPage)}
                                    className={`mt-1 md:mt-[-1px] w-2 h-2 rounded-full transition-colors ${
                                        index === Math.floor(currentIndex / projectsPerPage)
                                            ? 'bg-white'
                                            : 'bg-white/30'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}

                       <button 
                            onClick={nextSlide}
                            className="mt-2 md:mt-0 ml-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white hover:bg-white/40 transition-colors z-10"
                            aria-label="Next projects"
                        >
                            <ChevronRight className="w-7 h-7 text-black" />
                        </button>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectsCarousel;