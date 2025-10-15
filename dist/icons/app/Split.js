'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Split.tsx
var SvgSplit = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5 12h4l1.619-2.59A3 3 0 0 1 13.163 8H19m0 0-2-2m2 2-2 2M19 16h-5.837a3 3 0 0 1-2.544-1.41L9 12H5m14 4-2-2m2 2-2 2"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgSplit);
var Split_default = ForwardRef;

module.exports = Split_default;
//# sourceMappingURL=Split.js.map
//# sourceMappingURL=Split.js.map