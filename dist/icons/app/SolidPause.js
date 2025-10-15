'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/SolidPause.tsx
var SvgSolidPause = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        fill: "currentColor",
        d: "M6 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0M14 17V7a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgSolidPause);
var SolidPause_default = ForwardRef;

module.exports = SolidPause_default;
//# sourceMappingURL=SolidPause.js.map
//# sourceMappingURL=SolidPause.js.map