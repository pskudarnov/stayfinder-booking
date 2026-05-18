"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/format";
import { searchSchema, type SearchFormValues } from "@/lib/validation";

const destinationChips = ["Хельсинки", "Стокгольм", "Копенгаген", "Таллин"];

export function Hero() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { destination: "Helsinki", dates: "Aug 12 - Aug 16", guests: 2 },
  });

  const onSubmit = (values: SearchFormValues) => {
    const params = new URLSearchParams({
      destination: values.destination,
      dates: values.dates,
      guests: String(values.guests),
    });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[var(--outline)] bg-[radial-gradient(circle_at_10%_10%,rgba(81,114,95,0.25),transparent_45%),radial-gradient(circle_at_95%_20%,rgba(30,48,47,0.55),transparent_55%),linear-gradient(120deg,#314847_0%,#1f312f_45%,#121f1e_100%)] px-4 py-10 text-white shadow-[0_22px_40px_rgba(9,27,26,0.25)] md:px-9 md:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
            Booking-платформа нового уровня
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Больше, чем просто поездка.</h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Подберите жильё для отдыха и работы в лучших локациях Северной Европы — с понятным поиском,
            честными условиями и продуманным сервисом.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
            {[
              ["4.8", "средний рейтинг"],
              ["120+", "проверенных объектов"],
              ["12", "городов"],
              ["24/7", "гибкий заезд"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2">
                <p className="text-lg font-semibold">{value}</p>
                <p className="text-xs text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
          <div className="rounded-2xl border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(255,255,255,0.07))] p-4">
            <p className="text-xs uppercase tracking-[0.08em] text-white/75">Выбор недели</p>
            <h3 className="mt-2 text-2xl font-semibold">Nordic Loft</h3>
            <p className="mt-1 text-sm text-white/80">Helsinki Design District</p>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-black/25 px-3 py-2 text-sm">
              <span>★ 4.8 · 142 отзыва</span>
              <span className="font-semibold">{formatPrice(13050)} / ночь</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {destinationChips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/90">
                {chip}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <form
        action="/search"
        method="get"
        onSubmit={handleSubmit(onSubmit)}
        className="section-shell mt-8 grid gap-3 rounded-2xl bg-[var(--surface)]/95 p-3 text-[var(--text)] md:grid-cols-[1.3fr_1fr_0.8fr_auto] md:items-end"
      >
        <label className="rounded-xl px-3 py-2 text-sm">
          <Label className="mb-1 block">Направление</Label>
          <Input {...register("destination")} aria-label="Направление" className="border-0 bg-transparent p-0 text-[15px] shadow-none focus-visible:ring-0" />
        </label>
        <label className="rounded-xl px-3 py-2 text-sm">
          <Label className="mb-1 block">Даты</Label>
          <Input {...register("dates")} aria-label="Даты" className="border-0 bg-transparent p-0 text-[15px] shadow-none focus-visible:ring-0" />
        </label>
        <label className="rounded-xl px-3 py-2 text-sm">
          <Label className="mb-1 block">Гости</Label>
          <Input type="number" {...register("guests", { valueAsNumber: true })} aria-label="Гости" className="border-0 bg-transparent p-0 text-[15px] shadow-none focus-visible:ring-0" />
        </label>
        <Button type="submit" className="w-full md:w-auto">Найти жильё</Button>
      </form>

      {errors.destination || errors.dates || errors.guests ? (
        <p className="mt-3 text-sm text-rose-200">Проверьте корректность полей поиска.</p>
      ) : null}

      <div className="mt-6">
        <Link href="/search" className="text-sm font-medium text-white/90 underline-offset-4 hover:underline">
          Открыть полный каталог →
        </Link>
      </div>
    </section>
  );
}
