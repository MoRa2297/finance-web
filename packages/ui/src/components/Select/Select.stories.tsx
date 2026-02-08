import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./Select";

const meta: Meta = {
  title: "Components/Select",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select account type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="checking">Checking</SelectItem>
          <SelectItem value="savings">Savings</SelectItem>
          <SelectItem value="credit">Credit Card</SelectItem>
          <SelectItem value="investment">Investment</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-64">
      <Select defaultValue="savings">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="checking">Checking</SelectItem>
          <SelectItem value="savings">Savings</SelectItem>
          <SelectItem value="credit">Credit Card</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eur">EUR - Euro</SelectItem>
          <SelectItem value="usd">USD - US Dollar</SelectItem>
          <SelectItem value="gbp">GBP - British Pound</SelectItem>
          <SelectItem value="btc" disabled>
            BTC - Bitcoin (coming soon)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const MultipleSelects: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Account type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="checking">Checking</SelectItem>
          <SelectItem value="savings">Savings</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="gbp">GBP</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
