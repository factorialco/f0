import { render } from "@testing-library/react-native";
import React from "react";
import { DateAvatar } from "./";

describe("DateAvatar", () => {
  it("Snapshot", () => {
    const fixedDate = new Date("2025-01-01T00:00:00Z");
    const { toJSON } = render(<DateAvatar date={fixedDate} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
