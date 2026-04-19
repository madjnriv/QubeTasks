import { TrendingUpIcon, CalendarCheckIcon, TimerOffIcon } from "lucide-react";
import { WorkflowCard } from "./workflow-card";

const workflowStats = [
  {
    icon: <TrendingUpIcon className="h-5 w-5" />,
    stat: "Boost task efficiency up to 45%",
    description:
      "QubeTasks intelligently prioritizes your workload so your team always works on what matters most.",
  },
  {
    icon: <CalendarCheckIcon className="h-5 w-5" />,
    stat: "Achieve a balanced workday",
    description:
      "Smart scheduling and capacity planning ensure no team member is overloaded or underutilized.",
  },
  {
    icon: <TimerOffIcon className="h-5 w-5" />,
    stat: "Reduce procrastination by 30%",
    description:
      "Automated reminders, deadlines, and accountability features keep everyone moving forward.",
  },
];

export function WorkflowSection() {
  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Your Workflow,{" "}
            <span className="text-primary">Reimagined with AI</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            QubeTasks doesn&apos;t just organize your tasks — it learns how your
            team works and actively helps you get more done, with less stress and
            zero chaos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflowStats.map((item) => (
            <WorkflowCard key={item.stat} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
