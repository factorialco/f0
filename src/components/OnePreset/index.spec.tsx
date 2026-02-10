import { render, screen, userEvent } from "@testing-library/react-native";
import React from "react";
import { OnePreset } from ".";

describe("OnePreset", () => {
  const defaultProps = {
    label: "label",
  };

  it("Snapshot", () => {
    const { toJSON } = render(<OnePreset {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot with number", () => {
    const { toJSON } = render(<OnePreset {...defaultProps} number={42} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with selected props", () => {
    const { toJSON } = render(<OnePreset {...defaultProps} selected={true} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<OnePreset {...defaultProps} />);

    const number = screen.getByText("label");

    expect(number).toBeDefined();
  });

  it("renders correctly with onClick event", async () => {
    const testFn = jest.fn();
    const user = userEvent.setup();

    render(<OnePreset {...defaultProps} onClick={testFn} />);

    const number = screen.getByText("label");
    await user.press(number);

    expect(testFn).toHaveBeenCalledTimes(1);
    expect(number).toBeDefined();
  });
});
