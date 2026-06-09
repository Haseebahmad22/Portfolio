import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Trust } from "@/components/portfolio/Trust";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haseeb Ahmad — Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "Haseeb Ahmad — full-stack web developer based in Lahore. BSSE at FAST NUCES, building web products at iTeachGemini. React, Next.js, Node, Python.",
      },
      { property: "og:title", content: "Haseeb Ahmad — Full-Stack Web Developer" },
      {
        property: "og:description",
        content: "Full-stack web developer in Lahore. React, Next.js, Node, Python — building thoughtful web products.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Stack />
        <Experience />
        <Services />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
