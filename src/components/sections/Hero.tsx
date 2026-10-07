import { GetInTouch } from "./GetInTouch";
import { LOGOS, ph } from "../data/logos";

export function Hero() {
  return (
    <section id="top" className="px-3 pt-20 sm:px-4">
      <div className="relative mx-auto flex min-h-[60svh] max-w-350 flex-col overflow-hidden rounded-3xl skeuo-card">
        <img src="/hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-scrim/85 via-scrim/25 to-transparent" />
        <div className="relative z-10 grid gap-6 p-5 text-left sm:p-8 lg:p-12">
          <h1 className="text-[22vw] leading-[0.85] font-medium tracking-[-0.06em] text-primary sm:text-[18vw] lg:text-[11rem]">
            Khepri<sup className="align-super text-[0.4em]">®</sup>
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
            <p className="mb-4 max-w-xs text-sm text-on-image/70">
              Trusted by etc etc reliable etc etc, lasting systems.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-on-image/70">
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
