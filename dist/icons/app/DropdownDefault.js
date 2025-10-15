'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/DropdownDefault.tsx
var SvgDropdownDefault = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
        {
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fill: "#052657",
          fillOpacity: 0.06,
          rx: 4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "m8.5 10.25 3.5 3.5 3.5-3.5" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgDropdownDefault);
var DropdownDefault_default = ForwardRef;

module.exports = DropdownDefault_default;
//# sourceMappingURL=DropdownDefault.js.map
//# sourceMappingURL=DropdownDefault.js.map