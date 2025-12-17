// Jest setup file to mock problematic React Native files
jest.mock("react-native/Libraries/NativeComponent/ViewConfigIgnore", () => {
  const Platform = require("react-native").Platform;
  const ignoredViewConfigProps = new WeakSet();

  return {
    DynamicallyInjectedByGestureHandler: (object) => {
      ignoredViewConfigProps.add(object);
      return object;
    },
    ConditionallyIgnoredEventHandlers: (value) => {
      if (Platform && Platform.OS === "ios") {
        return value;
      }
      return undefined;
    },
    isIgnored: (value) => {
      if (typeof value === "object" && value != null) {
        return ignoredViewConfigProps.has(value);
      }
      return false;
    },
  };
});
