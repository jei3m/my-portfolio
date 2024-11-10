import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"));

export default function Page() {
  return (
      <div className="bg-black flex flex-col overflow-x-hidden overflow-hidden">
        <Hero />
      </div>
  );
}
