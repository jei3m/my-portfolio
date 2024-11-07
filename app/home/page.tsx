import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Separator = dynamic(() => import("@/components/custom-ui/separator"));
const Contact = dynamic(() => import("@/components/contact"));
const Experiences = dynamic(() => import("@/components/experiences"));
const Aboutme = dynamic(() => import("@/components/TechStack"));
const Profile= dynamic(() => import("@/components/Profile"));

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-hidden w-full h-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
    <div className="flex flex-col overflow-x-hidden overflow-hidden">
      <Header />
      <Experiences />
      <Projects />
      <Aboutme />
      <Profile/>
    </div>
    </div>
  );
}

