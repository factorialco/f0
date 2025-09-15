import { render } from "@testing-library/react-native";
import React from "react";
import { IconAvatar } from "./";
import { Placeholder } from "../../../icons/app";

describe("IconAvatar", () => {
  it("Snapshot - different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const { toJSON } = render(<IconAvatar icon={Placeholder} size={size} />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
