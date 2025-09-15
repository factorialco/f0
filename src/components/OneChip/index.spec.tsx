import { render, screen, userEvent } from "@testing-library/react-native";
import React from "react";
import { OneChip } from ".";
import { AppIcons } from "../../icons";

describe("OneChip", () => {
  const defaultProps = {
    label: "label",
  };

  it("Snapshot", () => {
    const { toJSON } = render(<OneChip {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot variant selected", () => {
    const { toJSON } = render(<OneChip {...defaultProps} variant="selected" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot with Icon", () => {
    const { toJSON } = render(
      <OneChip {...defaultProps} icon={AppIcons.Placeholder} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot with OnClose", () => {
    const handleOnClose = jest.fn();
    const { toJSON } = render(
      <OneChip {...defaultProps} onClose={handleOnClose} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<OneChip {...defaultProps} />);

    const number = screen.getByText("label");

    expect(number).toBeDefined();
  });

  it("renders correctly with onClose event", async () => {
    const testFn = jest.fn();
    const user = userEvent.setup();

    render(<OneChip {...defaultProps} onClose={testFn} />);

    const close = screen.getByLabelText("Close");
    await user.press(close);

    expect(testFn).toHaveBeenCalledTimes(1);
    expect(close).toBeDefined();
  });

  it("renders correctly with onClick event", async () => {
    const testFn = jest.fn();
    const user = userEvent.setup();

    render(<OneChip {...defaultProps} onClick={testFn} />);

    const action = screen.getByLabelText("Action");
    await user.press(action);

    expect(testFn).toHaveBeenCalledTimes(1);
    expect(action).toBeDefined();
  });
});
