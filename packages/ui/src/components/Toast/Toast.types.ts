import type { ComponentPropsWithoutRef } from "react";
import type * as ToastPrimitive from "@radix-ui/react-toast";
import type { VariantProps } from "class-variance-authority";
import type { toastVariants } from "./Toast.variants";

export type ViewportProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Viewport
>;
export type CloseProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Close>;
export type TitleProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Title>;
export type DescriptionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitive.Description
>;

export interface ToastProps
  extends
    ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}
