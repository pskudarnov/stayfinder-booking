import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white hover:bg-[var(--primary-strong)]",
        secondary: "bg-[var(--surface-soft)] text-[var(--text)] hover:bg-[var(--surface)]",
        outline: "border border-[var(--outline)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-soft)]",
        ghost: "text-[var(--text)] hover:bg-[var(--surface-soft)]",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "min-h-9 rounded-lg px-3 py-1.5 text-xs",
        lg: "min-h-12 px-6 py-3 text-base",
        icon: "h-10 w-10 min-h-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type LegacyVariant = "primary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  legacyVariant?: LegacyVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, legacyVariant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolvedVariant = legacyVariant === "primary" ? "default" : legacyVariant === "ghost" ? "ghost" : variant;

    return <Comp className={cn(buttonVariants({ variant: resolvedVariant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { buttonVariants };
