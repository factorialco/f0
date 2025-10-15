'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Table.tsx
var SvgTable = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M4 9.5V17a2 2 0 0 0 2 2h6M4 9.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5m-16 0h8m8 0V17a2 2 0 0 1-2 2h-6m8-9.5h-8M4 14h16m-8 5V9.5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgTable);
var Table_default = ForwardRef;

module.exports = Table_default;
//# sourceMappingURL=Table.js.map
//# sourceMappingURL=Table.js.map