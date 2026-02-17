import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>MR</AvatarFallback>
    </Avatar>
  ),
};
