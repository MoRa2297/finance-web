import type { ComponentPropsWithoutRef } from "react";
import type * as SelectPrimitive from "@radix-ui/react-select";

export type SelectTriggerProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;
export type SelectContentProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;
export type SelectItemProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;
