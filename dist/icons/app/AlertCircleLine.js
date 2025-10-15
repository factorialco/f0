'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/AlertCircleLine.tsx
var SvgAlertCircleLine = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9M12 15.1V15" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgAlertCircleLine);
var AlertCircleLine_default = ForwardRef;

module.exports = AlertCircleLine_default;
//# sourceMappingURL=AlertCircleLine.js.map
//# sourceMappingURL=AlertCircleLine.js.map