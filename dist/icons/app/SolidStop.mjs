import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/SolidStop.tsx
var SvgSolidStop = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        d: "M8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgSolidStop);
var SolidStop_default = ForwardRef;

export { SolidStop_default as default };
//# sourceMappingURL=SolidStop.mjs.map
//# sourceMappingURL=SolidStop.mjs.map