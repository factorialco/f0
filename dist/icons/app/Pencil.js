'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Pencil.tsx
var SvgPencil = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m7 13-1.5 5.5L11 17m-4-4 7.5-7.5a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4L11 17m-4-4 4 4"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgPencil);
var Pencil_default = ForwardRef;

module.exports = Pencil_default;
//# sourceMappingURL=Pencil.js.map
//# sourceMappingURL=Pencil.js.map