'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ChevronLeft.tsx
var SvgChevronLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m15 6-6 6M15 18l-6-6"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgChevronLeft);
var ChevronLeft_default = ForwardRef;

module.exports = ChevronLeft_default;
//# sourceMappingURL=ChevronLeft.js.map
//# sourceMappingURL=ChevronLeft.js.map