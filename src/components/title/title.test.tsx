import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Title, h1Style } from "./title";
import "@testing-library/jest-dom";

describe("Title", () => {
  it("Title in hide condition", () => {
    render(<Title />);

    expect(screen.getByText("Click on me")).toBeInTheDocument();
    expect(screen.getByText("Click on me")).toHaveStyle(h1Style);
  });
  it("Title after click on h1 element", () => {
    render(<Title />);

    fireEvent.click(screen.getByText("Click on me"));
    expect(screen.queryAllByText(/Hidden content/).length).toBe(3);
  });
  it("Title change color after mouseleave action", () => {
    render(<Title />);

    fireEvent.mouseLeave(screen.getByText("Click on me"));
    expect(screen.getByText("Click on me")).toHaveStyle({
      backgroundColor: `red`,
    });
  });
});
