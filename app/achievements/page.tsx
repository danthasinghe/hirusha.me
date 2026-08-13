import AchievementList from "@/components/AchievementList";

export const metadata = {
  title: "Achievements — Hirusha Danthasinghe",
  description: "Competitions, certifications, awards, and other achievements.",
};

export default function AchievementsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6">
      <header className="flex items-center justify-between py-6">
        <a
          href="/"
          className="font-mono text-xs tracking-tight text-neutral-300 transition-colors hover:text-white"
        >
          HP / HIRUSHA.ME
        </a>

        <a
          href="/"
          className="font-mono text-xs text-neutral-600 transition-colors hover:text-white"
        >
          ← back home
        </a>
      </header>

      <section className="py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="font-mono text-xs text-neutral-600">
            01 / ACHIEVEMENTS
          </div>

          <div>
            <h1 className="text-5xl font-medium tracking-[-0.04em] text-white sm:text-6xl">
              things I've done.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500">
              Competitions, certifications, awards, and other things I've worked
              towards over the years.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800 py-16">
        <AchievementList />
      </section>

      <footer className="border-t border-neutral-800 py-8 font-mono text-[10px] text-neutral-700">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© 2026 Hirusha Danthasinghe</span>
          <a href="/" className="transition-colors hover:text-neutral-400">
            back to home ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
