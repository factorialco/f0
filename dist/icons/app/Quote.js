'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Quote.tsx
var SvgQuote = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M10 6a5 5 0 0 0-5 5v2m0 0v2.5A2.5 2.5 0 0 0 7.5 18v0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 7.5 13zM19 6a5 5 0 0 0-5 5v2m0 0v2.5a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgQuote);
var Quote_default = ForwardRef;

module.exports = Quote_default;
//# sourceMappingURL=Quote.js.map
//# sourceMappingURL=Quote.js.map