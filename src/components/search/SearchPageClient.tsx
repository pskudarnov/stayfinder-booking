"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchForm } from "@/components/search/SearchForm";
import { SearchFilters as SearchFiltersPanel } from "@/components/search/SearchFilters";
import { SearchResults } from "@/components/search/SearchResults";
import { SearchSort } from "@/components/search/SearchSort";
import { MobileFilters } from "@/components/search/MobileFilters";
import { stays } from "@/data/stays";
import { filterAndSortStays, type SearchFilters } from "@/lib/search";
import { localizeAmenity } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { Badge } from "@/components/ui/Badge";
import type { SearchFormValues } from "@/lib/validation";

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 30000;

type Props = {
  initialDestination: string;
  initialDates: string;
  initialGuests: number;
};

export function SearchPageClient({ initialDestination, initialDates, initialGuests }: Props) {
  const router = useRouter();
  const [destination, setDestination] = useState(initialDestination);
  const [dates, setDates] = useState(initialDates);
  const [guests, setGuests] = useState(initialGuests);
  const [type, setType] = useState("all");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<"recommended" | "price-asc" | "price-desc" | "rating">("recommended");
  const [mobileOpen, setMobileOpen] = useState(false);

  const onForm = (v: SearchFormValues) => {
    setDestination(v.destination);
    setDates(v.dates);
    setGuests(v.guests);

    const params = new URLSearchParams();
    if (v.destination.trim()) params.set("destination", v.destination.trim());
    if (v.dates.trim()) params.set("dates", v.dates.trim());
    if (v.guests > 0) params.set("guests", String(v.guests));
    router.replace(`/search?${params.toString()}`);
  };

  const toggleAmenity = (a: string) =>
    setAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const resetFilters = () => {
    setType("all");
    setAmenities([]);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setMinRating(0);
  };

  const results = useMemo(
    () =>
      filterAndSortStays(stays, {
        destination,
        type,
        amenities,
        minPrice,
        maxPrice,
        minRating,
        sort,
      }),
    [destination, type, amenities, minPrice, maxPrice, minRating, sort],
  );

  const activeFilters = [
    type !== "all" ? `Тип: ${type}` : "",
    minRating > 0 ? `Рейтинг от ${minRating}` : "",
    minPrice > 0 ? `Цена от ${formatPrice(minPrice)}` : "",
    maxPrice < DEFAULT_MAX_PRICE ? `Цена до ${formatPrice(maxPrice)}` : "",
    ...amenities.map((a) => `Удобство: ${localizeAmenity(a)}`),
  ].filter(Boolean);

  const filters = (
    <SearchFiltersPanel
      destination={destination}
      type={type}
      amenities={amenities}
      minPrice={minPrice}
      maxPrice={maxPrice}
      minRating={minRating}
      setDestination={setDestination}
      setType={setType}
      toggleAmenity={toggleAmenity}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      setMinRating={setMinRating}
      onReset={resetFilters}
    />
  );

  return (
    <section className="py-10">
      <div className="section-shell rounded-3xl bg-[var(--surface-soft)] p-6 md:p-8">
        <h1 className="text-4xl font-semibold">Найти жильё</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Подберите апартаменты, дом или уютный лофт для отдыха, работы и коротких поездок по Северной Европе.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <SearchForm
          onApply={onForm}
          initialValues={{ destination, dates, guests }}
          submitLabel="Применить поиск"
        />

        <div className="section-shell flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--surface)] p-4">
          <p className="text-sm text-[var(--text-muted)]">
            Найдено вариантов: <span className="font-semibold text-[var(--text)]">{results.length}</span>
          </p>
          <SearchSort value={sort} onChange={(v) => setSort(v as SearchFilters["sort"])} />
        </div>

        {activeFilters.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="text-xs">
                {filter}
              </Badge>
            ))}
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full border border-[var(--outline)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--primary)] transition hover:bg-[var(--surface)]"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : null}

        <MobileFilters open={mobileOpen} onOpenChange={setMobileOpen}>
          {filters}
        </MobileFilters>
        <div className="hidden md:block">{filters}</div>

        <SearchResults stays={results} onReset={resetFilters} />
      </div>
    </section>
  );
}
