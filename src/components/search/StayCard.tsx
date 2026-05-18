import Image from "next/image";
import Link from "next/link";
import type { Stay } from "@/data/stays";
import { Badge } from "@/components/ui/Badge";
import { Price } from "@/components/ui/Price";
import { localizeAmenity } from "@/lib/i18n";

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--outline)] bg-[var(--surface)] shadow-[0_10px_24px_rgba(15,28,27,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(15,28,27,0.13)]">
      <Link href={`/stays/${stay.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={`/images/stays/${stay.slug}-main.svg`}
          alt={`${stay.title}, ${stay.destination}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" aria-hidden />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {stay.featured ? <Badge label="Выбор гостей" /> : null}
          <span className="rounded-full bg-black/45 px-2 py-1 text-[11px] text-white">★ {stay.rating}</span>
          <span className="rounded-full bg-black/45 px-2 py-1 text-[11px] text-white">{stay.city}</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div>
          <h3 className="text-xl font-semibold text-[var(--text)] transition group-hover:text-[var(--primary)]">{stay.title}</h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{stay.destination}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{stay.maxGuests} гостей · {stay.bedrooms} спальни</p>
        </div>

        <div className="mt-3 min-h-9">
          <p className="line-clamp-2 text-sm text-[var(--text-muted)]">{stay.description}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {stay.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full bg-[var(--surface-soft)] px-2 py-1 text-xs text-[var(--text-muted)]">
              {localizeAmenity(a)}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-2">
            <Price value={stay.pricePerNight} /> <span className="text-xs text-[var(--text-muted)]">/ ночь</span>
          </div>
          <Link
            href={`/stays/${stay.slug}`}
            className="inline-flex rounded-lg border border-[var(--outline)] bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}
