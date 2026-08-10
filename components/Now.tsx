export default function Now() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>
        <p className="mb-6 font-mono text-sm text-neutral-500">currently</p>

        <ul className="space-y-4 font-mono text-sm">
          <li className="flex gap-3">
            <span className="text-[var(--accent)]">→</span>

            <span className="text-neutral-400">building something</span>
          </li>

          <li className="flex gap-3">
            <span className="text-[var(--accent)]">→</span>

            <span className="text-neutral-400">
              learning more about distributed systems
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-[var(--accent)]">→</span>

            <span className="text-neutral-400">
              messing with my Linux setup
            </span>
          </li>
        </ul>
      </div>

      <div className="md:border-l md:border-neutral-800 md:pl-10">
        <p className="mb-6 font-mono text-sm text-neutral-500">listening to</p>

        <p className="text-sm text-neutral-400">
          something probably playing in the background
        </p>

        <div className="mt-6 flex items-end gap-[3px]">
          {[
            8, 12, 18, 10, 14, 24, 16, 8, 12, 20, 28, 16, 10, 18, 12, 24, 30,
            18, 8, 14, 20, 12, 26, 16, 10, 22, 14, 8, 18, 24, 12, 20, 28, 14, 8,
            16, 22, 12, 18, 26, 8, 14, 20, 12, 28, 16, 10, 18, 24, 12, 8, 14,
            20, 16, 10, 22, 14,
          ].map((height, index) => (
            <span
              key={index}
              className="w-[2px] bg-neutral-700"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
