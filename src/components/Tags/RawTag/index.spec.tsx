import { render } from "@testing-library/react-native";
import React from "react";
import { RawTag } from ".";
import { AppIcons } from "../../../icons";

describe("RawTag", () => {
  it("Snapshot", () => {
    const { toJSON } = render(<RawTag text="test" />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("Snapshot with icon", () => {
    const { toJSON } = render(<RawTag text="test" icon={AppIcons.MoneyBag} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("Snapshot noBorder", () => {
    const { toJSON } = render(<RawTag text="test" noBorder={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
