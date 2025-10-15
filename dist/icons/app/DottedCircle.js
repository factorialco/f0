'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/DottedCircle.tsx
var SvgDottedCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2" })
  }
);
var ForwardRef = react.forwardRef(SvgDottedCircle);
var DottedCircle_default = ForwardRef;

module.exports = DottedCircle_default;
//# sourceMappingURL=DottedCircle.js.map
//# sourceMappingURL=DottedCircle.js.map