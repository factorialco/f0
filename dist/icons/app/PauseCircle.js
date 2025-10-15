'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/PauseCircle.tsx
var SvgPauseCircle = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M10 8.35a.65.65 0 0 1 .65.65v6a.65.65 0 1 1-1.3 0V9a.65.65 0 0 1 .65-.65m4.65.65a.65.65 0 1 0-1.3 0v6a.65.65 0 1 0 1.3 0z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgPauseCircle);
var PauseCircle_default = ForwardRef;

module.exports = PauseCircle_default;
//# sourceMappingURL=PauseCircle.js.map
//# sourceMappingURL=PauseCircle.js.map