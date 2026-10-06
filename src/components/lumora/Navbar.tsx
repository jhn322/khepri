import { useEffect, useState, Fragment } from "react";
import { cn } from "@/lib/utils";
import { GetInTouch } from "@/components/lumora/GetInTouch";

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

function ThemeSwitch() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };
  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      className="relative h-6 w-11 shrink-0 rounded-full border border-border bg-muted shadow-[inset_0_1px_3px_var(--lo)]"
    >
      <span
        className={cn(
          "skeuo-btn absolute top-0.5 left-0.5 h-4.5 w-4.5 bg-primary transition-transform duration-300",
          dark && "translate-x-5",
        )}
      />
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled && !open ? "glass border-b border-border/60" : "bg-transparent",
        )}
      >
        <div className="mx-auto grid h-16 max-w-350 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 md:flex md:justify-between">
          <a href="#top" className="truncate text-lg font-medium tracking-tight">
            JS Design<sup className="text-[10px]">®</sup>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n, i) => (
              <Fragment key={n.href}>
                {i > 0 && <span className="text-base font-medium text-muted-foreground">+</span>}
                <a
                  href={n.href}
                  className="text-base font-medium transition-colors hover:text-accent"
                >
                  {n.label}
                </a>
              </Fragment>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitch />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative h-8 w-8 md:hidden"
            >
              <span
                className={cn(
                  "absolute left-1 h-0.5 w-6 rounded-full bg-foreground transition-all duration-300",
                  open ? "top-3.75 rotate-45" : "top-2.75",
                )}
              />
              <span
                className={cn(
                  "absolute left-1 h-0.5 rounded-full bg-foreground transition-all duration-300",
                  open ? "top-3.75 w-6 -rotate-45" : "top-4.75 w-4",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background px-6 pt-24 pb-10 transition-all duration-500 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-5">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={cn(
                "flex items-baseline gap-3 whitespace-nowrap text-[clamp(2.75rem,11.5vw,4.5rem)] font-medium tracking-[-0.04em] transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              <span className="text-sm tracking-[0.08em] text-accent">[0{i + 1}]</span>
              {n.label}
            </a>
          ))}
        </nav>
        <p className="mt-auto text-sm text-muted-foreground">hello@example.com</p>
        <GetInTouch
          className="mt-5 w-full justify-center px-8 py-4 text-base"
          open={open}
          delay={NAV.length * 60}
          onOpen={() => setOpen(false)}
        />
      </div>
    </>
  );
}
