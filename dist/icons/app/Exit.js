'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Exit.tsx
var SvgExit = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M10 12h9m0 0-3-3m3 3-3 3M11 19H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgExit);
var Exit_default = ForwardRef;

module.exports = Exit_default;
//# sourceMappingURL=Exit.js.map
//# sourceMappingURL=Exit.js.map