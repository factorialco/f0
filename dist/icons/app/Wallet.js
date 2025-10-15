'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Wallet.tsx
var SvgWallet = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          strokeLinejoin: "round",
          d: "M4 7v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5h9a2 2 0 0 1 2 2v2H6a2 2 0 1 1 0-4Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgWallet);
var Wallet_default = ForwardRef;

module.exports = Wallet_default;
//# sourceMappingURL=Wallet.js.map
//# sourceMappingURL=Wallet.js.map