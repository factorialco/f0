import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Code.tsx
var SvgCode = (props, ref) => /* @__PURE__ */ jsx(
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
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9 17-5-5 5-5M15 17l5-5-5-5"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCode);
var Code_default = ForwardRef;

export { Code_default as default };
//# sourceMappingURL=Code.mjs.map
//# sourceMappingURL=Code.mjs.map