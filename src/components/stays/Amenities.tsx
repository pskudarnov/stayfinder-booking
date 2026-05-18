import { localizeAmenity } from "@/lib/i18n";

export function Amenities({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((a) => (
        <li key={a} className="rounded-full border border-[var(--outline)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--text-muted)]">
          {localizeAmenity(a)}
        </li>
      ))}
    </ul>
  );
}
