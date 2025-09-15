import { render } from "@testing-library/react-native";
import React from "react";
import { Content, DetailsItem } from ".";

jest.mock("expo-clipboard", () => ({
  setString: jest.fn(),
  getString: jest.fn(),
}));

describe("DetailsItem", () => {
  it("Snapshot type item", () => {
    const content: Content = {
      type: "item",
      text: "alicia.keys@factorial.co",
      action: {
        type: "copy",
      },
    };

    const { toJSON } = render(<DetailsItem title="Email" content={content} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot type person", () => {
    const content: Content = {
      type: "person",
      firstName: "Daniel",
      lastName: "Maza",
      action: {
        type: "copy",
      },
    };

    const { toJSON } = render(
      <DetailsItem title="Datos personales" content={content} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot type company", () => {
    const content: Content = {
      type: "company",
      avatarUrl: "https://avatars.githubusercontent.com/u/21041797?s=200&v=4",
      name: "factorial",
      action: {
        type: "copy",
      },
    };

    const { toJSON } = render(
      <DetailsItem title="Company" content={content} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot type team", () => {
    const content: Content = {
      type: "team",
      name: "factorial",
      action: {
        type: "copy",
      },
    };

    const { toJSON } = render(<DetailsItem title="Team" content={content} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot type dot-tag", () => {
    const content: Content = {
      type: "dot-tag",
      text: "Activity",
      customColor: "#07A2AD",
    };

    const { toJSON } = render(
      <DetailsItem title="Dot Tag" content={content} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
