// "use client";
// import { useState } from 'react';
// import projects from '@/lib/projects.json';
// import { Reveal } from './custom-ui/reveal';
// import { ProjectCard3d } from './custom-ui/project-card';
// import { Button } from './custom-ui/button';
// import { motion } from 'framer-motion';
// import { DM_Serif_Text } from "next/font/google";

// const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

// export default function Projects() {
//     const INITIAL_VISIBLE_PROJECTS = 2;
//     const [visibleProjects, setVisibleProjects] = useState(INITIAL_VISIBLE_PROJECTS);
    
//     const showMore = () => {
//         setVisibleProjects(projects.length);
//     };

//     const showLess = () => {
//         setVisibleProjects(INITIAL_VISIBLE_PROJECTS);
//         // Smooth scroll back to the projects section
//         document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
//     };
    
//     return (
//         <div>
//         <div className="py-2 max-w-[900px] flex flex-col w-full mx-auto relative flex items-center justify-center">
//             <div className="p-4 flex flex-col w-full mx-auto relative flex items-center justify-center">
//                 <section id="projects" className="flex flex-col items-start justify-center w-full">
//                 <Reveal
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
//                 >
//                     <motion.h2
//                         id="projects"
//                         className={`${dmSerifText.className} mb-[-24px] text-left text-3xl lg:text-4xl z-80 text-white`}                        
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{
//                             duration: 0.8,
//                             ease: "easeOut"
//                         }}
//                     >
//                         Projects
//                     </motion.h2>
//                     {/* <p className="text-sm md:text-lg text-gray-400 mt-2 mb-[-22px]">What I've worked on and what I'm currently working on</p> */}

//                     </Reveal>

//                     <div className="flex flex-wrap justify-center gap-x-7 max-w-screen-lg sm:grid sm:grid-cols-2 sm:gap-6 w-full">
//                         {projects.slice(0, visibleProjects).map((project, index) => (
//                             <Reveal
//                                 key={project.title}
//                                 initial={{ opacity: 0, y: -10 }}
//                                 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 30 } }}
//                             >
//                                 <div className="mb-[-50px]">
//                                     <ProjectCard3d
//                                         title={project.title}
//                                         type={project.type}
//                                         description={project.description}
//                                         imageUrl={project.imageUrl}
//                                         githubUrl={project.githubUrl}
//                                         demoUrl={project.demoUrl}
//                                         skills={project.skills}
//                                     />
//                                 </div>
//                             </Reveal>
//                         ))}
//                     </div>

//                     <div className="mt-10 md:mt-14 flex gap-4 w-full items-start justify-center">
//                         <Reveal
//                             initial={{ opacity: 0, y: -10 }}
//                             whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
//                         >
//                             {visibleProjects < projects.length ? (
//                                 <Button
//                                     onClick={showMore}
//                                     className="px-6 py-1 bg-white text-black text-md rounded-lg hover:bg-black hover:text-white border hover:border-white transition-colors duration-200"
//                                 >
//                                  Show More... 
//                                 </Button>
//                             ) : visibleProjects > INITIAL_VISIBLE_PROJECTS && (
//                                 <Button
//                                     onClick={showLess}
//                                     className="px-6 py-1 bg-white text-black text-md rounded-lg hover:bg-black hover:text-white border hover:border-white transition-colors duration-200"
//                                 >
//                                     Show Less...
//                                 </Button>
//                             )}
//                         </Reveal>
//                     </div>
//                 </section>
//             </div>
//         </div>
//         </div>
//     );
// }