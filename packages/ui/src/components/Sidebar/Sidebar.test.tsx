import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
} from "./Sidebar";

describe("Sidebar", () => {
  it("renders children", () => {
    render(
      <Sidebar>
        <div>Sidebar content</div>
      </Sidebar>,
    );
    expect(screen.getByText("Sidebar content")).toBeInTheDocument();
  });

  it("applies default width", () => {
    render(<Sidebar data-testid="sidebar">Content</Sidebar>);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar.className).toContain("w-64");
  });

  it("applies collapsed width", () => {
    render(
      <Sidebar collapsed data-testid="sidebar">
        Content
      </Sidebar>,
    );
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar.className).toContain("w-16");
  });

  it("merges custom className", () => {
    render(
      <Sidebar className="custom-class" data-testid="sidebar">
        Content
      </Sidebar>,
    );
    expect(screen.getByTestId("sidebar").className).toContain("custom-class");
  });
});

describe("SidebarHeader", () => {
  it("renders children", () => {
    render(<SidebarHeader>Logo</SidebarHeader>);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });
});

describe("SidebarContent", () => {
  it("renders children", () => {
    render(<SidebarContent>Nav items</SidebarContent>);
    expect(screen.getByText("Nav items")).toBeInTheDocument();
  });
});

describe("SidebarFooter", () => {
  it("renders children", () => {
    render(<SidebarFooter>Footer</SidebarFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});

describe("SidebarItem", () => {
  it("renders label", () => {
    render(<SidebarItem label="Dashboard" />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(
      <SidebarItem label="Home" icon={<span data-testid="icon">🏠</span>} />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies active styles", () => {
    render(<SidebarItem label="Active" active data-testid="item" />);
    const item = screen.getByTestId("item");
    expect(item.className).toContain("text-blue-400");
  });

  it("applies inactive styles by default", () => {
    render(<SidebarItem label="Inactive" data-testid="item" />);
    const item = screen.getByTestId("item");
    expect(item.className).toContain("text-gray-400");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<SidebarItem label="Clickable" onClick={handleClick} />);
    screen.getByText("Clickable").click();
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("merges custom className", () => {
    render(
      <SidebarItem label="Custom" className="my-class" data-testid="item" />,
    );
    expect(screen.getByTestId("item").className).toContain("my-class");
  });
});
