import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Graph.tsx
var SvgGraph = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 14 3.646-3.646a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 0 .708 0L20 8m0 0v3m0-3h-3"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgGraph);
var Graph_default = ForwardRef;

export { Graph_default as default };
//# sourceMappingURL=Graph.mjs.map
//# sourceMappingURL=Graph.mjs.map