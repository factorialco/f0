import Svg, { Path, Rect } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Search.tsx
var SvgSearch = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsx(Rect, { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7 })
    ]
  }
);
var ForwardRef = forwardRef(SvgSearch);
var Search_default = ForwardRef;

export { Search_default as default };
//# sourceMappingURL=Search.mjs.map
//# sourceMappingURL=Search.mjs.map