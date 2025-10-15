import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/ChartPie.tsx
var SvgChartPie = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M11 13h7a7 7 0 1 1-7-7z"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 4a6 6 0 0 1 6 6h-6z"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgChartPie);
var ChartPie_default = ForwardRef;

export { ChartPie_default as default };
//# sourceMappingURL=ChartPie.mjs.map
//# sourceMappingURL=ChartPie.mjs.map