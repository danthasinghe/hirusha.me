type SectionProps = {
  number: string;
  name: string;
  children: React.ReactNode;
};

export default function Section({ number, name, children }: SectionProps) {
  return (
    <section
      id={name.toLowerCase()}
      className="grid grid-cols-1 gap-6 border-t border-neutral-800/80 py-24 md:grid-cols-[180px_1fr] md:gap-12"
    >
      <div className="font-mono text-xs text-neutral-600">
        <div>
          {number} /{" "}
          <span className="text-neutral-500">{name.toUpperCase()}</span>
        </div>

        <div className="mt-3 text-neutral-700">_</div>
      </div>

      <div>{children}</div>
    </section>
  );
}
