import type { Stay } from "@/data/stays";
import { StayCard } from "@/components/search/StayCard";

export function RelatedStays({ stays }: { stays: Stay[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stays.map((s) => (
        <StayCard key={s.id} stay={s} />
      ))}
    </div>
  );
}
