"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: "sm" | "md" | "lg" | string;
  variant?: "solid" | "outline" | string;
  className?: string;
};

export function Button({
  children,
  className,
  asChild = false,
  size = "md",
  variant = "solid",
  ...props
}: ButtonProps) {
  // ✅ Explicit type: React.ElementType (any valid component or tag)
  const Comp: React.ElementType = asChild ? Slot : "button";

  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses: Record<string, string> = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border border-current text-current hover:bg-white/5",
  };

  const appliedSize = sizeClasses[size] ?? String(size);
  const appliedVariant = variantClasses[variant] ?? String(variant);

  const base =
    "inline-flex items-center justify-center rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    // ✅ Correct type for props: React.ComponentPropsWithoutRef<typeof Comp>
    <Comp
      className={cn(base, appliedSize, appliedVariant, className)}
      {...(props as React.ComponentPropsWithoutRef<typeof Comp>)}
    >
      {children}
    </Comp>
  );
}

export default Button;
