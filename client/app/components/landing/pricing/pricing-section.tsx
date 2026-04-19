import { PricingCard } from "./pricing-card";

const plans = [
  {
    tier: "Starter",
    price: "Free",
    description: "Perfect for individuals and small personal projects.",
    features: [
      "Up to 3 workspaces",
      "10 active tasks per project",
      "Basic analytics dashboard",
      "Community support",
      "2 team members",
    ],
    ctaLabel: "Get Started",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Built for growing teams that need more power and flexibility.",
    features: [
      "Unlimited workspaces",
      "Unlimited tasks & projects",
      "Advanced analytics & reporting",
      "Priority email support",
      "Up to 20 team members",
      "AI scheduling assistant",
      "Custom task statuses",
    ],
    ctaLabel: "Start Free Trial",
    highlighted: true,
  },
  {
    tier: "Team",
    price: "$29.99",
    period: "/month",
    description: "For large teams and organizations that demand the best.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & advanced security",
      "Dedicated account manager",
      "Custom integrations",
      "SLA uptime guarantee",
      "Priority support",
    ],
    ctaLabel: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple Pricing for Every Workflow
          </h2>
          <p className="mt-4 text-muted-foreground">
            No hidden fees. No surprise charges. Pick the plan that fits your
            team today — and scale when you&apos;re ready.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.tier} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
