import { render } from "@testing-library/react-native";
import React from "react";
import { ExampleComponent } from "../ExampleComponent";

describe("ExampleComponent", () => {
  it("renders correctly with default text", () => {
    const { getByText } = render(<ExampleComponent />);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders correctly with custom text", () => {
    const customText = "Custom Hello Text";
    const { getByText } = render(<ExampleComponent text={customText} />);
    expect(getByText(customText)).toBeTruthy();
  });
});
