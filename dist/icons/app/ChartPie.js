'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ChartPie.tsx
var SvgChartPie = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M11 13h7a7 7 0 1 1-7-7z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 4a6 6 0 0 1 6 6h-6z"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgChartPie);
var ChartPie_default = ForwardRef;

module.exports = ChartPie_default;
//# sourceMappingURL=ChartPie.js.map
//# sourceMappingURL=ChartPie.js.map