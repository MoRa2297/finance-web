"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

type OverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;
type ContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;
type TitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
type DescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;

export const ModalOverlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, ...rest }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className,
      )}
      {...rest}
    />
  ),
);

ModalOverlay.displayName = "ModalOverlay";

export const ModalContent = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...rest }, ref) => (
    <DialogPrimitive.Portal>
      <ModalOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
          "rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-xl",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className,
        )}
        {...rest}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm text-gray-400 transition-colors hover:text-white">
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);

ModalContent.displayName = "ModalContent";

export const ModalHeader = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...rest} />
);

export const ModalTitle = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...rest }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold text-white", className)}
      {...rest}
    />
  ),
);

ModalTitle.displayName = "ModalTitle";

export const ModalDescription = forwardRef<
  HTMLParagraphElement,
  DescriptionProps
>(({ className, ...rest }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...rest}
  />
));

ModalDescription.displayName = "ModalDescription";
