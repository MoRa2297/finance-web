import type { HTMLAttributes } from "react";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
}
