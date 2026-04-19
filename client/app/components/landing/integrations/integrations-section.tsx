import { Button } from "@/components/ui/button";
import { IntegrationItem } from "./integration-item";

const integrations = [
  {
    name: "Loom",
    description:
      "Effortless onboarding with improved self-service. Record task walkthroughs and attach them directly to cards.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4zm0-11.4a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    description:
      "40% improvement in team collaboration. Get real-time task updates and notifications directly in your channels.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    description:
      "2 hours saved managing project records daily. Sync your Airtable bases and keep your data consistent everywhere.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M11.386 1.126L1.134 5.337a.72.72 0 0 0 0 1.326l10.252 4.21a2.88 2.88 0 0 0 2.228 0l10.252-4.21a.72.72 0 0 0 0-1.326L13.614 1.126a2.88 2.88 0 0 0-2.228 0zM1.08 9.8a.72.72 0 0 0-.48.675v9.12a.72.72 0 0 0 .984.672l9.6-3.84a.72.72 0 0 0 .456-.672V6.635a.72.72 0 0 0-.984-.672L1.08 9.8zm21.84 0l-9.576-3.837a.72.72 0 0 0-.984.672v9.12a.72.72 0 0 0 .456.672l9.6 3.84a.72.72 0 0 0 .984-.672V10.475a.72.72 0 0 0-.48-.675z" />
      </svg>
    ),
  },
];

const marqueeLogos = [
  "Meta",
  "Amazon",
  "Slack",
  "Google",
  "Loom",
  "Coursera",
  "Amazon",
  "Coursera",
  "Google",
];

export function IntegrationsSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Popular Integrations
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Connect QubeTasks to Streamline Your Workflow with Everyday Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <IntegrationItem key={integration.name} {...integration} />
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-14 overflow-hidden border-y border-border py-5">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
              <span
                key={i}
                className="text-sm font-semibold tracking-wide text-muted-foreground/60 uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
