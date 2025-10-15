'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/EllipsisHorizontal.tsx
var SvgEllipsisHorizontal = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgEllipsisHorizontal);
var EllipsisHorizontal_default = ForwardRef;

module.exports = EllipsisHorizontal_default;
//# sourceMappingURL=EllipsisHorizontal.js.map
//# sourceMappingURL=EllipsisHorizontal.js.map