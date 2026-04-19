import { GithubIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About Us", "Blog", "Careers", "Press", "Contact"],
  "How It Works": ["Getting Started", "Documentation", "API Reference", "Integrations", "Security"],
  Social: ["Twitter", "LinkedIn", "GitHub", "YouTube", "Discord"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Licenses"],
};

const socialIcons = [
  { icon: <TwitterIcon className="h-4 w-4" />, label: "Twitter", href: "#" },
  { icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn", href: "#" },
  { icon: <GithubIcon className="h-4 w-4" />, label: "GitHub", href: "#" },
  { icon: <YoutubeIcon className="h-4 w-4" />, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <p className="text-lg font-bold tracking-tight">QubeTasks</p>
            <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-background/60">
              The AI-powered project management platform for modern teams.
            </p>
            <div className="mt-4 flex gap-2">
              {socialIcons.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-background/20 text-background/70 transition-colors hover:border-background/40 hover:text-background"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-background/40">
                {category}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-6 sm:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} QubeTasks. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Built with care for productive teams everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
