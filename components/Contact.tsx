const links = [
  {
    label: "email",
    value: "hello@itshirusha.me",
    href: "mailto:hello@itshirusha.me",
  },
  {
    label: "github",
    value: "github.com/hirushapramuditha",
    href: "https://github.com/danthasinghe",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/hirusha-danthasinghe",
    href: "https://linkedin.com/in/hirusha-danthasinghe",
  },
];

export default function Contact() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_220px]">
      <div>
        <h2 className="text-3xl tracking-[-0.03em] text-white sm:text-4xl">
          let's build something cool.
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-500">
          I'm always interested in interesting projects, ideas, collaborations,
          or just talking about technology.
        </p>

        <div className="mt-10 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex w-fit items-center gap-4 font-mono text-sm"
            >
              <span className="text-neutral-700 transition-colors group-hover:text-[var(--accent)]">
                →
              </span>

              <span className="text-neutral-400 transition-colors group-hover:text-white">
                {link.label}
              </span>

              <span className="text-xs text-neutral-700 transition-colors group-hover:text-neutral-500">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="font-mono text-xs">
        <div className="inline-flex items-center gap-2 border border-neutral-800 px-3 py-2 text-neutral-500">
          <span className="text-[var(--accent)]">●</span>
          available for interesting work
        </div>
      </div>
    </div>
  );
}
