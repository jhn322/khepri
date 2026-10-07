import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL } from "./GetInTouch";
import { NAV } from "../navItems";

export function Footer() {
  const [year] = useState(() => new Date().getFullYear().toString().slice(2));
  return (
    <footer className="px-3 pb-3 sm:px-4">
      <div className="mx-auto max-w-350 rounded-3xl bg-ink p-6 text-ink-foreground skeuo-card sm:p-10 lg:p-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[20vw] leading-[0.85] font-medium tracking-[-0.06em] sm:text-[14vw] lg:text-[10rem]">
            Khepri<sup className="align-super text-[0.4em]">®</sup>
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
          <p>© 20{year} Khepri. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
