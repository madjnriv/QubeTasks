interface IntegrationItemProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function IntegrationItem({
  name,
  description,
  icon,
}: IntegrationItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
