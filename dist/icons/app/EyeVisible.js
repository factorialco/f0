'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/EyeVisible.tsx
var SvgEyeVisible = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgEyeVisible);
var EyeVisible_default = ForwardRef;

module.exports = EyeVisible_default;
//# sourceMappingURL=EyeVisible.js.map
//# sourceMappingURL=EyeVisible.js.map