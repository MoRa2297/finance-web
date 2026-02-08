import { describe, it, expect } from "vitest";
import {
  isValidEmail,
  isNotEmpty,
  isPositiveNumber,
  isWithinRange,
} from "./validation";

describe("isValidEmail", () => {
  it("accepts valid emails", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
  });
});

describe("isNotEmpty", () => {
  it("returns true for non-empty strings", () => {
    expect(isNotEmpty("hello")).toBe(true);
  });

  it("returns false for empty or whitespace strings", () => {
    expect(isNotEmpty("")).toBe(false);
    expect(isNotEmpty("   ")).toBe(false);
  });
});

describe("isPositiveNumber", () => {
  it("returns true for positive numbers", () => {
    expect(isPositiveNumber(1)).toBe(true);
    expect(isPositiveNumber(0.01)).toBe(true);
  });

  it("returns false for zero, negative, or non-finite", () => {
    expect(isPositiveNumber(0)).toBe(false);
    expect(isPositiveNumber(-1)).toBe(false);
    expect(isPositiveNumber(Infinity)).toBe(false);
  });
});

describe("isWithinRange", () => {
  it("returns true when value is in range", () => {
    expect(isWithinRange(5, 1, 10)).toBe(true);
    expect(isWithinRange(1, 1, 10)).toBe(true);
    expect(isWithinRange(10, 1, 10)).toBe(true);
  });

  it("returns false when value is out of range", () => {
    expect(isWithinRange(0, 1, 10)).toBe(false);
    expect(isWithinRange(11, 1, 10)).toBe(false);
  });
});
