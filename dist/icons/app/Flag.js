'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Flag.tsx
var SvgFlag = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M6 5.5c3.5-1 5-.5 6.5.5S16 7 18 5.5V15c-2 1.5-4 1.5-5.5.5S9.5 14 6 15M6 4v16"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgFlag);
var Flag_default = ForwardRef;

module.exports = Flag_default;
//# sourceMappingURL=Flag.js.map
//# sourceMappingURL=Flag.js.map