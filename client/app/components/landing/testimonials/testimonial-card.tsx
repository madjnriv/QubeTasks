import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  featured?: boolean;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarUrl,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md ${
        featured
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-card"
      }`}
    >
      <QuoteIcon className="h-6 w-6 text-primary/40" />
      <p className="flex-1 text-sm leading-relaxed text-foreground">{quote}</p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <Avatar className="h-9 w-9">
          {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
