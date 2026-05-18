import { SearchPageClient } from "@/components/search/SearchPageClient";

type SearchPageProps = {
  searchParams: Promise<{
    destination?: string;
    dates?: string;
    guests?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const initialDestination = params.destination?.trim() ?? "";
  const initialDates = params.dates?.trim() ?? "";
  const parsedGuests = Number(params.guests);
  const initialGuests = Number.isFinite(parsedGuests) && parsedGuests > 0 ? parsedGuests : 2;

  return (
    <SearchPageClient
      initialDestination={initialDestination}
      initialDates={initialDates}
      initialGuests={initialGuests}
    />
  );
}
