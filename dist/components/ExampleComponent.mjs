import { View, Text } from 'react-native';
import { jsx } from 'react/jsx-runtime';

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsx(View, { className: "rounded-lg bg-f1-background p-4", children: /* @__PURE__ */ jsx(Text, { className: "text-base font-medium text-f1-foreground", children: text }) });
};

export { ExampleComponent };
//# sourceMappingURL=ExampleComponent.mjs.map
//# sourceMappingURL=ExampleComponent.mjs.map