'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Suitcase.tsx
var SvgSuitcase = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 7.5, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M9 7.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5H4M11 12.5v1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V12.5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgSuitcase);
var Suitcase_default = ForwardRef;

module.exports = Suitcase_default;
//# sourceMappingURL=Suitcase.js.map
//# sourceMappingURL=Suitcase.js.map