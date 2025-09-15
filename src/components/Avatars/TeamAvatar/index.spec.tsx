import { render } from "@testing-library/react-native";
import React from "react";
import { TeamAvatar } from "./";

describe("TeamAvatar", () => {
  it("Snapshot", () => {
    const { toJSON } = render(<TeamAvatar name="F0" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
