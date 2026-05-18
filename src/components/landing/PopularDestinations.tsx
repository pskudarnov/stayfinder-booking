import { destinations } from "@/data/destinations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tones = [
  "from-[#253f3a] to-[#537266]",
  "from-[#2f4a45] to-[#6e8d7f]",
  "from-[#36564f] to-[#809a8f]",
  "from-[#273b39] to-[#5a756d]",
];

export function PopularDestinations() {
  return (
    <section className="py-12">
      <SectionHeading title="Популярные направления" subtitle="Выбирайте города с лучшей инфраструктурой и проверенными хозяевами." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d, idx) => (
          <article key={d} className={`group relative overflow-hidden rounded-2xl border border-[var(--outline)] bg-gradient-to-br ${tones[idx % tones.length]} p-5 text-white shadow-[0_12px_28px_rgba(15,28,27,0.14)]`}>
            <p className="text-xs uppercase tracking-[0.08em] text-white/75">Направление</p>
            <p className="mt-2 text-2xl font-semibold">{d}</p>
            <p className="mt-5 text-sm text-white/80">Отобранные апартаменты и дома</p>
            <span className="mt-6 inline-flex text-sm font-medium text-white/90 transition group-hover:translate-x-1">
              Смотреть варианты →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
