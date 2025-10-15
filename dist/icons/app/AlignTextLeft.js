'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/AlignTextLeft.tsx
var SvgAlignTextLeft = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5 8h14M5 12h14M5 16h6"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgAlignTextLeft);
var AlignTextLeft_default = ForwardRef;

module.exports = AlignTextLeft_default;
//# sourceMappingURL=AlignTextLeft.js.map
//# sourceMappingURL=AlignTextLeft.js.map