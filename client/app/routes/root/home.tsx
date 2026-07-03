import { Hero } from "@/components/landing/hero/hero";
import type { Route } from "../../+types/root";
import { Navbar } from "@/components/landing/navbar/Navbar";
import {
  CtaSection,
  FeaturesSection,
  Footer,
  IntegrationsSection,
  PricingSection,
  TestimonialsSection,
  WorkflowSection,
} from "@/components/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QubeTasks" },
    { name: "description", content: "Welcome to QubeTasks!" },
  ];
}

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <Hero />
      <WorkflowSection />
      <FeaturesSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
