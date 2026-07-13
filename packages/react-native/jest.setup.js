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

// Mock react-native-worklets to avoid native worklets initialization in Jest.
// Reanimated 4's mock pulls in react-native-worklets, whose native module
// throws "Native part of Worklets doesn't seem to be initialized" outside a
// native runtime.
jest.mock("react-native-worklets", () => ({
  createWorkletRuntime: jest.fn(),
  createSerializable: jest.fn((v) => v),
  isWorkletFunction: jest.fn(() => true),
  runOnRuntime: jest.fn(),
  runOnJS: jest.fn((fn) => fn),
  runOnUI: jest.fn((fn) => fn),
  scheduleOnRN: jest.fn(),
  scheduleOnUI: jest.fn(),
  makeShareable: jest.fn((v) => v),
  createSharedValue: jest.fn((v) => ({ value: v })),
  RuntimeKind: {
    ReactNative: "ReactNative",
    UI: "UI",
    Custom: "Custom",
  },
  serializableMappingCache: new WeakMap(),
}));

// Mock react-native-reanimated
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock"),
);

// Mock expo-image for Jest environment
jest.mock("expo-image", () => {
  const React = require("react");
  const { Image } = require("react-native");

  return {
    Image: React.forwardRef((props, ref) =>
      React.createElement(Image, { ...props, ref }),
    ),
  };
});
