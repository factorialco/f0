import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/AlignTextCenter.tsx
var SvgAlignTextCenter = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M5 8h14M5 12h14M9 16h6"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgAlignTextCenter);
var AlignTextCenter_default = ForwardRef;

export { AlignTextCenter_default as default };
//# sourceMappingURL=AlignTextCenter.mjs.map
//# sourceMappingURL=AlignTextCenter.mjs.map