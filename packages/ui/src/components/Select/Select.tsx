"use client";

import { forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";

type TriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;
type ContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;
type ItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ className, children, ...rest }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white",
        "placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);

SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, position = "popper", ...rest }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-xl",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...rest}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);

SelectContent.displayName = "SelectContent";

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ className, children, ...rest }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm text-gray-300 outline-none",
        "hover:bg-gray-800 hover:text-white",
        "focus:bg-gray-800 focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
);

SelectItem.displayName = "SelectItem";
