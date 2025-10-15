'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/LockUnlocked.tsx
var SvgLockUnlocked = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M16 10H8a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3M12 14v1M8 10V8a4 4 0 0 1 4-4v0"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgLockUnlocked);
var LockUnlocked_default = ForwardRef;

module.exports = LockUnlocked_default;
//# sourceMappingURL=LockUnlocked.js.map
//# sourceMappingURL=LockUnlocked.js.map