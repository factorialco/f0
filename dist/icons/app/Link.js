'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Link.tsx
var SvgLink = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M11 18v0a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a2.83 2.83 0 0 1 4 0v0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 6v0a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a2.83 2.83 0 0 1-4 0v0"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgLink);
var Link_default = ForwardRef;

module.exports = Link_default;
//# sourceMappingURL=Link.js.map
//# sourceMappingURL=Link.js.map