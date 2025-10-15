'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Windows.tsx
var SvgWindows = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m20 4-8.537 1.247v6.16H20zm0 16.25v-7.524l-8.537-.016v6.19zm-9.671-7.587v6.129l-6.324-.885v-5.275zm0-7.307L4 6.24l.003 5.244h6.326z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgWindows);
var Windows_default = ForwardRef;

module.exports = Windows_default;
//# sourceMappingURL=Windows.js.map
//# sourceMappingURL=Windows.js.map