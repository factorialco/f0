import Svg, { Rect, Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/BarGraph.tsx
var SvgBarGraph = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v2M12 9v6M16 11v4"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgBarGraph);
var BarGraph_default = ForwardRef;

export { BarGraph_default as default };
//# sourceMappingURL=BarGraph.mjs.map
//# sourceMappingURL=BarGraph.mjs.map