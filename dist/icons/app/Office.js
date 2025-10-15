'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Office.tsx
var SvgOffice = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M6 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM10 12h4M10 8h4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M10 16.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h-4z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 20H5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgOffice);
var Office_default = ForwardRef;

module.exports = Office_default;
//# sourceMappingURL=Office.js.map
//# sourceMappingURL=Office.js.map