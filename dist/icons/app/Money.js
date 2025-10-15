'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Money.tsx
var SvgMoney = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9M13.5 7H11a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 11 10h1a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 12 13H9.5M11.5 7V6M11.5 14v-1"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgMoney);
var Money_default = ForwardRef;

module.exports = Money_default;
//# sourceMappingURL=Money.js.map
//# sourceMappingURL=Money.js.map