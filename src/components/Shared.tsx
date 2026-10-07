import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Section = "about" | "services" | "projects" | "process" | "testimonials" | "getInTouch";

const SECTIONS: Record<Section, { number: string; name: string }> = {
  about: { number: "01", name: "ABOUT US" },
  services: { number: "02", name: "OUR SERVICES" },
  projects: { number: "03", name: "SELECTED PROJECTS" },
  process: { number: "04", name: "OUR PROCESS" },
  testimonials: { number: "05", name: "TESTIMONIALS" },
  getInTouch: { number: "06", name: "GET IN TOUCH" },
};

export const SectionLabel = ({
  section,
  className,
  onDark = false,
}: {
  section: Section;
  className?: string;
  onDark?: boolean;
}) => (
  <p
    className={cn(
      "text-xs tracking-wide",
      onDark ? "text-ink-muted" : "text-muted-foreground",
      className,
    )}
  >
    <span className="mr-2 text-accent">[{SECTIONS[section].number}]</span>
    {SECTIONS[section].name}
  </p>
);

export const Stars = () => (
  <div className="flex gap-0.5 text-accent">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-current" />
    ))}
  </div>
);

export const Tag = ({ children, onDark }: { children: string; onDark?: boolean }) => (
  <span
    className={cn(
      "inline-flex rounded-full border px-3 py-1 text-xs",
      onDark ? "border-on-image/50 text-on-image" : "border-current/30",
    )}
  >
    {children}
  </span>
);
