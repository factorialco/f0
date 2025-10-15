'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/SearchPerson.tsx
var SvgSearchPerson = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          strokeLinejoin: "round",
          d: "M6.5 16c2.106-3.276 6.894-3.276 9 0v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 11, cy: 11, r: 7, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgSearchPerson);
var SearchPerson_default = ForwardRef;

module.exports = SearchPerson_default;
//# sourceMappingURL=SearchPerson.js.map
//# sourceMappingURL=SearchPerson.js.map