import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionIndex from "@/components/SectionIndex";

export default function Home() {
  return (
    <>
      <SectionIndex />
      <main className="mx-auto min-h-screen max-w-5xl px-6 lg:pr-20">
        <Navbar />

        <Hero />

        <Section number="02" name="about">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-300">
              I'm a backend and infrastructure focused developer based in Sri
              Lanka. Most of my work sits close to the server. APIs, databases,
              and the systems that keep things running.
            </p>

            <p className="mt-6 leading-7 text-neutral-500">
              I work primarily with TypeScript, Go, and Python, and spend a fair
              amount of time in Linux, Docker, and networking, partly for work,
              partly because I like knowing how the stack actually behaves
              underneath the framework. I've also built and shipped full
              applications end-to-end when the project called for it, but
              backend and infra is where I default.
            </p>

            <a
              href="/achievements"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-xs text-neutral-500 transition-colors hover:text-white"
            >
              <span className="text-[var(--accent)]">→</span>
              view achievements
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </Section>

        {/* <Section number="03" name="projects">
          <Projects />
        </Section> */}

        <Section number="03" name="stack">
          <Stack />
        </Section>

        {/* <Section number="04" name="now">
          <Now />
        </Section> */}

        <Section number="04" name="contact">
          <Contact />
        </Section>
        <footer className="flex flex-col gap-4 border-t border-neutral-800 py-8 font-mono text-[10px] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span>© 2026 Hirusha Danthasinghe</span>
            <span className="hidden sm:inline">/</span>
            <span>Sri Lanka</span>
          </div>

          <div className="flex gap-4">
            <a
              href="#home"
              className="transition-colors hover:text-neutral-400"
            >
              back to top ↑
            </a>

            <a
              href="/achievements"
              className="transition-colors hover:text-neutral-400"
            >
              achievements ↗
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
