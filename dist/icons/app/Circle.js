'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Circle.tsx
var SvgCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8 })
  }
);
var ForwardRef = react.forwardRef(SvgCircle);
var Circle_default = ForwardRef;

module.exports = Circle_default;
//# sourceMappingURL=Circle.js.map
//# sourceMappingURL=Circle.js.map