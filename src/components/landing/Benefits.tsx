import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  "Поиск и фильтры без перегруза — быстро находите подходящее жильё.",
  "Карточки с четкой иерархией: локация, рейтинг, цена и ключевые удобства.",
  "Адаптивная верстка для desktop/tablet/mobile без горизонтального скролла.",
  "Детальная страница объекта с удобной панелью бронирования и похожими вариантами.",
];

export function Benefits() {
  return (
    <section className="py-10">
      <SectionHeading title="Почему StayFinder" />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <Card key={i}>
            <p className="leading-relaxed text-[var(--text-muted)]">{i}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
