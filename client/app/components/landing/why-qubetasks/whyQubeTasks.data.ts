import { BarChart3, Users, Zap, type LucideIcon } from "lucide-react";

type WhyQubeTasks={
    badge: string;
    headline: string;
    description: string;
    features: {
        title: string;
        description: string;
        icon: LucideIcon;
    }[];
};

export const whyQubeTasks: WhyQubeTasks = {
  badge: "Why QubeTasks?",

  headline: "Your Team’s Workflow, Optimized for Results",

  description:
    "QubeTasks helps teams plan smarter, move faster, and stay aligned. From project kickoff to task completion, everything is structured to improve clarity, accountability, and output.",

  features: [
    {
      title: "Increase team productivity by 40%",
      description:
        "with structured projects, clear task assignments, and real-time progress tracking.",
      icon: BarChart3,
    },
    {
      title: "Deliver projects 2x faster",
      description:
        "by breaking work into actionable tasks and keeping everyone aligned in one workspace.",
      icon: Zap,
    },
    {
      title: "Improve team accountability by 60%",
      description:
        "with activity logs, task ownership, and transparent collaboration across your team.",
      icon: Users,
    },
  ],
};