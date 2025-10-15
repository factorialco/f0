'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Search.tsx
var SvgSearch = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7 })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgSearch);
var Search_default = ForwardRef;

module.exports = Search_default;
//# sourceMappingURL=Search.js.map
//# sourceMappingURL=Search.js.map