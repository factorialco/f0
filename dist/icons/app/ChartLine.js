'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ChartLine.tsx
var SvgChartLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          strokeLinecap: "round",
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m4 13 4.5-4 3.5 1 4.5-4L20 9M5.5 17 9 13.5l3.5 2 4-3.5 3.5 2.5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgChartLine);
var ChartLine_default = ForwardRef;

module.exports = ChartLine_default;
//# sourceMappingURL=ChartLine.js.map
//# sourceMappingURL=ChartLine.js.map