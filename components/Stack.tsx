const stack = [
  {
    category: "languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "C++"],
  },
  {
    category: "infrastructure",
    items: ["Linux", "Docker", "Nginx", "Cloud"],
  },
  {
    category: "data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "web",
    items: ["Next.js", "React", "Node.js", "Express"],
  },
  {
    category: "mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export default function Stack() {
  return (
    <div>
      <p className="mb-10 font-mono text-sm text-neutral-500">
        technologies I work with
      </p>

      <div className="space-y-8">
        {stack.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 gap-3 sm:grid-cols-[140px_1fr]"
          >
            <span className="font-mono text-xs uppercase tracking-wide text-neutral-700">
              {group.category}
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
