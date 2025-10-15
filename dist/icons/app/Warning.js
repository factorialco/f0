'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Warning.tsx
var SvgWarning = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5.399 19c-1.525 0-2.489-1.638-1.748-2.971l6.6-11.882c.763-1.372 2.735-1.372 3.497 0l6.601 11.882c.74 1.333-.223 2.971-1.748 2.971zM12 7.5a.97.97 0 0 0-.967 1.045l.302 3.9a.667.667 0 0 0 1.33 0l.303-3.9A.97.97 0 0 0 12 7.5m0 8.987a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgWarning);
var Warning_default = ForwardRef;

module.exports = Warning_default;
//# sourceMappingURL=Warning.js.map
//# sourceMappingURL=Warning.js.map