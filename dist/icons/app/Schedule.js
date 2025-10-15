'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Schedule.tsx
var SvgSchedule = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 17.5, cy: 15.5, r: 4.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14v1.054c0 .279.14.539.371.693L19 16.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10h4M7 14h2"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgSchedule);
var Schedule_default = ForwardRef;

module.exports = Schedule_default;
//# sourceMappingURL=Schedule.js.map
//# sourceMappingURL=Schedule.js.map