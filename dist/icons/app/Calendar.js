'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Calendar.tsx
var SvgCalendar = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1m0 0V3m0 2v2M5 10h14"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCalendar);
var Calendar_default = ForwardRef;

module.exports = Calendar_default;
//# sourceMappingURL=Calendar.js.map
//# sourceMappingURL=Calendar.js.map