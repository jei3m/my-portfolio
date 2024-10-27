import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Separator = dynamic(() => import("@/components/ui/separator"));
const Contact = dynamic(() => import("@/components/contact"));
const Experiences = dynamic(() => import("@/components/experiences"));
const Aboutme = dynamic(() => import("@/components/Aboutme"));

export default function Home() {
  return (
    <div className="bg-black flex flex-col overflow-x-hidden overflow-hidden">
      <Header />
      <Experiences />
      <Projects />
      <Separator />
      <Aboutme />
      <Separator />
      <Contact />
    </div>
  );
}

