import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Mobile.tsx
var SvgMobile = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M10.8 4h2.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 6.28 18 7.12 18 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 20 14.88 20 13.2 20h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 17.72 6 16.88 6 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 4 9.12 4 10.8 4Z"
        }
      ),
      /* @__PURE__ */ jsx(Path, { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" })
    ]
  }
);
var ForwardRef = forwardRef(SvgMobile);
var Mobile_default = ForwardRef;

export { Mobile_default as default };
//# sourceMappingURL=Mobile.mjs.map
//# sourceMappingURL=Mobile.mjs.map