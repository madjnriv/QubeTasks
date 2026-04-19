import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/5" />
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Streamline Your Workflow?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Join thousands of teams already using QubeTasks to ship faster,
              collaborate better, and stress less. Start free — no credit card
              required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Start for Free <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground text-primary-foreground bg-primary-foreground/10 sm:w-auto"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
