// Mock for react-native/Libraries/NativeComponent/ViewConfigIgnore
const Platform = require("react-native").Platform;
const ignoredViewConfigProps = new WeakSet();

module.exports = {
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
