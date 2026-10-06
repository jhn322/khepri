import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, Star, Quote } from "lucide-react";
import { DragScroll } from "./DragScroll";
import { GetInTouch, CONTACT_EMAIL } from "./GetInTouch";
import { NAV } from "./Navbar";
import { cn } from "@/lib/utils";

const ph = (w: number, h: number, t = "") =>
  `https://placehold.co/${w}x${h}/d4d4d4/737373?text=${encodeURIComponent(t || `${w}x${h}`)}`;

const LOGOS = [
  "CloudWatch",
  "Boltshift",
  "Interlock",
  "Epicurious",
  "Sisyphus",
  "Nietzsche",
  "Kernelio",
  "Rootline",
];

const Label = ({ children, className }: { children: string; className?: string }) => (
  <p className={cn("text-xs tracking-wide text-muted-foreground", className)}>
    <span className="mr-2 text-accent">-</span>[ {children} ]
  </p>
);

const Stars = () => (
  <div className="flex gap-0.5 text-accent">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-current" />
    ))}
  </div>
);

const Tag = ({ children, onDark }: { children: string; onDark?: boolean }) => (
  <span
    className={cn(
      "inline-flex rounded-full border px-3 py-1 text-xs",
      onDark ? "border-on-image/50 text-on-image" : "border-current/30",
    )}
  >
    {children}
  </span>
);

// HERO
export function Hero() {
  return (
    <section id="top" className="px-3 pt-20 sm:px-4">
      <div className="relative mx-auto flex min-h-[60svh] max-w-350 flex-col overflow-hidden rounded-3xl skeuo-card">
        <img
          src={ph(1800, 1100, "Hero image")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-scrim/85 via-scrim/25 to-transparent" />
        <div className="relative z-10 grid gap-6 p-5 text-left sm:p-8 lg:p-12">
          <h1 className="text-[22vw] leading-[0.85] font-medium tracking-[-0.06em] text-primary sm:text-[18vw] lg:text-[11rem]">
            JS Design<sup className="align-super text-[0.3em]">®</sup>
          </h1>
          <div className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <img src={ph(80, 80, "A")} alt="" className="h-8 w-8 rounded-full" />
              <span className="h-px w-8 bg-foreground/40" />
              <img src={ph(80, 80, "B")} alt="" className="h-8 w-8 rounded-full" />
              <img
                src={ph(80, 80, "C")}
                alt=""
                className="-ml-3 h-8 w-8 rounded-full ring-2 ring-background"
              />
              <span className="ml-2 text-xs">[ BUILT MAINTAINABLE ]</span>
            </div>
            <p className="text-sm text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt dignissim
              elit quis sodales. Nullam lectus ipsum, tempor ut mi vel, venenatis bibendum lorem.
              Maecenas lobortis volutpat sapien cursus consectetur. Nam vitae eros id metus luctus
              facilisis eget ac ligula.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-auto grid gap-5 p-5 pt-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-8 sm:pt-12 lg:p-12 lg:pt-16">
          <div className="min-w-0 text-left lg:max-w-180">
            <p className="mb-4 max-w-xs text-sm text-on-image/90">
              Trusted by etc etc reliable etc etc, lasting systems.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-on-image/80">
              {LOGOS.slice(0, 6).map((l) => (
                <span key={l}>◆ {l}</span>
              ))}
            </div>
          </div>
          <GetInTouch className="w-fit shrink-0 justify-self-end px-8 py-4 text-base" />
        </div>
      </div>
    </section>
  );
}

// ABOUT
export function About() {
  const card =
    "skeuo-card relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl p-5 sm:h-72 sm:w-72";
  return (
    <section id="about" className="mx-auto max-w-350 px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <Label>ABOUT COMPANY</Label>
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

// SERVICES
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
            <p className="text-xs text-ink-muted">
              <span className="mr-2 text-accent">-</span>[ OUR SERVICES ]
            </p>
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

// PROJECTS
const PROJECTS = [
  {
    title: "Veritas Platform Rebuild",
    tags: ["Development", "UX Design", "Cloud"],
    client: "Veritas",
    year: "2026",
  },
  {
    title: "Baseline Infra Migration",
    tags: ["Linux", "Sysadmin", "Docker"],
    client: "Baseline",
    year: "2025",
  },
  {
    title: "NovaFlow Design System",
    tags: ["UX Research", "UI Design", "Frontend"],
    client: "NovaFlow",
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-3 space-y-3 px-3 sm:px-4">
      {PROJECTS.map((p) => (
        <article
          key={p.title}
          className="relative mx-auto aspect-3/4 max-w-350 overflow-hidden rounded-3xl skeuo-card sm:aspect-16/10 lg:aspect-video"
        >
          <img
            src={ph(1600, 1000, p.client)}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-scrim/70 to-transparent" />
          <div className="glass-dark absolute inset-3 flex flex-col justify-between rounded-2xl p-5 text-on-image sm:inset-4 sm:p-8">
            <p className="text-xs">[ CASE STUDY ]</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-2xl font-medium tracking-tight sm:text-4xl">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t} onDark>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="flex gap-8 text-xs">
                <div>
                  <p className="opacity-70">Client</p>
                  <p>{p.client}</p>
                </div>
                <div>
                  <p className="opacity-70">Year</p>
                  <p>{p.year}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

// PROCESS
const STEPS = [
  {
    title: "Discover",
    desc: "We map your systems, users and goals before touching a single line of code.",
  },
  {
    title: "Construct",
    desc: "Architecture, infrastructure and interfaces begin to take shape in tight loops.",
  },
  {
    title: "Direct",
    desc: "Every detail is tested, hardened and refined until it runs without friction.",
  },
  {
    title: "Release",
    desc: "A polished launch, documented and monitored to stay reliable long after.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-350 px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr]">
        <Label>OUR PROCESS</Label>
        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Our Process Moves
          <br />
          Like Production.
        </h2>
        <p className="text-sm text-muted-foreground">
          Clear phases, honest timelines and a calm path from idea to production.
        </p>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex flex-col gap-4">
            <img
              src={ph(600, 760, `Step 0${i + 1}`)}
              alt=""
              className="aspect-4/5 w-full rounded-3xl object-cover skeuo-card"
            />
            <p className="text-center text-sm text-muted-foreground">0{i + 1}</p>
            <div className="flex-1 rounded-3xl bg-card p-6 skeuo-card">
              <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// TESTIMONIALS
const QUOTES = [
  {
    quote: "They didn't just fix our servers. They changed how our whole team works.",
    name: "Elena Moritz",
    role: "Mirova Founder",
    summary: "Distinct. Refined. Reliable.",
    top: false,
  },
  {
    quote: "Working with them felt less like hiring an agency and more like gaining a senior team.",
    name: "Kai Nakamura",
    role: "CTO, Halden",
    summary: "Strategic. Calm. Precise.",
    top: true,
  },
  {
    quote:
      "Our platform is faster, safer and genuinely nicer to use. Clients mention it constantly.",
    name: "Marcus Vale",
    role: "CEO Velora",
    summary: "Fast. Secure. Lasting.",
    top: false,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-350 px-4 pb-16 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <Label>TESTIMONIALS</Label>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            Voices Between Frames
          </h2>
        </div>
        <p className="text-sm text-muted-foreground lg:pt-10">
          Long-term partnerships with teams who care about how their systems feel and perform.
        </p>
      </div>

      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-ink p-6 text-ink-foreground skeuo-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-ink-muted">Client rating</p>
              <p className="text-6xl font-medium tracking-tight">
                4.9<span className="text-lg text-ink-muted">/5</span>
              </p>
            </div>
            <img src={ph(100, 100, "Badge")} alt="" className="h-14 w-14 rounded-full" />
          </div>
          <p className="text-sm text-ink-muted">
            Trusted by founders, studios and operators for dependable, well-crafted systems.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2].map((i) => (
                <img
                  key={i}
                  src={ph(80, 80, " ")}
                  alt=""
                  className="-ml-2 h-8 w-8 rounded-full ring-2 ring-ink first:ml-0"
                />
              ))}
            </div>
            <Stars />
          </div>
          <GetInTouch label="Share your experience" className="w-full justify-center" />
        </div>

        {QUOTES.map((t) => {
          const person = (
            <div
              className={cn(
                "flex items-center gap-3 rounded-3xl bg-card p-5 skeuo-card",
                t.top && "md:order-first",
              )}
            >
              <img src={ph(100, 100, " ")} alt="" className="h-11 w-11 rounded-full" />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          );
          return (
            <div key={t.name} className="flex flex-col gap-2">
              <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-card p-6 skeuo-card">
                <Quote className="h-7 w-7 fill-current" />
                <p className="text-xl leading-snug tracking-tight">{t.quote}</p>
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Stars />
                      <span className="text-xs">5 out of 5</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.summary}</p>
                  </div>
                  <img
                    src={ph(160, 160, " ")}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                </div>
              </div>
              {person}
            </div>
          );
        })}
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max gap-12">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-lg font-medium whitespace-nowrap text-muted-foreground"
            >
              <img src={ph(48, 48, " ")} alt="" className="h-6 w-6 rounded-full" /> {l}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

// CALL TO ACTION
export function CallToAction() {
  return (
    <section className="px-3 pb-3 sm:px-4">
      <div className="mx-auto flex max-w-350 flex-col gap-8 rounded-3xl bg-ink p-6 text-ink-foreground skeuo-card sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div>
          <p className="text-xs text-ink-muted">
            <span className="mr-2 text-accent">-</span>[ GET IN TOUCH ]
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            Have A System
            <br /> Worth Building?
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-muted">
            Tell us about your project, we usually reply within a day.
          </p>
        </div>
        <GetInTouch className="shrink-0 px-8 py-4 text-base" />
      </div>
    </section>
  );
}

// FOOTER
export function Footer() {
  const [year] = useState(() => new Date().getFullYear().toString().slice(2));
  return (
    <footer className="px-3 pb-3 sm:px-4">
      <div className="mx-auto max-w-350 rounded-3xl bg-ink p-6 text-ink-foreground skeuo-card sm:p-10 lg:p-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[20vw] leading-[0.85] font-medium tracking-[-0.06em] sm:text-[14vw] lg:text-[10rem]">
            JS Design<sup className="align-super text-[0.3em]">®</sup>
          </p>
          <p className="text-2xl sm:text-4xl">© 20 - {year}°</p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="max-w-xs text-sm text-ink-muted">
              For founders, studios and ambitious teams who need reliable systems and thoughtful
              design.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-2xl underline-offset-4 hover:text-accent hover:underline sm:text-3xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <p className="mb-3 text-xs text-ink-muted">NAVIGATION</p>
            <ul className="space-y-1.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs text-ink-muted">SERVICES</p>
            <ul className="space-y-1.5 text-sm">
              {["Basic Plan", "Pro Plan", "Custom Plan"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs text-ink-muted">SOCIAL MEDIA</p>
            <div className="flex gap-2">
              {["in", "gh", "x", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="skeuo-btn grid h-10 w-10 place-items-center bg-ink-foreground text-xs font-medium text-ink"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-ink-border pt-8 text-xs sm:grid-cols-3">
          <div>
            <p className="text-ink-muted">PHONE NUMBER</p>
            <p>+46 00 000 00 00</p>
          </div>
          <div>
            <p className="text-ink-muted">ADDRESS</p>
            <p>Placeholder Street 1, Stockholm</p>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-ink-muted">OFFICE HOURS</p>
              <p>Mon – Fri, 09:00 – 17:00</p>
            </div>
            <a
              href="#top"
              aria-label="Back to top"
              className="skeuo-btn grid h-10 w-10 place-items-center border border-ink-border"
            >
              <ArrowUpRight className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>© 20{year} JS Design. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
