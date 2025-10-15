'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ArrowCycle.tsx
var SvgArrowCycle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          strokeLinejoin: "round",
          d: "M12.038 4.998a7.002 7.002 0 0 0-4.932 12.01m9.788-10.015a7 7 0 0 1 1.345 1.833 7.002 7.002 0 0 1-6.277 10.176"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8.516 15.426-.58 2.769-2.768-.58M16.14 9.236l.58-2.769 2.768.579"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgArrowCycle);
var ArrowCycle_default = ForwardRef;

module.exports = ArrowCycle_default;
//# sourceMappingURL=ArrowCycle.js.map
//# sourceMappingURL=ArrowCycle.js.map