import { localizeAmenity } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/Button";

type Props = {
  destination: string;
  type: string;
  amenities: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  setDestination: (v: string) => void;
  setType: (v: string) => void;
  toggleAmenity: (v: string) => void;
  setMinPrice: (v: number) => void;
  setMaxPrice: (v: number) => void;
  setMinRating: (v: number) => void;
  onReset: () => void;
};

const amenitiesList = ["Wi-Fi", "Workspace", "Kitchen", "Parking", "Pet friendly"];

export function SearchFilters(p: Props) {
  return (
    <div className="section-shell grid gap-4 rounded-2xl bg-[var(--surface)] p-4 md:grid-cols-3">
      <div className="md:col-span-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--text)]">Фильтры</p>
        <Button variant="ghost" size="sm" onClick={p.onReset} className="rounded-full border border-[var(--outline)]">
          Очистить всё
        </Button>
      </div>

      <label className="text-sm">
        <Label className="mb-1 block">Направление</Label>
        <Input value={p.destination} onChange={(e) => p.setDestination(e.target.value)} />
      </label>

      <label className="text-sm">
        <Label className="mb-1 block">Тип жилья</Label>
        <Select value={p.type} onValueChange={p.setType}>
          <SelectTrigger aria-label="Тип жилья">
            <SelectValue placeholder="Выберите тип" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все</SelectItem>
            <SelectItem value="Apartment">Апартаменты</SelectItem>
            <SelectItem value="Hotel">Отель</SelectItem>
            <SelectItem value="House">Дом</SelectItem>
            <SelectItem value="Studio">Студия</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <label className="text-sm">
        <Label className="mb-1 block">Рейтинг</Label>
        <Select value={String(p.minRating)} onValueChange={(v) => p.setMinRating(Number(v))}>
          <SelectTrigger aria-label="Рейтинг">
            <SelectValue placeholder="Любой" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Любой</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="4.5">4.5+</SelectItem>
          </SelectContent>
        </Select>
      </label>

      <label className="text-sm">
        <Label className="mb-1 block">Цена от</Label>
        <Input type="number" min={0} max={30000} step={1000} value={p.minPrice} onChange={(e) => p.setMinPrice(Number(e.target.value))} />
      </label>

      <label className="text-sm">
        <Label className="mb-1 block">Цена до</Label>
        <Input type="number" min={0} max={30000} step={1000} value={p.maxPrice} onChange={(e) => p.setMaxPrice(Number(e.target.value))} />
      </label>

      <div className="md:col-span-3">
        <Separator className="mb-3" />
        <Label className="mb-2 block">Удобства</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {amenitiesList.map((a) => {
            const selected = p.amenities.includes(a);
            const id = `amenity-${a}`;
            return (
              <label
                key={a}
                htmlFor={id}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition ${
                  selected
                    ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "border-[var(--outline)] bg-[var(--surface-soft)]"
                }`}
              >
                <Checkbox id={id} checked={selected} onCheckedChange={() => p.toggleAmenity(a)} />
                {localizeAmenity(a)}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
