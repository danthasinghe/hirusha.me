"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  //   { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "now", href: "#now" },
  { label: "contact", href: "#contact" },
  { label: "achievements ↗", href: "/achievements" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-mono text-xs text-neutral-600 transition-colors hover:text-white sm:hidden"
      >
        menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#050505] px-6 py-6 sm:hidden">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-neutral-300">
              HP / HIRUSHA.ME
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-mono text-xs text-neutral-600 hover:text-white"
            >
              close
            </button>
          </div>

          <nav className="mt-24">
            <div className="font-mono text-xs text-neutral-700">navigation</div>

            <div className="mt-8 flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-5 border-b border-neutral-900 py-5"
                >
                  <span className="font-mono text-xs text-neutral-700">
                    0{index + 1}
                  </span>

                  <span className="text-xl text-neutral-400 transition-colors group-hover:text-white">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[10px] text-neutral-700">
            <span>© 2026</span>
            <span>Sri Lanka</span>
          </div>
        </div>
      )}
    </>
  );
}
