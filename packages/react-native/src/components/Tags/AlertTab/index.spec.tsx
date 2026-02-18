import { render } from "@testing-library/react-native";
import React from "react";
import { AlertTag } from ".";

describe("AlertTag", () => {
  it("Snapshot Ingo level", () => {
    const { toJSON } = render(<AlertTag text="info" level="info" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("Snapshot Critical level", () => {
    const { toJSON } = render(<AlertTag text="critical" level="critical" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("Snapshot Warning level", () => {
    const { toJSON } = render(<AlertTag text="warning" level="warning" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
