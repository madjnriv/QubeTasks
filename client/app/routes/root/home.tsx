import { Hero } from "@/components/public/hero/hero";
import type { Route } from "../../+types/root";
import { Navbar } from "@/components/public/navbar/Navbar";
import { WorkflowPreview } from "@/components/public/workflow-preview/workflow-preview";

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
      <WorkflowPreview />
    </div>
  );
};

export default HomePage;
