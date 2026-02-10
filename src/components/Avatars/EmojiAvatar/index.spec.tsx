import { render } from "@testing-library/react-native";
import React from "react";
import { EmojiAvatar } from "./";

describe("EmojiAvatar", () => {
  it("Snapshot - different sizes text emoji and diferent size", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const { toJSON } = render(<EmojiAvatar emoji="test" size={size} />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
