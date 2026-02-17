import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Default",
    error: "",
  },
  render: (args) => <Input {...args} />,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelVisible: Story = {
  args: {
    label: "Label",
  },
};

export const ErrorVisible: Story = {
  args: {
    label: "Label",
    error: "Error",
  },
};
