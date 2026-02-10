import type React from "react";
import type { ComponentPropsWithoutRef } from "react";
import type * as AvatarPrimitive from "@radix-ui/react-avatar";

export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
export type AvatarImageProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;
export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;
