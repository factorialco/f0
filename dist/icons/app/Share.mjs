import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Share.tsx
var SvgShare = (props, ref) => /* @__PURE__ */ jsxs(
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
          strokeLinejoin: "round",
          d: "M10 5H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m17 4 3 3m0 0-3 3m3-3h-4a4 4 0 0 0-4 4v.5"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgShare);
var Share_default = ForwardRef;

export { Share_default as default };
//# sourceMappingURL=Share.mjs.map
//# sourceMappingURL=Share.mjs.map