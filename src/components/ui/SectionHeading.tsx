export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-7">
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{subtitle}</p> : null}
    </div>
  );
}
