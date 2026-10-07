import { Quote } from "lucide-react";
import { GetInTouch } from "./GetInTouch";
import { cn } from "@/lib/utils";
import { LOGOS, ph } from "../data/logos";
import { SectionLabel, Stars } from "../Shared";

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
          <SectionLabel section="testimonials" />
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
