'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Briefcase.tsx
var SvgBriefcase = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinejoin: "round", d: "M8 7v12M16 7v12" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgBriefcase);
var Briefcase_default = ForwardRef;

module.exports = Briefcase_default;
//# sourceMappingURL=Briefcase.js.map
//# sourceMappingURL=Briefcase.js.map