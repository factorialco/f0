'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/ChevronUp.tsx
var SvgChevronUp = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m18 14-6-6M6 14l6-6"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgChevronUp);
var ChevronUp_default = ForwardRef;

module.exports = ChevronUp_default;
//# sourceMappingURL=ChevronUp.js.map
//# sourceMappingURL=ChevronUp.js.map