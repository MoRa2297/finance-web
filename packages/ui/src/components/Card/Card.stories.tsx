import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Padding of the card",
    },
  },
  args: {
    padding: "sm",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-sm text-gray-400">Total Balance</p>
        <p className="mt-1 text-2xl font-bold text-white">100</p>
      </CardContent>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    padding: "sm",
  },
};

export const Medium: Story = {
  args: {
    padding: "md",
  },
};

export const Large: Story = {
  args: {
    padding: "lg",
  },
};
