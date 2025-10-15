'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/InProgressTask.tsx
var SvgInProgressTask = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { fill: "currentColor", d: "M12 18a6 6 0 0 0 0-12z" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgInProgressTask);
var InProgressTask_default = ForwardRef;

module.exports = InProgressTask_default;
//# sourceMappingURL=InProgressTask.js.map
//# sourceMappingURL=InProgressTask.js.map