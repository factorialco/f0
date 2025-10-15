'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Heading1.tsx
var SvgHeading1 = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5 7v5m0 5v-5m0 0h7V7v10M18 7v10M16 9c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgHeading1);
var Heading1_default = ForwardRef;

module.exports = Heading1_default;
//# sourceMappingURL=Heading1.js.map
//# sourceMappingURL=Heading1.js.map