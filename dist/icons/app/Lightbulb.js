'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Lightbulb.tsx
var SvgLightbulb = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M8 16h8v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16v-4.5m0 0-1.5-1m1.5 1 1.5-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M8 16v-2.08a1.1 1.1 0 0 0-.322-.758 6 6 0 1 1 8.644 0 1.1 1.1 0 0 0-.322.757V16"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgLightbulb);
var Lightbulb_default = ForwardRef;

module.exports = Lightbulb_default;
//# sourceMappingURL=Lightbulb.js.map
//# sourceMappingURL=Lightbulb.js.map