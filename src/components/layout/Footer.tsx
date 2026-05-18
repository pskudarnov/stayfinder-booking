import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-[var(--outline)] bg-[var(--surface-soft)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-[var(--text-muted)] md:grid-cols-4">
        <div>
          <p className="font-[Playfair_Display] text-2xl font-semibold text-[var(--primary)]">StayFinder</p>
          <p className="mt-2">Подбор жилья для отдыха, командировок и коротких вдохновляющих поездок.</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-[var(--text)]">Каталог</p>
          <Link href="/search" className="block hover:text-[var(--primary)]">Найти жильё</Link>
          <Link href="/" className="block hover:text-[var(--primary)]">Популярные направления</Link>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-[var(--text)]">О сервисе</p>
          <p>О проекте</p>
          <p>Поддержка</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-[var(--text)]">Условия</p>
          <p>Правила бронирования</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}
