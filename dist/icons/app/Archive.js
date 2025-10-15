'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Archive.tsx
var SvgArchive = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M4 9V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M5 15v-5h14v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3M14 14h-4"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgArchive);
var Archive_default = ForwardRef;

module.exports = Archive_default;
//# sourceMappingURL=Archive.js.map
//# sourceMappingURL=Archive.js.map