import { render } from "@testing-library/react-native";
import React from "react";
import { DetailsItemsList, DetailsItemsListProps } from ".";

jest.mock("expo-clipboard", () => ({
  setString: jest.fn(),
  getString: jest.fn(),
}));

describe("DetailsItemsList", () => {
  it("Snapshot ", () => {
    const content: DetailsItemsListProps = {
      title: "Details",
      details: [
        {
          title: "Legal entity",
          content: {
            type: "item",
            text: "Everyday Software SL",
            action: {
              type: "copy",
            },
          },
        },
        {
          title: "Manager",
          content: {
            type: "person",
            firstName: "Saul",
            lastName: "Dominguez",
            avatarUrl: "https://github.com/sauldom102.png",
            action: {
              type: "generic",
              handlePress: () => console.log("Its work"),
            },
          },
        },
        {
          title: "Teams",
          content: [
            {
              type: "team",
              name: "Management",
              action: {
                type: "generic",
                handlePress: () => console.log("Its work"),
              },
            },
            {
              type: "team",
              name: "Engineering",
              action: {
                type: "generic",
                handlePress: () => console.log("Its work"),
              },
            },
          ],
        },
        {
          title: "Type",
          content: {
            type: "dot-tag",
            text: "Holidays",
            customColor: "#07A2AD",
          },
        },
      ],
    };

    const { toJSON } = render(<DetailsItemsList {...content} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
