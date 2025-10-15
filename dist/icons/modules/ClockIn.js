'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/modules/ClockIn.tsx
var SvgClockIn = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgClockIn);
var ClockIn_default = ForwardRef;

module.exports = ClockIn_default;
//# sourceMappingURL=ClockIn.js.map
//# sourceMappingURL=ClockIn.js.map