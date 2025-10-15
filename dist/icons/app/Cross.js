'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Cross.tsx
var SvgCross = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCross);
var Cross_default = ForwardRef;

module.exports = Cross_default;
//# sourceMappingURL=Cross.js.map
//# sourceMappingURL=Cross.js.map