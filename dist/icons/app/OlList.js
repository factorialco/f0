'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/OlList.tsx
var SvgOlList = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M7 4v6M13 7h6M13 12h6M13 17h6M5 14a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 0-2 2v1h4M5 6c1 0 2-1 2-2"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgOlList);
var OlList_default = ForwardRef;

module.exports = OlList_default;
//# sourceMappingURL=OlList.js.map
//# sourceMappingURL=OlList.js.map