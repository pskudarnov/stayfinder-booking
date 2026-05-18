"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, type SearchFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  onApply: (v: SearchFormValues) => void;
  initialValues?: SearchFormValues;
  submitLabel?: string;
};

export function SearchForm({ onApply, initialValues, submitLabel = "Применить поиск" }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: initialValues ?? { destination: "", dates: "", guests: 2 },
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onApply)}
      className="section-shell grid gap-3 rounded-2xl bg-[var(--surface)] p-3 md:grid-cols-[1.4fr_1fr_0.8fr_auto] md:items-end"
    >
      <label className="text-sm">
        <Label className="mb-1 block">Направление</Label>
        <Input aria-label="Направление" {...register("destination")} />
      </label>
      <label className="text-sm">
        <Label className="mb-1 block">Даты</Label>
        <Input aria-label="Даты" {...register("dates")} />
      </label>
      <label className="text-sm">
        <Label className="mb-1 block">Гости</Label>
        <Input type="number" aria-label="Гости" {...register("guests", { valueAsNumber: true })} />
      </label>
      <div className="md:pb-px">
        <Button type="submit" className="w-full">{submitLabel}</Button>
      </div>
      {errors.destination || errors.dates || errors.guests ? (
        <p className="text-sm text-red-700 md:col-span-4">Проверьте корректность введённых данных.</p>
      ) : null}
    </form>
  );
}
