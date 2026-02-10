import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
} from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "Collapse the sidebar to icon-only mode",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const ArrowsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="m16 3 4 4-4 4" />
    <path d="M20 7H4" />
    <path d="m8 21-4-4 4-4" />
    <path d="M4 17h16" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Default: Story = {
  render: () => (
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
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<DashboardIcon />} label="Dashboard" active />
          <SidebarItem icon={<WalletIcon />} label="Accounts" />
          <SidebarItem icon={<ArrowsIcon />} label="Transactions" />
          <SidebarItem icon={<SettingsIcon />} label="Settings" />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-sm text-gray-300">
            MR
          </div>
          <div>
            <p className="text-sm font-medium text-white">Manuel</p>
            <p className="text-xs text-gray-400">manuel@email.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Sidebar collapsed>
      <SidebarHeader>
        <div className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            F
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<DashboardIcon />} label="" active />
          <SidebarItem icon={<WalletIcon />} label="" />
          <SidebarItem icon={<ArrowsIcon />} label="" />
          <SidebarItem icon={<SettingsIcon />} label="" />
        </div>
      </SidebarContent>
    </Sidebar>
  ),
};

export const WithActiveItem: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>
        <span className="text-lg font-semibold text-white">Finance</span>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-1">
          <SidebarItem icon={<DashboardIcon />} label="Dashboard" />
          <SidebarItem icon={<WalletIcon />} label="Accounts" active />
          <SidebarItem icon={<ArrowsIcon />} label="Transactions" />
        </div>
      </SidebarContent>
    </Sidebar>
  ),
};

export const ItemsOnly: Story = {
  render: () => (
    <div className="w-64 bg-gray-950 p-3">
      <div className="flex flex-col gap-1">
        <SidebarItem icon={<DashboardIcon />} label="Dashboard" active />
        <SidebarItem icon={<WalletIcon />} label="Accounts" />
        <SidebarItem icon={<ArrowsIcon />} label="Transactions" />
        <SidebarItem icon={<SettingsIcon />} label="Settings" />
      </div>
    </div>
  ),
};

export const WithoutIcons: Story = {
  render: () => (
    <div className="w-64 bg-gray-950 p-3">
      <div className="flex flex-col gap-1">
        <SidebarItem label="Dashboard" active />
        <SidebarItem label="Accounts" />
        <SidebarItem label="Transactions" />
        <SidebarItem label="Settings" />
      </div>
    </div>
  ),
};
