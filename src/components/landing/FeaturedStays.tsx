import Link from "next/link";
import { stays } from "@/data/stays";
import { StayCard } from "@/components/search/StayCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedStays() {
  return (
    <section className="py-10">
      <SectionHeading title="Рекомендуемые варианты" subtitle="Карточки в стиле нового макета: акценты на цене, локации и рейтинге." />
      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stays
          .filter((s) => s.featured)
          .slice(0, 6)
          .map((s) => (
            <StayCard key={s.id} stay={s} />
          ))}
      </div>
      <div className="mt-6">
        <Link href="/search" className="text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline">
          Смотреть все объекты
        </Link>
      </div>
    </section>
  );
}
