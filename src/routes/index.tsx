import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/lumora/Navbar";
import {
  Hero,
  About,
  Services,
  Projects,
  Process,
  Testimonials,
  CallToAction,
  Footer,
} from "@/components/lumora/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Design - Development, Sysadmin, Linux & UX Agency" },
      {
        name: "description",
        content:
          "JS Design is a small IT agency building reliable software, Linux infrastructure and thoughtful UX.",
      },
      { property: "og:title", content: "JS Design - IT & UX Agency" },
      {
        property: "og:description",
        content: "Development, system administration, Linux and UX design under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
