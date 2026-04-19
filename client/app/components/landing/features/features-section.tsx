import {
  BrainCircuitIcon,
  LayoutDashboardIcon,
  UsersIcon,
  BarChart3Icon,
  ZapIcon,
  SplitIcon,
} from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: <BrainCircuitIcon className="h-4 w-4" />,
    title: "Energy-Based Scheduling",
    description:
      "QubeTasks maps tasks to your team&apos;s peak energy windows — deep work in the morning, reviews in the afternoon. Work smarter, not harder.",
  },
  {
    icon: <SplitIcon className="h-4 w-4" />,
    title: "Smart Task Segmentation",
    description:
      "Automatically break large epics into executable subtasks. Set dependencies, assign owners, and watch projects move without micromanaging.",
  },
  {
    icon: <ZapIcon className="h-4 w-4" />,
    title: "Focus Mode",
    description:
      "Eliminate distractions with a single-task view. QubeTasks surfaces only what needs your attention right now — nothing else.",
  },
  {
    icon: <UsersIcon className="h-4 w-4" />,
    title: "Seamless Collaboration",
    description:
      "Invite teammates, assign roles, leave comments, and track progress together in real time — no context switching required.",
  },
  {
    icon: <BarChart3Icon className="h-4 w-4" />,
    title: "Performance Analytics",
    description:
      "Understand how your team performs with burndown charts, velocity tracking, and workload distribution — all in one dashboard.",
  },
  {
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    title: "AI Assistance",
    description:
      "Let AI write task descriptions, suggest due dates, flag blockers, and surface at-risk projects before they derail your sprint.",
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <span className="mb-3 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Powerful Features
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI Features Tailored to You
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            Every feature in QubeTasks is designed around the way real teams
            actually work — not the way project management textbooks say they
            should.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
