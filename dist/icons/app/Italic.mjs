import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Italic.tsx
var SvgItalic = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M17 6h-4M9 6h4m0 0-2 12H7h8"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgItalic);
var Italic_default = ForwardRef;

export { Italic_default as default };
//# sourceMappingURL=Italic.mjs.map
//# sourceMappingURL=Italic.mjs.map