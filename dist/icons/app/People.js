'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/People.tsx
var SvgPeople = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 9, r: 4, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13a3 3 0 1 0 0-6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 18s1.5-2 5-2 5 2 5 2M17 16c2 0 2.75 1 2.75 1"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgPeople);
var People_default = ForwardRef;

module.exports = People_default;
//# sourceMappingURL=People.js.map
//# sourceMappingURL=People.js.map