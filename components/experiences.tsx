import { ExperienceCard } from "./custom-ui/experience-card";
import experiences from '@/lib/experiences.json';
import Head from "next/head";

export default function Experiences() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-hidden w-full relative flex items-center justify-center">
      <div className="flex flex-col overflow-x-hidden overflow-hidden w-full max-w-[1000px] mx-auto relative flex items-center justify-center">
        <section
          id="experiences"
          className="p-4 w-full flex flex-col items-start justify-start gap-4 py-20 text-white"
        >
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
              rel="stylesheet"
            />
          </Head>
          <br/>

          <h2
            id="experience"
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="ml-[-1px] mb-1 font-extrabold tracking-tight text-4xl lg:text-4xl text-left w-full z-80"
          >
            College Experiences
          </h2>

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
    </div>
  );
}
