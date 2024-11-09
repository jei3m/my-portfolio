import EducationSection from "@/components/Education-Section";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/hero"));
const Projects = dynamic(() => import("@/components/projects"));
const Separator = dynamic(() => import("@/components/custom-ui/separator"));
const Contact = dynamic(() => import("@/components/contact"));
const Experiences = dynamic(() => import("@/components/Experience"));
const Aboutme = dynamic(() => import("@/components/TechStack"));
const ProfileCard = dynamic(() => import("@/components/ProfileCard"));
const Profile = dynamic(() => import("@/components/Profile"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      {/* Fixed background layer */}
      <div className="fixed inset-0 w-full h-full">
        <div className="w-full h-full bg-black bg-grid-white/[0.2]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10 flex min-h-screen w-full">
        <div className="flex flex-col w-full">
          <Header />
          <ProfileCard />
          <EducationSection />
          <Experiences />
          <Projects />
          <Aboutme />
        </div>
      </div>
    </main>
  );
}