import { render } from "@testing-library/react-native";
import React from "react";
import { DotTag, dotTagColors } from ".";

describe("RawTag", () => {
  it("Snapshot", () => {
    dotTagColors.map((color) => {
      const { toJSON } = render(
        <DotTag key={color} text="Label" color={color} />,
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
