import { render } from "@testing-library/react-native";
import React from "react";
import { PersonAvatar } from "./";

describe("PersonAvatar", () => {
  it("Snapshot", () => {
    const { toJSON } = render(
      <PersonAvatar firstName="Daniel" lastName="Maza" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
