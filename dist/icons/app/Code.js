'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Code.tsx
var SvgCode = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m9 17-5-5 5-5M15 17l5-5-5-5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCode);
var Code_default = ForwardRef;

module.exports = Code_default;
//# sourceMappingURL=Code.js.map
//# sourceMappingURL=Code.js.map