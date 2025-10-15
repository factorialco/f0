'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Placeholder.tsx
var SvgPlaceholder = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "m17.5 6.5-11 11M17.5 17.5l-11-11"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgPlaceholder);
var Placeholder_default = ForwardRef;

module.exports = Placeholder_default;
//# sourceMappingURL=Placeholder.js.map
//# sourceMappingURL=Placeholder.js.map