import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-[color:color-mix(in_srgb,var(--primary)_20%,white)] bg-[var(--surface-soft)] text-[var(--primary)]",
        secondary: "border-[var(--outline)] bg-[var(--surface)] text-[var(--text-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  label?: string;
}

export function Badge({ className, variant, label, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {label ?? children}
    </div>
  );
}

export { badgeVariants };
