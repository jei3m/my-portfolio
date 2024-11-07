// "use client";
// import { useState } from 'react';
// import projects from '@/lib/projects.json';
// import { Reveal } from './custom-ui/reveal';
// import { ProjectCard3d } from './custom-ui/ProjectCard';
// import Head from "next/head";
// import { Button } from './custom-ui/button';
// import { motion } from 'framer-motion';

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
//         <div className="py-4 max-w-[900px] flex flex-col w-full mx-auto relative flex items-center justify-center">
//             <div className="p-4 flex flex-col w-full max-w-[1050px] mx-auto relative flex items-center justify-center">
//                 <section id="projects" className="flex flex-col items-center justify-center">
//                     <Head>
//                         <link
//                             href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
//                             rel="stylesheet"
//                         />
//                     </Head>

//                     <motion.h2
//                         id="projects"
//                         style={{ fontFamily: "'DM Serif Display', serif", color: 'white' }}
//                         className="mb-[-20px] font-extrabold tracking-tight text-4xl lg:text-4xl text-left w-full z-80"
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{
//                             duration: 0.8,
//                             ease: "easeOut"
//                         }}
//                     >
//                         Projects
//                     </motion.h2>

//                     <div className="flex-wrap flex justify-center gap-x-7 max-w-screen-lg">
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

//                     <div className="mt-8 flex gap-4">
//                            <Reveal
//                                 initial={{ opacity: 0, y: -10 }}
//                                 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
//                             >
//                         {visibleProjects < projects.length ? (
//                             <Button
//                                 onClick={showMore}
//                                 className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
//                             >
//                                 View More...
//                             </Button>
//                         ) : visibleProjects > INITIAL_VISIBLE_PROJECTS && (
//                             <Button
//                                 onClick={showLess}
//                                 className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
//                             >
//                                 Show Less
//                             </Button>
//                         )}
//                         </Reveal>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }