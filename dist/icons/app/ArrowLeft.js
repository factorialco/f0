'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ArrowLeft.tsx
var SvgArrowLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m11 18-6-6 6-6M19 12H5.5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgArrowLeft);
var ArrowLeft_default = ForwardRef;

module.exports = ArrowLeft_default;
//# sourceMappingURL=ArrowLeft.js.map
//# sourceMappingURL=ArrowLeft.js.map