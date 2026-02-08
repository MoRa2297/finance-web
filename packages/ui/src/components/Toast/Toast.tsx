"use client";

import { forwardRef } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { toastVariants } from "./Toast.variants";
import type {
  ViewportProps,
  DescriptionProps,
  CloseProps,
  TitleProps,
  ToastProps,
} from "./Toast.types";

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
