'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Timer.tsx
var SvgTimer = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 13, r: 7.35, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.33v2.667l3 1.666"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3M10 3h4M19.09 6l1.414 1.414M4.91 6 3.496 7.414"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgTimer);
var Timer_default = ForwardRef;

module.exports = Timer_default;
//# sourceMappingURL=Timer.js.map
//# sourceMappingURL=Timer.js.map