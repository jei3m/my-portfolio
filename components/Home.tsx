import EducationSection from "@/components/Education-Section";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Separator = dynamic(() => import("@/components/custom-ui/separator"));
const Contact = dynamic(() => import("@/components/contact"));
const Experiences = dynamic(() => import("@/components/Experience"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const ProfileCard = dynamic(() => import("@/components/ProfileCard"));
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-full">
        <div className="w-full h-full bg-zinc-950 bg-grid-neutral-800" />
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10 flex min-h-screen w-full">
        <div className="flex flex-col w-full">
          <Separator/>
          <ProfileCard />
          <EducationSection />
          <Experiences />
          <Projects />
          <TechStack />
          <Separator/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}