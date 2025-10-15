'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Filter.tsx
var SvgFilter = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5.415 6.65A1 1 0 0 1 6.175 5h11.65a1 1 0 0 1 .76 1.65l-4.344 5.07a1 1 0 0 0-.241.65v4.13a1 1 0 0 1-.4.8l-2 1.5A1 1 0 0 1 10 18v-5.63a1 1 0 0 0-.24-.65z"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgFilter);
var Filter_default = ForwardRef;

module.exports = Filter_default;
//# sourceMappingURL=Filter.js.map
//# sourceMappingURL=Filter.js.map