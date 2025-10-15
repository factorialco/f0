'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/CreditCard.tsx
var SvgCreditCard = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5m16 0V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1m16 0H4M7 14h3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCreditCard);
var CreditCard_default = ForwardRef;

module.exports = CreditCard_default;
//# sourceMappingURL=CreditCard.js.map
//# sourceMappingURL=CreditCard.js.map