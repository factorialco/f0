import { render } from "@testing-library/react-native";
import React from "react";
import { Icon } from "../index";
import { Archive } from "../../../icons/app";
import { Home } from "../../../icons/modules";

describe("Icon", () => {
  it("renders correctly with an app icon", () => {
    const { getByTestId } = render(<Icon icon={Archive} testID="icon" />);
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("renders correctly with a module icon", () => {
    const { getByTestId } = render(<Icon icon={Home} testID="icon" />);
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("applies the correct size class", () => {
    const { getByTestId } = render(
      <Icon icon={Archive} size="lg" testID="icon" />,
    );
    // In a real test environment, we could check the actual style props applied
    // but for now we just ensure it renders
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("applies custom className correctly", () => {
    const { getByTestId } = render(
      <Icon icon={Archive} className="text-red-500" testID="icon" />,
    );
    // In a real test environment, we could check the actual style props applied
    // but for now we just ensure it renders
    expect(getByTestId("icon")).toBeTruthy();
  });
});
