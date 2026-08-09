const links = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "journal", href: "/journal" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <a href="#home" className="font-mono text-sm tracking-tight text-white">
        HP / HIRUSHA.ME
      </a>

      <nav className="hidden gap-6 font-mono text-xs text-neutral-500 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
