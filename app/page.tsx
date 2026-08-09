import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6">
      <Navbar />

      <Hero />

      <Section number="02" name="about">
        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-neutral-300">
            I'm a developer interested in understanding how things work under
            the hood.
          </p>

          <p className="mt-6 leading-7 text-neutral-500">
            I enjoy working across the stack, building web applications,
            experimenting with Linux, and learning about systems, networking,
            and cloud infrastructure.
          </p>
        </div>
      </Section>

      <Section number="03" name="projects">
        <Projects />
      </Section>

      <Section number="04" name="stack">
        <Stack />
      </Section>

      <Section number="05" name="now">
        <Now />
      </Section>

      <Section number="06" name="contact">
        <Contact />
      </Section>

      <footer className="flex flex-col gap-2 border-t border-neutral-800 py-8 font-mono text-xs text-neutral-600 sm:flex-row sm:justify-between">
        <span>© 2026 Hirusha Pramuditha</span>
        <span>Sri Lanka</span>
      </footer>
    </main>
  );
}
