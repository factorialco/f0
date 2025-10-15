'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Heart.tsx
var SvgHeart = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.063 6C12.875 6 12 8 12 8s-.875-2-3.062-2C7.188 6 5 7.714 5 10.286 5 14.57 12 19 12 19s7-4.429 7-8.714C19 8.143 17.25 6 15.063 6"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgHeart);
var Heart_default = ForwardRef;

module.exports = Heart_default;
//# sourceMappingURL=Heart.js.map
//# sourceMappingURL=Heart.js.map