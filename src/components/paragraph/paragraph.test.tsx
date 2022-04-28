import React from "react";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./paragraph";
import "@testing-library/jest-dom";

describe("Paragraph", () => {
  it("Paragraph is working with text prop", () => {
    render(<Paragraph textP={"some text"} />);

    expect(screen.getAllByText("some text").length).toBe(3);
  });
});
