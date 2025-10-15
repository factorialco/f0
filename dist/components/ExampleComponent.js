'use strict';

var reactNative = require('react-native');
var jsxRuntime = require('react/jsx-runtime');

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "rounded-lg bg-f1-background p-4", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "text-base font-medium text-f1-foreground", children: text }) });
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=ExampleComponent.js.map
//# sourceMappingURL=ExampleComponent.js.map