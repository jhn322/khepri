import { GetInTouch } from "./GetInTouch";
import { SectionLabel } from "../Shared";

export function CallToAction() {
  return (
    <section className="px-3 pb-3 sm:px-4">
      <div className="mx-auto flex max-w-350 flex-col gap-8 rounded-3xl bg-ink p-6 text-ink-foreground skeuo-card sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div>
          <SectionLabel section="getInTouch" onDark />
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
