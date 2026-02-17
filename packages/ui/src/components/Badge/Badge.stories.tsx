import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger", "neutral"],
      description: "Visual style of the Badge",
    },
  },
  args: {
    children: "Button",
    variant: "default",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Neutral",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Duccess</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};
