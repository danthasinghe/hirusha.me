export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-12 py-16 md:grid-cols-[180px_1fr] md:gap-12 md:py-20"
    >
      {/* Section marker */}
      <div className="self-start pt-2 font-mono text-xs text-neutral-500">
        <span>01 / HOME</span>
        <div className="mt-3">_</div>
      </div>

      {/* Hero content */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px] lg:items-start">
        <div>
          <p className="mb-5 font-mono text-xl text-neutral-500">hey, I'm</p>

          <h1 className="text-5xl font-medium tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            Hirusha.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-neutral-400">
            I build backend systems and infrastructure, and enjoy understanding
            how things work under the hood.
          </p>

          <a
            href="#projects"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-white"
          >
            <span className="text-[var(--accent)]">→</span>
            <span>view my work</span>
            <span className="opacity-0 transition-opacity group-hover:opacity-100">
              _
            </span>
          </a>
        </div>

        {/* System info */}
        <div className="font-mono text-xs leading-6 text-neutral-600 lg:justify-self-end">
          <div>
            <span className="text-neutral-700">&gt;</span> location:{" "}
            <span className="text-neutral-400">Sri Lanka</span>
          </div>

          <div>
            <span className="text-neutral-700">&gt;</span> timezone:{" "}
            <span className="text-neutral-400">GMT+5:30</span>
          </div>

          <div>
            <span className="text-neutral-700">&gt;</span> status:{" "}
            <span className="text-[var(--accent)]">building</span>{" "}
            <span className="text-[var(--accent)]">●</span>
          </div>

          {/* Small visual */}
          <div className="mt-16 hidden text-neutral-600 lg:block">
            <pre className="overflow-hidden text-[10px] leading-3">
              {/* {`/
├── home/
│   └── hirusha/
│       ├── code/
│       ├── projects/
│       └── ideas/
├── etc/
└── README.md`} */}
              {/* {`       .--.
      |o_o |
      |:_/ |
     //   \\ \\
    (|     | )
   /'\\_   _/\\
   \\___)=(___/`} */}
              {`             /\\
            /  \\          /\\
       /\\  /    \\        /  \\
      /  \\/      \\______/    \\
 ____/                    ____\\____
     \\      /\\      /\\
      \\____/  \\____/  \\____`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
