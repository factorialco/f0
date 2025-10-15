'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Coffee.tsx
var SvgCoffee = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M6 17V8.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2v0a1.414 1.414 0 0 0 0 2v0M12 2v0a1.414 1.414 0 0 0 0 2v0M16 11h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H16"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgCoffee);
var Coffee_default = ForwardRef;

module.exports = Coffee_default;
//# sourceMappingURL=Coffee.js.map
//# sourceMappingURL=Coffee.js.map