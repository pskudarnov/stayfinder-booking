"use client";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchSort({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
      <Label className="normal-case tracking-normal text-sm font-medium text-[var(--text-muted)]">Сортировка</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger aria-label="Сортировка" className="w-[190px]">
          <SelectValue placeholder="Сортировка" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recommended">Рекомендуем</SelectItem>
          <SelectItem value="price-asc">Сначала дешевле</SelectItem>
          <SelectItem value="price-desc">Сначала дороже</SelectItem>
          <SelectItem value="rating">По рейтингу</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
