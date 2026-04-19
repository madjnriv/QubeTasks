// client/app/routes/home.tsx (or wherever your home route lives)
// Drop these below your existing above-the-fold hero section

import {
  WorkflowSection,
  FeaturesSection,
  TestimonialsSection,
  IntegrationsSection,
  PricingSection,
  CtaSection,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      {/* Your existing above-the-fold hero goes here */}

      <WorkflowSection />
      <FeaturesSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
