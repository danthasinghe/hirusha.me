import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between">
        <p className="font-mono text-sm text-neutral-500">selected work</p>

        <span className="font-mono text-xs text-neutral-700">
          {projects.length.toString().padStart(2, "0")} projects
        </span>
      </div>

      <div className="border-t border-neutral-800">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.href}
            className="group relative block overflow-hidden border-b border-neutral-800"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/[0.015] transition-transform duration-500 group-hover:translate-x-0" />
            <div className="relative grid grid-cols-[40px_1fr_24px] gap-4 py-7 sm:grid-cols-[50px_1fr_60px_24px]">
              <span className="font-mono text-xs text-neutral-600 transition-colors group-hover:text-[var(--accent)]">
                {project.number}
              </span>

              <div>
                <h3 className="text-sm text-neutral-200 transition-colors group-hover:text-white">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="font-mono text-[11px] text-neutral-700 transition-colors group-hover:text-neutral-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <span className="hidden self-start pt-0.5 font-mono text-xs text-neutral-700 sm:block">
                {project.year}
              </span>

              <span className="self-start text-neutral-700 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">
                ↗
              </span>
            </div>

            {/* Revealed description */}
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pl-[56px] text-sm leading-6 text-neutral-600">
                  {project.details}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
