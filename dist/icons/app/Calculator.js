'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Calculator.tsx
var SvgCalculator = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 12, height: 16, x: 6, y: 4, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M18 8H6M14 8v12M10 8v12M18 12H6M14 16H6" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgCalculator);
var Calculator_default = ForwardRef;

module.exports = Calculator_default;
//# sourceMappingURL=Calculator.js.map
//# sourceMappingURL=Calculator.js.map