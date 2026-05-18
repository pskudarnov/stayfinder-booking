import type { Stay } from "@/data/stays";

export type SearchFilters = {
  destination: string;
  type: string;
  amenities: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  sort: "recommended" | "price-asc" | "price-desc" | "rating";
};

export function filterAndSortStays(stays: Stay[], f: SearchFilters) {
  let list = stays.filter(
    (s) =>
      s.destination.toLowerCase().includes(f.destination.toLowerCase()) ||
      s.city.toLowerCase().includes(f.destination.toLowerCase()),
  );

  if (f.type !== "all") list = list.filter((s) => s.type === f.type);
  if (f.amenities.length)
    list = list.filter((s) => f.amenities.every((a) => s.amenities.includes(a)));
  list = list.filter(
    (s) =>
      s.pricePerNight >= f.minPrice && s.pricePerNight <= f.maxPrice && s.rating >= f.minRating,
  );

  return [...list].sort((a, b) => {
    if (f.sort === "price-asc") return a.pricePerNight - b.pricePerNight;
    if (f.sort === "price-desc") return b.pricePerNight - a.pricePerNight;
    if (f.sort === "rating") return b.rating - a.rating;
    return Number(b.featured) - Number(a.featured);
  });
}
