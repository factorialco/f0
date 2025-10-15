'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Info.tsx
var SvgInfo = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgInfo);
var Info_default = ForwardRef;

module.exports = Info_default;
//# sourceMappingURL=Info.js.map
//# sourceMappingURL=Info.js.map