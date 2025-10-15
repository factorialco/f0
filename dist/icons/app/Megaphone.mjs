import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Megaphone.tsx
var SvgMegaphone = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "m17 6-3.033 1.213A11 11 0 0 1 9.882 8H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v2.25a1.75 1.75 0 1 0 3.5 0V15h.345c.763 0 1.52.146 2.228.43L17 17z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M20 10v4" })
    ]
  }
);
var ForwardRef = forwardRef(SvgMegaphone);
var Megaphone_default = ForwardRef;

export { Megaphone_default as default };
//# sourceMappingURL=Megaphone.mjs.map
//# sourceMappingURL=Megaphone.mjs.map