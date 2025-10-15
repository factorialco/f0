'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Completed.tsx
var SvgCompleted = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        fillRule: "evenodd",
        d: "M4.65 12a7.35 7.35 0 1 1 14.7 0 7.35 7.35 0 0 1-14.7 0M12 3.35a8.65 8.65 0 1 0 0 17.3 8.65 8.65 0 0 0 0-17.3M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgCompleted);
var Completed_default = ForwardRef;

module.exports = Completed_default;
//# sourceMappingURL=Completed.js.map
//# sourceMappingURL=Completed.js.map