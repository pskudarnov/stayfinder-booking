import type { Stay } from "@/data/stays";
import { StayCard } from "@/components/search/StayCard";

export function SearchResults({ stays, onReset }: { stays: Stay[]; onReset?: () => void }) {
  if (!stays.length) {
    return (
      <div className="section-shell rounded-2xl border border-dashed border-[var(--outline)] bg-[var(--surface)] p-10 text-center">
        <p className="text-xl font-semibold text-[var(--text)]">Ничего не найдено</p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Измените даты, диапазон цены или рейтинг — так вы быстрее найдёте подходящий вариант.
        </p>
        {onReset ? (
          <button
            type="button"
            onClick={onReset}
            className="mt-4 rounded-lg border border-[var(--outline)] px-4 py-2 text-sm font-medium text-[var(--primary)] hover:bg-[var(--surface-soft)]"
          >
            Сбросить фильтры
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stays.map((s) => (
        <StayCard key={s.id} stay={s} />
      ))}
    </div>
  );
}
