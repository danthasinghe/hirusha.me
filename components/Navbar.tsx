import MobileMenu from "./MobileMenu";

const links = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "now", href: "#now" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <a
        href="#home"
        className="font-mono text-xs tracking-tight text-neutral-300 transition-colors hover:text-white"
      >
        HP / HIRUSHA.ME
      </a>

      <nav className="hidden items-center gap-6 font-mono text-xs sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative text-neutral-600 transition-colors hover:text-white"
          >
            {link.label}

            <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>
        ))}

        <span className="text-neutral-800">/</span>

        <a
          href="/achievements"
          className="text-neutral-600 transition-colors hover:text-white"
        >
          achievements ↗
        </a>
      </nav>

      <MobileMenu />
    </header>
  );
}
