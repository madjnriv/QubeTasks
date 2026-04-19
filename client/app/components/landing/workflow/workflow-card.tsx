import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

interface WorkflowCardProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

export function WorkflowCard({ icon, stat, description }: WorkflowCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold tracking-tight text-foreground">
          {stat}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <Button
        variant="link"
        size="sm"
        className="w-fit p-0 text-primary hover:no-underline"
      >
        Learn More <ArrowUpRightIcon className="ml-1 h-3 w-3" />
      </Button>
    </div>
  );
}
