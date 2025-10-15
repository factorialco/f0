'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Heading2.tsx
var SvgHeading2 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M4 7v5m0 5v-5m0 0h7V7v10M15 9.5A2.5 2.5 0 0 1 17.5 7v0A2.5 2.5 0 0 1 20 9.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5V17h5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgHeading2);
var Heading2_default = ForwardRef;

module.exports = Heading2_default;
//# sourceMappingURL=Heading2.js.map
//# sourceMappingURL=Heading2.js.map