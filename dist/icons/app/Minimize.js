'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Minimize.tsx
var SvgMinimize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m19 5-5.5 5.5m0 0h4m-4 0v-4M5 19l5.5-5.5m0 0h-4m4 0v4"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgMinimize);
var Minimize_default = ForwardRef;

module.exports = Minimize_default;
//# sourceMappingURL=Minimize.js.map
//# sourceMappingURL=Minimize.js.map