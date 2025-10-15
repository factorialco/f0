import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/AlignTextLeft.tsx
var SvgAlignTextLeft = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5 8h14M5 12h14M5 16h6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgAlignTextLeft);
var AlignTextLeft_default = ForwardRef;

export { AlignTextLeft_default as default };
//# sourceMappingURL=AlignTextLeft.mjs.map
//# sourceMappingURL=AlignTextLeft.mjs.map