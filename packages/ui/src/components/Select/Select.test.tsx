import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./Select";

const renderSelect = (props = {}) => {
  return render(
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="checking">Checking</SelectItem>
        <SelectItem value="savings">Savings</SelectItem>
        <SelectItem value="credit">Credit Card</SelectItem>
      </SelectContent>
    </Select>,
  );
};

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    renderSelect();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("renders as disabled", () => {
    renderSelect({ disabled: true });
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("renders with default value", () => {
    renderSelect({ defaultValue: "credit" });
    expect(screen.getByRole("combobox")).toHaveTextContent("Credit Card");
  });

  it("has correct aria attributes", () => {
    renderSelect();
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("applies custom className to trigger", () => {
    render(
      <Select>
        <SelectTrigger className="custom-class">
          <SelectValue placeholder="Test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">One</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByRole("combobox").className).toContain("custom-class");
  });
});
