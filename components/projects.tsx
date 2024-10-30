import React from 'react';
import Head from 'next/head';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/custom-ui/card";
import projects from '@/lib/projects.json';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col overflow-x-hidden overflow-hidden w-full mx-auto relative flex items-center justify-center">
      <div className="flex flex-col w-full max-w-[1050px]">
        <main className="max-w-7xl mx-auto px-4 py-2">
          <h2
            id="experience"
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="ml-1 mb-5 font-extrabold tracking-tight text-white text-4xl text-left w-full z-80"
          >
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-white flex flex-col h-full">
                <CardHeader className="p-4">
                  <div className="aspect-video relative mb-6">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl text-white font-bold">{project.title}</h2>
                      <span className="text-sm px-3 py-2 bg-gray-800 text-gray-300 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-base text-gray-400">{project.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm px-3 py-1 bg-white text-black rounded-xl"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 flex justify-between gap-6 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
      </div>
    </>
  );
}