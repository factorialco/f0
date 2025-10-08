import { render, fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { Button } from "./";
import { IconType } from "../Icon";

// Mock the Icon component
jest.mock("../Icon", () => ({
  Icon: () => null,
}));

// Mock dependencies
const mockIcon: IconType = "check" as unknown as IconType;
const mockOnPress = jest.fn();

describe("Button", () => {
  const defaultProps = {
    label: "Test Button",
    onPress: mockOnPress,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Snapshot - default button", () => {
    const { toJSON } = render(<Button {...defaultProps} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - outline variant", () => {
    const { toJSON } = render(<Button {...defaultProps} variant="outline" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - critical variant", () => {
    const { toJSON } = render(<Button {...defaultProps} variant="critical" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - with icon", () => {
    const { toJSON } = render(<Button {...defaultProps} icon={mockIcon} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - with emoji", () => {
    const { toJSON } = render(<Button {...defaultProps} emoji="👋" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - disabled state", () => {
    const { toJSON } = render(<Button {...defaultProps} disabled />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - loading state", () => {
    const { toJSON } = render(<Button {...defaultProps} loading />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const { toJSON } = render(<Button {...defaultProps} size={size} />);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it("Snapshot - round button with hidden label", () => {
    const { toJSON } = render(<Button {...defaultProps} round hideLabel />);

    expect(toJSON()).toMatchSnapshot();
  });

  // Regular component tests
  it("renders correctly with required props", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByText("Test Button");

    expect(button).toBeDefined();
  });

  it("handles press events", () => {
    render(<Button {...defaultProps} />);

    fireEvent.press(screen.getByRole("button"));

    expect(mockOnPress).toHaveBeenCalled();
  });

  it("does not call onPress when disabled", () => {
    render(<Button {...defaultProps} disabled />);

    fireEvent.press(screen.getByRole("button"));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("shows correct accessibility label when disabled", () => {
    render(<Button {...defaultProps} disabled />);

    const button = screen.getByRole("button");

    expect(button.props.accessibilityLabel).toBe("Test Button, disabled");
  });

  it("shows correct accessibility label when loading", () => {
    render(<Button {...defaultProps} loading />);

    const button = screen.getByRole("button");

    expect(button.props.accessibilityLabel).toBe(
      "Test Button, disabled, loading",
    );
  });
});
