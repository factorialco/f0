import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Alert.tsx
var SvgAlert = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V7M12 17.1V17" })
  }
);
var ForwardRef = forwardRef(SvgAlert);
var Alert_default = ForwardRef;

export { Alert_default as default };
//# sourceMappingURL=Alert.mjs.map
//# sourceMappingURL=Alert.mjs.map