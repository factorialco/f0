'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/CheckDouble.tsx
var SvgCheckDouble = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m12 18 7.5-10M4.5 13l3.178 3.178a1 1 0 0 0 1.512-.114L15.5 7.5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCheckDouble);
var CheckDouble_default = ForwardRef;

module.exports = CheckDouble_default;
//# sourceMappingURL=CheckDouble.js.map
//# sourceMappingURL=CheckDouble.js.map