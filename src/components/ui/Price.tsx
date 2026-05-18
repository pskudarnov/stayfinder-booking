import { formatPrice } from "@/lib/format";

export function Price({ value }: { value: number }) {
  return <span className="font-semibold text-slate-900">{formatPrice(value)}</span>;
}
