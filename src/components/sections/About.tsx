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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt dignissim elit
          quis sodales. Nullam lectus ipsum, tempor ut mi vel, venenatis bibendum lorem -{" "}
          <span className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt dignissim elit
            quis sodales. Nullam lectus ipsum, tempor ut mi vel, venenatis bibendum lorem.
          </span>
        </h2>
      </div>

      <DragScroll className="mt-14 gap-4 px-1 py-2">
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
              48<sup className="text-xl">+</sup>
            </p>
          </div>
        </div>

        <div className={cn(card, "flex flex-col justify-between bg-ink text-ink-foreground")}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-ink-muted">Years in ops</p>
              <p className="text-5xl font-medium tracking-tight">
                12<sup className="text-xl">+</sup>
              </p>
            </div>
            <img
              src={ph(120, 120, "Logo")}
              alt=""
              draggable={false}
              className="h-16 w-16 rounded-full"
            />
          </div>
          <p className="text-sm text-ink-muted">
            Linux, cloud and on-prem infrastructure kept steady since day one.
          </p>
        </div>

        <div className={cn(card, "flex flex-col justify-between bg-card")}>
          <p className="text-sm text-muted-foreground">
            Every deployment shipped with monitoring, backups and docs.
          </p>
          <div className="flex items-end gap-4">
            <img
              src={ph(200, 260, "Photo")}
              alt=""
              draggable={false}
              className="h-28 w-20 rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Projects delivered</p>
              <p className="text-5xl font-medium tracking-tight">
                150<sup className="text-xl">+</sup>
              </p>
            </div>
          </div>
        </div>

        <div className={cn(card, "p-0")}>
          <img
            src={ph(600, 600, "Image")}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="glass-dark absolute inset-3 flex flex-col justify-between rounded-2xl p-4 text-on-image">
            <p className="text-xs">Uptime kept</p>
            <div>
              <p className="text-5xl font-medium tracking-tight">
                99.9<sup className="text-xl">%</sup>
              </p>
              <p className="text-sm opacity-80">Across every system we manage.</p>
            </div>
          </div>
        </div>
      </DragScroll>
    </section>
  );
}
