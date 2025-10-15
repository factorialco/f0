'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/DollarBill.tsx
var SvgDollarBill = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M7 12v.1M17 12v.1" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgDollarBill);
var DollarBill_default = ForwardRef;

module.exports = DollarBill_default;
//# sourceMappingURL=DollarBill.js.map
//# sourceMappingURL=DollarBill.js.map