'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Spinner.tsx
var SvgSpinner = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M19 12a7 7 0 1 1-7-7"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgSpinner);
var Spinner_default = ForwardRef;

module.exports = Spinner_default;
//# sourceMappingURL=Spinner.js.map
//# sourceMappingURL=Spinner.js.map