'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/CameraPlus.tsx
var SvgCameraPlus = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          strokeLinecap: "round",
          d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h.28a1 1 0 0 0 .948-.684l.088-.265A3 3 0 0 1 11.162 4H14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 3, stroke: "currentColor", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M19 6.5h-3M17.5 8V5" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgCameraPlus);
var CameraPlus_default = ForwardRef;

module.exports = CameraPlus_default;
//# sourceMappingURL=CameraPlus.js.map
//# sourceMappingURL=CameraPlus.js.map