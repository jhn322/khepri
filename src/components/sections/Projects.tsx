import { ph } from "../data/logos";
import { SectionLabel, Tag } from "../Shared";

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
    <section className="mt-3 space-y-3 px-3 sm:px-4">
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
            <SectionLabel section="projects" onDark />
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
