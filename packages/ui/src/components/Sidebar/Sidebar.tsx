import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import type { SidebarProps, SidebarItemProps } from "./Sidebar.types";

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed = false, className, children, ...rest }, ref) => (
    <aside
      ref={ref}
      className={cn(
        "flex h-screen flex-col border-r border-gray-800 bg-gray-950 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
      {...rest}
    >
      {children}
    </aside>
  ),
);

Sidebar.displayName = "Sidebar";

export const SidebarHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-16 items-center border-b border-gray-800 px-4",
      className,
    )}
    {...rest}
  />
));

SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto p-3", className)}
    {...rest}
  />
));

SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn("border-t border-gray-800 p-3", className)}
    {...rest}
  />
));

SidebarFooter.displayName = "SidebarFooter";

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ icon, label, active = false, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active
          ? "bg-blue-600/10 text-blue-400"
          : "text-gray-400 hover:bg-gray-800 hover:text-white",
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
      ) : null}
      <span>{label}</span>
    </div>
  ),
);

SidebarItem.displayName = "SidebarItem";
