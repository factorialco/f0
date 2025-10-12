import React from "react";
import type { Preview } from "@storybook/react";
import { View } from "react-native";
import "../global.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
