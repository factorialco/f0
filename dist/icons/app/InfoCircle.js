'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/InfoCircle.tsx
var SvgInfoCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.65-2.9a.65.65 0 1 0 1.3 0V9a.65.65 0 1 0-1.3 0zm0 6a.65.65 0 1 0 1.3 0v-3a.65.65 0 1 0-1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgInfoCircle);
var InfoCircle_default = ForwardRef;

module.exports = InfoCircle_default;
//# sourceMappingURL=InfoCircle.js.map
//# sourceMappingURL=InfoCircle.js.map