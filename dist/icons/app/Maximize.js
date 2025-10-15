'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Maximize.tsx
var SvgMaximize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M13.5 10.5 19 5m0 0h-4m4 0v4M10.5 13.5 5 19m0 0h4m-4 0v-4"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgMaximize);
var Maximize_default = ForwardRef;

module.exports = Maximize_default;
//# sourceMappingURL=Maximize.js.map
//# sourceMappingURL=Maximize.js.map