import { DragScroll } from "../DragScroll";
import { cn } from "@/lib/utils";
import { ph } from "../data/logos";
import { SectionLabel } from "../Shared";

export function About() {
  const card =
    "skeuo-card relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl p-5 sm:h-72 sm:w-72";
  return (
    <section id="about" className="mx-auto max-w-350 px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <SectionLabel section="about" />
        <h2 className="text-2xl leading-tight font-medium tracking-tight sm:text-4xl">
          We believe the most memorable projects are not built through convenience, but{" "}
          <span className="text-muted-foreground">/</span>through intentionality,{" "}
          <span className="text-muted-foreground">
            quietly captures attention, and leaves a lasting impression long after completion.
          </span>
        </h2>
      </div>

      <DragScroll className="mt-14 gap-4 px-1 py-2">
        <div className={cn(card, "p-0")}>
          <img
            src="/about/services.webp"
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="glass-dark absolute inset-3 flex flex-col justify-between rounded-2xl p-4 text-on-image">
            <p className="text-xs">Services running</p>
            <div id="services">
              <p className="text-5xl font-medium tracking-tight">80+</p>
              <p className="text-sm opacity-80">Critical services maintained, and optimized.</p>
            </div>
          </div>
        </div>

        <div className={cn(card, "flex flex-col justify-between bg-card")}>
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src={ph(80, 80, " ")}
                alt=""
                draggable={false}
                className="aspect-square rounded-full"
              />
            ))}
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Happy clients</p>
            <p className="text-5xl font-medium tracking-tight">
              8<sup className="text-xl">+</sup>
            </p>
          </div>
        </div>

        <div className={cn(card, "flex flex-col justify-between bg-ink text-ink-foreground")}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-ink-muted">Years of experience</p>
              <p className="text-5xl font-medium tracking-tight">
                12<sup className="text-xl">+</sup>
              </p>
            </div>
            <img
              src="/about/logo.png"
              alt=""
              draggable={false}
              className="h-16 w-16 rounded-full dark:hidden"
            />
            <img
              src="/about/logo-black.png"
              alt=""
              draggable={false}
              className="hidden h-16 w-16 rounded-full dark:block"
            />
          </div>
          <p className="text-sm text-ink-muted">
            Broad expertise across Linux, design, and development, grounded in hands-on experience.
          </p>
        </div>

        <div className={cn(card, "flex flex-col justify-between bg-card")}>
          <p className="text-sm text-muted-foreground">
            Every application shipped with monitoring, backups and documentation.
          </p>
          <div className="flex items-end gap-4">
            <img
              src="/about/projects.webp"
              alt=""
              draggable={false}
              className="h-28 w-20 rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Projects delivered</p>
              <p className="text-5xl font-medium tracking-tight">
                10<sup className="text-xl">+</sup>
              </p>
            </div>
          </div>
        </div>

        <div className={cn(card, "p-0")}>
          <img
            src="/about/uptime.webp"
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="glass-dark absolute inset-3 flex flex-col justify-between rounded-2xl p-4 text-on-image">
            <p className="text-xs">Uptime kept</p>
            <div id="services">
              <p className="text-5xl font-medium tracking-tight">
                99.9<sup className="text-xl">%</sup>
              </p>
              <p className="text-sm opacity-80">Across every application we manage.</p>
            </div>
          </div>
        </div>
      </DragScroll>
    </section>
  );
}
