import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth,
      isLoading,
      asChild,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
