"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/format";

export function BookingPanel({
  pricePerNight,
  maxGuests,
}: {
  pricePerNight: number;
  maxGuests: number;
}) {
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const subtotal = pricePerNight * nights;
  const fees = useMemo(() => Math.round(subtotal * 0.12), [subtotal]);
  const total = subtotal + fees;

  return (
    <aside className="section-shell h-fit rounded-2xl bg-[var(--surface)] p-5 shadow-[0_12px_24px_rgba(15,28,27,0.07)] lg:sticky lg:top-24">
      <h2 className="text-2xl font-semibold">Бронирование</h2>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Без предоплаты. Бесплатная отмена за 48 часов.</p>
      <div className="mt-4 grid gap-3">
        <label className="text-sm">
          Даты
          <input defaultValue="Aug 12 - Aug 16" className="mt-1 w-full rounded-lg border border-[var(--outline)] px-3 py-2" />
        </label>
        <label className="text-sm">
          Гости
          <input
            type="number"
            min={1}
            max={maxGuests}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-[var(--outline)] px-3 py-2"
          />
        </label>
        <label className="text-sm">
          Ночей
          <input
            type="number"
            min={1}
            max={30}
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-[var(--outline)] px-3 py-2"
          />
        </label>
      </div>
      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-[var(--text-muted)]">Стоимость проживания</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-[var(--text-muted)]">Сервисный сбор</dt>
          <dd>{formatPrice(fees)}</dd>
        </div>
        <div className="flex justify-between border-t border-[var(--outline)] pt-2 font-semibold">
          <dt>Итого</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
      <Button className="mt-5 w-full">Забронировать демо</Button>
    </aside>
  );
}
