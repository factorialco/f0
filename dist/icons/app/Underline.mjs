import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Underline.tsx
var SvgUnderline = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 6v5a4 4 0 0 1-8 0V6"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18h10"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgUnderline);
var Underline_default = ForwardRef;

export { Underline_default as default };
//# sourceMappingURL=Underline.mjs.map
//# sourceMappingURL=Underline.mjs.map