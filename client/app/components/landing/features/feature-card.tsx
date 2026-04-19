interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  visual?: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  visual,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg ${className}`}
    >
      {visual && (
        <div className="mb-2 overflow-hidden rounded-xl border border-border bg-muted/50">
          {visual}
        </div>
      )}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
