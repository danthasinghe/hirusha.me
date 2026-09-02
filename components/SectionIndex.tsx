"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", number: "01" },
  { id: "about", number: "02" },
  // { id: "projects", number: "03" },
  { id: "stack", number: "03" },
  { id: "contact", number: "04" },
];

export default function SectionIndex() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= marker) {
          currentSection = section.id;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <aside className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <nav className="flex flex-col items-end gap-3">
        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={`Go to section ${section.number}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`h-px transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-[var(--accent)]"
                    : "w-2 bg-neutral-800 group-hover:w-4 group-hover:bg-neutral-600"
                }`}
              />

              <span
                className={`font-mono text-[10px] transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-neutral-700 group-hover:text-neutral-400"
                }`}
              >
                {section.number}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
