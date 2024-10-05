import { ExperienceCard } from "./custom/experience-card";
import experiences from '@/lib/experiences.json';
import Head from "next/head";

export default function Experiences() {
    return (
        <div className="flex flex-col overflow-x-hidden overflow-hidden w-full dark:bg-black dark: bg-grid-white/[0.1] relative flex items-center justify-center">
           
        <section id="experiences" className="p-4 flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16 text-white">

                <Head>
                <link
                href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
                rel="stylesheet"
                />
                </Head>
                <h2
                id="experience"
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="scroll-m-10 font-extrabold tracking-tight text-4xl lg:text-5xl lg:text-5xl text-center w-full z-80"
                >
                College Experiences
            </h2>
            <br/>
            <div className="flex flex-col gap-4 md:hidden">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.title}
                        title={experience.title}
                        company={experience.company}
                        date={experience.date}
                        description={experience.description}
                        skills={experience.skills}
                    />
                ))}
            </div>
             <div className="flex flex-col gap-4">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
             </div>
        </section>
        </div>
    );
}
