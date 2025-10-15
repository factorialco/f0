'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/CheckCircleLine.tsx
var SvgCheckCircleLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m9 12 2.4 2.4L15 9.6"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgCheckCircleLine);
var CheckCircleLine_default = ForwardRef;

module.exports = CheckCircleLine_default;
//# sourceMappingURL=CheckCircleLine.js.map
//# sourceMappingURL=CheckCircleLine.js.map