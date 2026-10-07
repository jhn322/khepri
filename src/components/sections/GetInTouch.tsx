import { ArrowUpRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

export const CONTACT_EMAIL = "hello@example.com";

export function GetInTouch({
  label = "Get in touch",
  className,
  variant = "button",
  index,
  open,
  delay = 0,
  onOpen,
}: {
  label?: string;
  className?: string;
  variant?: "button" | "link";
  index?: number;
  open?: boolean;
  delay?: number;
  onOpen?: () => void;
}) {
  const isLink = variant === "link";
  const animate = open !== undefined;
  return (
    <AlertDialog onOpenChange={(next) => next && onOpen?.()}>
      <AlertDialogTrigger asChild>
        <button
          style={animate ? { transitionDelay: open ? `${delay}ms` : "0ms" } : undefined}
          className={cn(
            isLink
              ? "flex items-baseline gap-3 whitespace-nowrap text-[clamp(2.75rem,11.5vw,4.5rem)] font-medium tracking-[-0.04em] hover:text-accent"
              : "skeuo-btn arrow-nudge inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-accent-foreground",
            animate && "transition-all duration-500",
            animate && (open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
            className,
          )}
        >
          {isLink && index !== undefined && (
            <span className="text-sm tracking-[0.08em] text-accent">[0{index}]</span>
          )}
          {label}
          {!isLink && <ArrowUpRight className="arrow h-4 w-4" />}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Open your email app?</AlertDialogTitle>
          <AlertDialogDescription>
            You'll be redirected to your email service to write to {CONTACT_EMAIL}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full border border-border bg-transparent text-foreground shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted hover:text-foreground hover:shadow-sm active:translate-y-0">
            Stay here
          </AlertDialogCancel>
          <AlertDialogAction
            className="skeuo-btn rounded-full bg-accent text-accent-foreground hover:bg-accent"
            onClick={() => {
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
