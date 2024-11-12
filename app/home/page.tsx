import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero-section"));
const Home = dynamic(() => import("@/components/Home"));

export default function Page() {
  return (
      <div className="flex flex-col overflow-x-hidden overflow-hidden">
        <Home />
      </div>
  );
}
