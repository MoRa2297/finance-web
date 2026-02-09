"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  Avatar,
  AvatarFallback,
} from "@finance/ui";
import { LayoutDashboard, Wallet, ArrowLeftRight, LogOut } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/accounts", label: "Accounts", icon: Wallet },
  { href: "/transactions", label: "Transactions", icon: ArrowLeftRight },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            F
          </div>
          <span className="text-lg font-semibold text-white">Finance</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <SidebarItem
                icon={<item.icon className="h-5 w-5" />}
                label={item.label}
                active={pathname === item.href}
              />
            </Link>
          ))}
        </nav>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <Avatar>
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Manuel</p>
            <p className="text-xs text-gray-400">manuel@email.com</p>
          </div>
          <button className="text-gray-400 transition-colors hover:text-white">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
