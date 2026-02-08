"use client";

import { forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;
type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, ...rest }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...rest}
    />
  ),
);

Avatar.displayName = "Avatar";

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...rest }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...rest}
    />
  ),
);

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...rest }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-gray-700 text-sm font-medium text-gray-300",
        className,
      )}
      {...rest}
    />
  ),
);

AvatarFallback.displayName = "AvatarFallback";
