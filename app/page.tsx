import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/hero"));
// import Projects from "@/components/projects";
// import {Separator} from "@/components/ui/separator";
// import Contact from "@/components/contact";
// import Experiences from "@/components/experiences";
// import { Aboutme } from "@/components/Aboutme";

export default function Page() {
  return (
 

   
      <div className="bg-black flex flex-col overflow-x-hidden overflow-hidden">
        <Header/>
        <Hero />
      </div>
    
 
  );
}
