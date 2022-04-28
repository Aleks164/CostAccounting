import React from "react";
import { render } from "@testing-library/react";
import { Hr } from "./hr";

describe("hr", () => {
  it("hr is work", () => {
    render(<Hr />);
  });
});
