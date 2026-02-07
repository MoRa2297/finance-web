import { describe, it, expect } from "vitest";
import { formatCurrency } from "./currency";

describe("formatCurrency", () => {
  it("formats EUR by default", () => {
    const result = formatCurrency(1500.5);
    expect(result).toContain("1500,50");
  });

  it("formats USD with US locale", () => {
    const result = formatCurrency(1500.5, { locale: "en-US", currency: "USD" });
    expect(result).toContain("1,500.50");
  });

  it("handles zero", () => {
    const result = formatCurrency(0);
    expect(result).toContain("0,00");
  });

  it("handles negative amounts", () => {
    const result = formatCurrency(-250.99);
    expect(result).toContain("250,99");
  });
});
