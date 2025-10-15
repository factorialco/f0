'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Ellipsis.tsx
var SvgEllipsis = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
        {
          cx: 12,
          cy: 12,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 12)"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
        {
          cx: 12,
          cy: 6.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 6.5)"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Circle,
        {
          cx: 12,
          cy: 17.5,
          r: 1.5,
          fill: "currentColor",
          transform: "rotate(90 12 17.5)"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgEllipsis);
var Ellipsis_default = ForwardRef;

module.exports = Ellipsis_default;
//# sourceMappingURL=Ellipsis.js.map
//# sourceMappingURL=Ellipsis.js.map