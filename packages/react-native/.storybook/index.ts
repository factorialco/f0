import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  // Enable tab mode instead of drawer - much better for Android
  enableWebsockets: true,
  // Start with the navigator closed
  isUIHidden: false,
  // Use bottom tabs instead of sidebar
  shouldDisableKeyboardAvoidingView: true,
  // Make sure gestures work
  shouldPersistSelection: true,
});

export default StorybookUIRoot;
