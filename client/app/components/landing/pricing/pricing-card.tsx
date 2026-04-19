import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

export function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  ctaLabel,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-6 transition-shadow duration-200",
        highlighted
          ? "border-primary bg-primary text-primary-foreground shadow-xl"
          : "border-border bg-card hover:shadow-md"
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
          Most Popular
        </span>
      )}

      <div>
        <p
          className={cn(
            "text-sm font-medium",
            highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {tier}
        </p>
        <div className="mt-2 flex items-end gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {period && (
            <span
              className={cn(
                "mb-1 text-sm",
                highlighted
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground"
              )}
            >
              {period}
            </span>
          )}
        </div>
        <p
          className={cn(
            "mt-2 text-sm",
            highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <CheckIcon
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                highlighted ? "text-primary-foreground" : "text-primary"
              )}
            />
            <span
              className={
                highlighted ? "text-primary-foreground/90" : "text-foreground"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "secondary" : "outline"}
        className="mt-auto w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
