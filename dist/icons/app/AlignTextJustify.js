'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/AlignTextJustify.tsx
var SvgAlignTextJustify = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5 8h14M5 12h14M5 16h14"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgAlignTextJustify);
var AlignTextJustify_default = ForwardRef;

module.exports = AlignTextJustify_default;
//# sourceMappingURL=AlignTextJustify.js.map
//# sourceMappingURL=AlignTextJustify.js.map