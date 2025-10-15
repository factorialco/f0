'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Italic.tsx
var SvgItalic = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M17 6h-4M9 6h4m0 0-2 12H7h8"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgItalic);
var Italic_default = ForwardRef;

module.exports = Italic_default;
//# sourceMappingURL=Italic.js.map
//# sourceMappingURL=Italic.js.map