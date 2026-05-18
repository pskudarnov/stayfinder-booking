import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-14">
      <div className="section-shell rounded-3xl bg-[var(--surface)] p-8 text-center md:p-12">
        <h2 className="text-4xl font-semibold text-[var(--text)]">Готовы к следующей поездке?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-muted)]">
          Откройте каталог, настройте фильтры и выберите жильё с лучшим сочетанием цены, локации и
          удобств.
        </p>
        <div className="mt-7">
          <Link href="/search">
            <Button>Перейти к поиску</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
