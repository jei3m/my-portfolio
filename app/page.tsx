import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/hero"));

export default function Page() {
  return (
      <div className="bg-black flex flex-col overflow-x-hidden overflow-hidden">
        <Header/>
        <Hero />
      </div>
  );
}
