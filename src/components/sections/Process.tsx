import { ph } from "../data/logos";
import { SectionLabel } from "../Shared";

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
        <SectionLabel section="process" />
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
            <div id="testimonials" className="flex-1 rounded-3xl bg-card p-6 skeuo-card">
              <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
