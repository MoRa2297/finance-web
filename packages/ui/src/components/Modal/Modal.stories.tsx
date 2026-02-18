import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalClose,
} from "./Modal";

const meta: Meta = {
  title: "Components/Modal",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of what this modal does.
          </ModalDescription>
        </ModalHeader>
        <p className="text-gray-300">Modal body content goes here.</p>
      </ModalContent>
    </Modal>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Add Account</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Create New Account</ModalTitle>
          <ModalDescription>
            Add a new bank account to track your finances.
          </ModalDescription>
        </ModalHeader>
        <div className="flex flex-col gap-4">
          <Input label="Account Name" placeholder="e.g. Main Checking" />
          <Input label="Initial Balance" type="number" placeholder="0.00" />
          <div className="mt-2 flex justify-end gap-3">
            <ModalClose asChild>
              <Button variant="ghost">Cancel</Button>
            </ModalClose>
            <Button>Create Account</Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="danger">Delete Account</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Are you sure?</ModalTitle>
          <ModalDescription>
            This action cannot be undone. This will permanently delete your
            account and all associated transactions.
          </ModalDescription>
        </ModalHeader>
        <div className="mt-4 flex justify-end gap-3">
          <ModalClose asChild>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <Button variant="danger">Delete</Button>
        </div>
      </ModalContent>
    </Modal>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="outline">Terms & Conditions</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Terms of Service</ModalTitle>
        </ModalHeader>
        <div className="max-h-64 overflow-y-auto text-sm text-gray-300">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <ModalClose asChild>
            <Button>I Agree</Button>
          </ModalClose>
        </div>
      </ModalContent>
    </Modal>
  ),
};
