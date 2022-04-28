import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HSelector } from "./MainHSelector";
import "@testing-library/jest-dom";

describe("HSelector", () => {
  it("HSelector in start condition", () => {
    render(<HSelector value={"h1"} />);
    expect(screen.getByText('Выберите тег "h"')).toBeInTheDocument();
    expect(screen.getByText("h1")).toBeInTheDocument();
    expect(screen.getByText("Some text in h1 element")).toBeInTheDocument();
  });
  it("HSelector after click on h2 element", () => {
    render(<HSelector value={"h1"} />);
    userEvent.selectOptions(screen.getByTestId("h-select"), "h2");
    expect((screen.getByText("h2") as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText("Some text in h2 element")).toBeInTheDocument();
  });
  it("HSelector after click on h3 element", () => {
    render(<HSelector value={"h1"} />);
    userEvent.selectOptions(screen.getByTestId("h-select"), "h3");
    expect((screen.getByText("h3") as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText("Some text in h3 element")).toBeInTheDocument();
  });
  it("HSelector after click on h4 element", () => {
    render(<HSelector value={"h1"} />);
    userEvent.selectOptions(screen.getByTestId("h-select"), "h4");
    expect((screen.getByText("h4") as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText("Some text in h4 element")).toBeInTheDocument();
  });
  it("HSelector after click on h5 element", () => {
    render(<HSelector value={"h1"} />);
    userEvent.selectOptions(screen.getByTestId("h-select"), "h5");
    expect((screen.getByText("h5") as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText("Some text in h5 element")).toBeInTheDocument();
  });
  it("HSelector after click on h6 element", () => {
    render(<HSelector value={"h1"} />);
    userEvent.selectOptions(screen.getByTestId("h-select"), "h6");
    expect((screen.getByText("h6") as HTMLOptionElement).selected).toBeTruthy();
    expect(screen.getByText("Some text in h6 element")).toBeInTheDocument();
  });
});
