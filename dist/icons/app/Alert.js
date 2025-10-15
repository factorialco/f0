'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Alert.tsx
var SvgAlert = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V7M12 17.1V17" })
  }
);
var ForwardRef = react.forwardRef(SvgAlert);
var Alert_default = ForwardRef;

module.exports = Alert_default;
//# sourceMappingURL=Alert.js.map
//# sourceMappingURL=Alert.js.map