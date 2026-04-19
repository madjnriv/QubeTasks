import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    quote:
      "With QubeTasks, I finally found a tool that matches my pace. It helps me stay on track and ahead of schedule every single day.",
    name: "Amara Osei",
    role: "Product Manager",
    company: "Launchpad HQ",
    featured: true,
  },
  {
    quote:
      "QubeTasks has completely changed how our team collaborates. Task handoffs that used to take hours now happen in seconds.",
    name: "James Whitfield",
    role: "Engineering Lead",
    company: "Stackbuild",
    featured: false,
  },
  {
    quote:
      "The AI scheduling alone is worth it. I stopped missing deadlines the week I switched. My whole team noticed the difference.",
    name: "Priya Nair",
    role: "Design Director",
    company: "Visura Studio",
    featured: false,
  },
  {
    quote:
      "We evaluated five project management tools. QubeTasks was the only one that felt like it was built for how we actually work.",
    name: "Carlos Mendes",
    role: "CTO",
    company: "Orbit Systems",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-3 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Social Proof
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Happy Users Say About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="sm">
            Read More Stories <ArrowUpRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
