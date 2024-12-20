// "use client";
// import React, { useState } from 'react';
// import Head from 'next/head';
// import { Github, ExternalLink } from 'lucide-react';
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/custom-ui/card";
// import projects from '@/lib/projects.json';
// import { Reveal } from "../components/custom-ui/reveal";
// import { Badge } from './custom-ui/badge';
// import { Button } from './custom-ui/button';
// import { FaGithub } from "react-icons/fa6";


// export default function ProjectsPage() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const displayedProjects = isExpanded ? projects : projects.slice(0, 2);

//   const toggleView = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <div className="flex flex-col overflow-x-hidden overflow-hidden w-full mx-auto relative flex items-center justify-center">
//         <div className="flex flex-col w-full max-w-[900px]">
//           <main className="max-w-7xl mx-auto px-4 py-2">
//             <h2
//               id="experience"
//               style={{ fontFamily: "'DM Serif Display', serif" }}
//               className="mt-3 ml-1 mb-5 font-extrabold tracking-tight text-white text-4xl text-left w-full z-80"
//             >
//               Projects
//             </h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//               {displayedProjects.map((project, index) => (
//                 <Reveal
//                   key={index}
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
//                 >
//                   <Card key={index} className="bg-gray-900 border-white flex flex-col h-full justify-between">
//                     <CardHeader className="p-4">
//                       <Reveal
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
//                       >
//                         <div className="aspect-video relative mb-5">
//                           <img
//                             src={project.imageUrl}
//                             alt={project.title}
//                             className="w-full h-full object-cover rounded-md"
//                           />
//                         </div>
                        
//                         <div className="space-y-3">
//                           <div className="flex items-center justify-between">
//                             <h2 className="text-2xl text-white font-bold">{project.title}</h2>
//                             <span className="text-sm font-medium px-3 py-2 bg-gray-800 text-gray-300 rounded-full">
//                               {project.type}
//                             </span>
//                           </div>
//                           <p className="text-base text-gray-400">{project.description}</p>
//                         </div>
//                       </Reveal>
//                     </CardHeader>
                    
//                     <Reveal
//                       initial={{ opacity: 0, x: -50 }}
//                       whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
//                     >
//                       <CardContent className="p-4 pt-0 flex-grow">
//                         <div className="flex flex-wrap gap-3">
//                           {project.skills.map((skill, skillIndex) => (
//                             <Badge
//                               key={skillIndex}
//                             >
//                               {skill}
//                             </Badge>
//                           ))}
//                         </div>
//                       </CardContent>
                      
//                       <CardFooter className="mt-4 p-4 pt-0 flex justify-between gap-6">
//                         <a
//                           href={project.githubUrl}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-2 text-base font-semibold bg-white text-black hover:bg-green-500 px-4 py-2 rounded-lg transition-colors"
//                         >
//                           <FaGithub size={22} />
//                           Code
//                         </a>
//                         {project.demoUrl && (
//                           <a
//                             href={project.demoUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-2 text-md font-semibold bg-blue-600 text-white hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
//                           >
//                             <ExternalLink size={22} />
//                             Demo
//                           </a>
//                         )}
//                       </CardFooter>
//                     </Reveal>
//                   </Card>
//                 </Reveal>
//               ))}
//             </div>

//             <div className="flex justify-center mt-8">
//               <Button
//                 onClick={toggleView}
//                 className="text-md bg-gray-600 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors"
//               >
//                 {isExpanded ? 'View Less...' : 'View More...'}
//               </Button>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }