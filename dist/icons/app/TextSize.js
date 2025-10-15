'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/TextSize.tsx
var SvgTextSize = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M4 6h5m5 0H9m0 0v12m4-6h3m3 0h-3m0 0v6"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgTextSize);
var TextSize_default = ForwardRef;

module.exports = TextSize_default;
//# sourceMappingURL=TextSize.js.map
//# sourceMappingURL=TextSize.js.map