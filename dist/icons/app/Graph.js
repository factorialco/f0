'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Graph.tsx
var SvgGraph = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M4 6v9a3 3 0 0 0 3 3h13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 14 3.646-3.646a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 0 .708 0L20 8m0 0v3m0-3h-3"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgGraph);
var Graph_default = ForwardRef;

module.exports = Graph_default;
//# sourceMappingURL=Graph.js.map
//# sourceMappingURL=Graph.js.map