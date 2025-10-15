'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Delete.tsx
var SvgDelete = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M17 8v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8m10 0h-1.5M17 8h1.5M7 8h1.5M7 8H5.5m10 0V5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3m7 0h-7"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgDelete);
var Delete_default = ForwardRef;

module.exports = Delete_default;
//# sourceMappingURL=Delete.js.map
//# sourceMappingURL=Delete.js.map