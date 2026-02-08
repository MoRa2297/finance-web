"use client";

import { forwardRef } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { VariantProps } from "class-variance-authority";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border-gray-700 bg-gray-900 text-white",
        success: "border-green-800 bg-green-950 text-green-300",
        error: "border-red-800 bg-red-950 text-red-300",
        warning: "border-yellow-800 bg-yellow-950 text-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ViewportProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Viewport
>;
type CloseProps = React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>;
type TitleProps = React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>;
type DescriptionProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitive.Description
>;

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = forwardRef<HTMLOListElement, ViewportProps>(
  ({ className, ...rest }, ref) => (
    <ToastPrimitive.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-[420px]",
        className,
      )}
      {...rest}
    />
  ),
);

ToastViewport.displayName = "ToastViewport";

export interface ToastProps
  extends
    React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

export const Toast = forwardRef<HTMLLIElement, ToastProps>(
  ({ className, variant, ...rest }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...rest}
    />
  ),
);

Toast.displayName = "Toast";

export const ToastClose = forwardRef<HTMLButtonElement, CloseProps>(
  ({ className, ...rest }, ref) => (
    <ToastPrimitive.Close
      ref={ref}
      className={cn(
        "text-gray-400 transition-colors hover:text-white",
        className,
      )}
      {...rest}
    >
      <X className="h-4 w-4" />
    </ToastPrimitive.Close>
  ),
);

ToastClose.displayName = "ToastClose";

export const ToastTitle = forwardRef<HTMLDivElement, TitleProps>(
  ({ className, ...rest }, ref) => (
    <ToastPrimitive.Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...rest}
    />
  ),
);

ToastTitle.displayName = "ToastTitle";

export const ToastDescription = forwardRef<HTMLDivElement, DescriptionProps>(
  ({ className, ...rest }, ref) => (
    <ToastPrimitive.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...rest}
    />
  ),
);

ToastDescription.displayName = "ToastDescription";
