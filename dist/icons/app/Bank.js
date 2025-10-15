'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Bank.tsx
var SvgBank = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 4, x: 4, y: 16, stroke: "currentColor", rx: 1 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M4 5.78a1 1 0 0 1 .757-.97l7-1.75a1 1 0 0 1 .486 0l7 1.75a1 1 0 0 1 .757.97V8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM6 9v7M18 9v7M14 9v7M10 9v7"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgBank);
var Bank_default = ForwardRef;

module.exports = Bank_default;
//# sourceMappingURL=Bank.js.map
//# sourceMappingURL=Bank.js.map