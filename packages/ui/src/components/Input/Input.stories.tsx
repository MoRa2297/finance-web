import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text above the input",
    },
    error: {
      control: "text",
      description: "Error message below the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
      description: "Input type",
    },
  },
  args: {
    placeholder: "Enter text...",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    value: "invalid-email",
    error: "Please enter a valid email address",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "manuel_r",
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    label: "Amount",
    placeholder: "0.00",
    type: "number",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Input label="Default" placeholder="Enter text..." />
      <Input label="With value" value="Hello world" readOnly />
      <Input
        label="With error"
        value="bad input"
        error="This field is invalid"
      />
      <Input label="Disabled" value="Can't edit" disabled />
      <Input label="Password" type="password" placeholder="••••••••" />
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => {
    const Wrapper = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      return (
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      );
    };
    return <Wrapper />;
  },
};
