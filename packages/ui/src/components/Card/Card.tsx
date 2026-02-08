import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import type {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
} from "./Card.types";

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding = "md", className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-gray-800 bg-gray-900",
          paddingStyles[padding],
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...rest} />
  ),
);

CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn("", className)} {...rest} />
  ),
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("mt-4 flex items-center gap-2", className)}
      {...rest}
    />
  ),
);

CardFooter.displayName = "CardFooter";
