import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stays } from "@/data/stays";
import { StayDetails } from "@/components/stays/StayDetails";
import { BookingPanel } from "@/components/stays/BookingPanel";
import { RelatedStays } from "@/components/stays/RelatedStays";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) return { title: "Объект не найден" };
  return { title: `${stay.title} | StayFinder`, description: stay.description };
}

export default async function StayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) notFound();

  const related = stays.filter((s) => s.slug !== stay.slug && s.city === stay.city).slice(0, 3);

  return (
    <section className="py-10">
      <div className="mb-6">
        <Link href="/search" className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline">
          ← Назад к поиску
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <StayDetails stay={stay} />
        <BookingPanel pricePerNight={stay.pricePerNight} maxGuests={stay.maxGuests} />
      </div>

      <div className="mt-12">
        <h2 className="mb-5 text-3xl font-semibold">Похожие варианты</h2>
        <RelatedStays stays={related} />
      </div>
    </section>
  );
}
