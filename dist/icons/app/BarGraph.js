'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/BarGraph.tsx
var SvgBarGraph = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13v2M12 9v6M16 11v4"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgBarGraph);
var BarGraph_default = ForwardRef;

module.exports = BarGraph_default;
//# sourceMappingURL=BarGraph.js.map
//# sourceMappingURL=BarGraph.js.map