import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/Replace.tsx
var SvgReplace = (props, ref) => /* @__PURE__ */ jsx(
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
        d: "M20 10V9a3 3 0 0 0-3-3h-3m0 0 2-2m-2 2 2 2M4 14v1a3 3 0 0 0 3 3h3m0 0-2 2m2-2-2-2M16 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2M6 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgReplace);
var Replace_default = ForwardRef;

export { Replace_default as default };
//# sourceMappingURL=Replace.mjs.map
//# sourceMappingURL=Replace.mjs.map