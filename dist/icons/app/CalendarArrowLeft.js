'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/CalendarArrowLeft.tsx
var SvgCalendarArrowLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M15 3v2m0 2V5m0 0H9m6 0h1a3 3 0 0 1 3 3v4M9 5V3m0 2v2m0-2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2M5 10h14M20 17.5h-7m0 0 3-3m-3 3 3 3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCalendarArrowLeft);
var CalendarArrowLeft_default = ForwardRef;

module.exports = CalendarArrowLeft_default;
//# sourceMappingURL=CalendarArrowLeft.js.map
//# sourceMappingURL=CalendarArrowLeft.js.map