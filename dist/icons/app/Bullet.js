'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Bullet.tsx
var SvgBullet = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      Svg.Path,
      {
        fill: "currentColor",
        d: "M10 7c-2.25 0-3 .75-3 3s.75 3 3 3 3-.75 3-3-.75-3-3-3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgBullet);
var Bullet_default = ForwardRef;

module.exports = Bullet_default;
//# sourceMappingURL=Bullet.js.map
//# sourceMappingURL=Bullet.js.map