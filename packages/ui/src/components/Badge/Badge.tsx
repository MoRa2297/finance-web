import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { badgeVariants } from "./Badge.variants";
import type { BadgeProps } from "./Badge.types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...rest}
    />
  ),
);

Badge.displayName = "Badge";
