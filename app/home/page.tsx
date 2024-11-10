import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"));
const Home = dynamic(() => import("@/components/Home"));
import Seperator from "@/components/custom-ui/separator";

export default function Page() {
  return (
      <div className="flex flex-col overflow-x-hidden overflow-hidden">
        <Hero />
        <Seperator/>
        <Home />
      </div>
  );
}
