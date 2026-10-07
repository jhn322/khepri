import * as Accordion from "@radix-ui/react-accordion";
import { GetInTouch } from "./GetInTouch";
import { ph } from "../data/logos";
import { SectionLabel } from "../Shared";

const SERVICES = [
  {
    title: "Development",
    desc: "Robust web apps and internal tools built with modern stacks - typed, tested and made to be maintained long after launch.",
    tags: ["Web Apps", "APIs", "Automation"],
  },
  {
    title: "System Administration",
    desc: "Servers, networks and backups that simply work. We monitor, patch and harden so your team never thinks about it.",
    tags: ["Monitoring", "Backups", "Security"],
  },
  {
    title: "Linux & Infrastructure",
    desc: "From bare metal to containers and CI/CD pipelines, we design infrastructure that scales calmly and fails gracefully.",
    tags: ["Linux", "Docker", "CI/CD"],
  },
  {
    title: "UX & Interface Design",
    desc: "Clear, considered interfaces grounded in research, so the technology underneath feels effortless to use.",
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
];

export function Services() {
  return (
    <section id="services" className="px-3 sm:px-4">
      <div className="mx-auto max-w-350 rounded-3xl bg-ink p-5 text-ink-foreground skeuo-card sm:p-10 lg:p-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,380px)]">
          <div>
            <SectionLabel section="services" onDark />
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
              Crafting Systems That
              <br /> Leave A Lasting Mark
            </h2>
          </div>
          <div className="space-y-4 lg:pt-10">
            <p className="text-sm text-ink-muted">
              A small, senior team covering the full stack code, servers and experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {["DEV", "OPS", "UX"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-foreground/30 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Accordion.Root type="single" collapsible defaultValue="0" className="mt-12">
          {SERVICES.map((s, i) => (
            <Accordion.Item key={s.title} value={String(i)} className="border-t border-ink-border">
              <Accordion.Header>
                <Accordion.Trigger className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-6 text-left sm:gap-10 sm:py-8">
                  <span className="text-xs text-ink-muted">[0{i + 1}]</span>
                  <span className="truncate text-xl font-medium tracking-tight sm:text-3xl">
                    {s.title}
                  </span>
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-foreground/40 transition-colors group-hover:border-accent">
                    <span className="absolute h-px w-3.5 bg-current" />
                    <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-y-0" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="grid gap-6 pb-8 sm:pl-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:pr-14">
                  <div className="space-y-5">
                    <p className="max-w-md text-sm text-ink-muted">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink-foreground/40 px-3 py-1.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src={ph(300, 300, "Circle")}
                      alt=""
                      className="aspect-square w-28 rounded-full object-cover sm:w-36"
                    />
                    <img
                      src={ph(300, 300, "Square")}
                      alt=""
                      className="aspect-square w-28 rounded-2xl object-cover sm:w-36"
                    />
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="border-t border-ink-border pt-8">
          <GetInTouch label="Let's talk" />
        </div>
      </div>
    </section>
  );
}
