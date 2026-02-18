import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./Toast";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

const ToastDemo = ({
  variant,
  title,
  description,
}: {
  variant?: "default" | "success" | "error" | "warning";
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(false);
          setTimeout(() => setOpen(true), 100);
        }}
      >
        Show Toast
      </Button>
      <Toast variant={variant} open={open} onOpenChange={setOpen}>
        <div className="flex-1">
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default: Story = {
  render: () => (
    <ToastDemo
      title="Notification"
      description="Something happened in your app."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Account Created"
      description="Your new savings account has been created successfully."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Transaction Failed"
      description="Unable to process your transaction. Please try again."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Low Balance"
      description="Your checking account balance is below €100."
    />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const Wrapper = () => {
      const [toasts, setToasts] = useState<
        {
          id: number;
          variant: "default" | "success" | "error" | "warning";
          title: string;
          description: string;
        }[]
      >([]);

      const addToast = (
        variant: "default" | "success" | "error" | "warning",
        title: string,
        description: string,
      ) => {
        setToasts((prev) => [
          ...prev,
          { id: Date.now(), variant, title, description },
        ]);
      };

      return (
        <ToastProvider>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={() =>
                addToast("default", "Info", "This is an info notification")
              }
            >
              Default
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                addToast("success", "Success", "Operation completed")
              }
            >
              Success
            </Button>
            <Button
              variant="danger"
              onClick={() => addToast("error", "Error", "Something went wrong")}
            >
              Error
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                addToast("warning", "Warning", "Please check your input")
              }
            >
              Warning
            </Button>
          </div>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              variant={t.variant}
              onOpenChange={(open) => {
                if (!open)
                  setToasts((prev) => prev.filter((x) => x.id !== t.id));
              }}
            >
              <div className="flex-1">
                <ToastTitle>{t.title}</ToastTitle>
                <ToastDescription>{t.description}</ToastDescription>
              </div>
              <ToastClose />
            </Toast>
          ))}
          <ToastViewport />
        </ToastProvider>
      );
    };
    return <Wrapper />;
  },
};
