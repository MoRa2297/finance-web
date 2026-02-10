import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar, AvatarFallback } from "./Avatar";

describe("Avatar", () => {
  it("renders fallback text", () => {
    render(
      <Avatar>
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("MR")).toBeInTheDocument();
  });

  it("applies default size classes", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatar = screen.getByTestId("avatar");
    expect(avatar.className).toContain("h-10");
    expect(avatar.className).toContain("w-10");
  });

  it("applies rounded-full for circular shape", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar").className).toContain("rounded-full");
  });

  it("merges custom className on Avatar", () => {
    render(
      <Avatar data-testid="avatar" className="h-16 w-16">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar").className).toContain("h-16");
  });

  it("merges custom className on AvatarFallback", () => {
    render(
      <Avatar>
        <AvatarFallback className="bg-blue-600" data-testid="fallback">
          AB
        </AvatarFallback>
      </Avatar>,
    );
    // tailwind-merge risolve il conflitto: bg-blue-600 sovrascrive bg-gray-700
    expect(screen.getByTestId("fallback").className).toContain("bg-blue-600");
  });

  it("shows fallback when no image is provided", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders with single character fallback", () => {
    render(
      <Avatar>
        <AvatarFallback>M</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("M")).toBeInTheDocument();
  });
});
