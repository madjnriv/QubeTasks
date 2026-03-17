import { Hero } from "@/components/landing/hero/hero";
import type { Route } from "../../+types/root";
import { Navbar } from "@/components/landing/navbar/Navbar";
import WhyQubeTasks from "@/components/landing/why-qubetasks/WhyQubeTasks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QubeTasks" },
    { name: "description", content: "Welcome to QubeTasks!" },
  ];
}

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-y-auto lg:p-4">
      <Navbar />
      <Hero />
      <WhyQubeTasks/>
    </div>
  );
};

export default HomePage;
