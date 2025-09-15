import { render, screen } from "@testing-library/react-native";
import React from "react";
import { Counter } from ".";

describe("Counter", () => {
  const defaultProps = {
    value: 42,
    types: "default",
  };

  it("Snapshot", () => {
    const { toJSON } = render(<Counter {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan defauly types", () => {
    const { toJSON } = render(<Counter {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan defauly types", () => {
    const { toJSON } = render(<Counter {...defaultProps} type="default" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan bold types", () => {
    const { toJSON } = render(<Counter {...defaultProps} type="bold" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan selected types", () => {
    const { toJSON } = render(<Counter {...defaultProps} type="selected" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan md size", () => {
    const { toJSON } = render(<Counter {...defaultProps} size="md" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot vairan sm size", () => {
    const { toJSON } = render(<Counter {...defaultProps} size="sm" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<Counter {...defaultProps} />);

    const number = screen.getByText("42");

    expect(number).toBeDefined();
  });
});
