import { render } from "@testing-library/react-native";
import React from "react";
import { CompanyAvatar } from "./";

describe("CompanyAvatar", () => {
  it("Snapshot", () => {
    const { toJSON } = render(<CompanyAvatar name="Factorial" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
