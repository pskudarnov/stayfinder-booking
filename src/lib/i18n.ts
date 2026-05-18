const amenityLabels: Record<string, string> = {
  "Wi-Fi": "Wi‑Fi",
  Workspace: "Рабочее место",
  Kitchen: "Кухня",
  Parking: "Парковка",
  "Pet friendly": "Можно с питомцами",
};

export function localizeAmenity(value: string) {
  return amenityLabels[value] ?? value;
}
