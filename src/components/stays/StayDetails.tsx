import type { Stay } from "@/data/stays";
import { StayGallery } from "@/components/stays/StayGallery";
import { Amenities } from "@/components/stays/Amenities";
import { Price } from "@/components/ui/Price";

const typeLabels: Record<Stay["type"], string> = {
  Apartment: "Апартаменты",
  Hotel: "Отель",
  House: "Дом",
  Studio: "Студия",
};

export function StayDetails({ stay }: { stay: Stay }) {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <StayGallery slug={stay.slug} />
      <div className="section-shell rounded-2xl bg-[var(--surface)] p-5 md:p-6">
        <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">{typeLabels[stay.type]}</p>
        <h1 className="mt-2 text-4xl font-semibold">{stay.title}</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {stay.destination}, {stay.country}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
          <span className="rounded-full bg-[var(--surface-soft)] px-2 py-1">★ {stay.rating}</span>
          <span>{stay.reviews} отзывов</span>
          <span>·</span>
          <span>{stay.maxGuests} гостей</span>
          <span>·</span>
          <span>{stay.bedrooms} спальни</span>
        </div>
        <div className="mt-4 rounded-xl bg-[var(--surface-soft)] px-4 py-3">
          <Price value={stay.pricePerNight} /> <span className="text-sm text-[var(--text-muted)]">/ ночь</span>
        </div>
        <p className="mt-4 leading-relaxed text-[var(--text-muted)]">{stay.description}</p>
        <Amenities items={stay.amenities} />
      </div>
    </section>
  );
}
