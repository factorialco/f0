'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ArrowRight.tsx
var SvgArrowRight = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m13 6 6 6-6 6M5 12h13.5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgArrowRight);
var ArrowRight_default = ForwardRef;

module.exports = ArrowRight_default;
//# sourceMappingURL=ArrowRight.js.map
//# sourceMappingURL=ArrowRight.js.map