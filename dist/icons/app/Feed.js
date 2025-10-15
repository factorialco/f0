'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Feed.tsx
var SvgFeed = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M4 12h3l2.5-5.5 5 11L17 12h3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgFeed);
var Feed_default = ForwardRef;

module.exports = Feed_default;
//# sourceMappingURL=Feed.js.map
//# sourceMappingURL=Feed.js.map