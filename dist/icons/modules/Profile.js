'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/modules/Profile.tsx
var SvgProfile = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.965 17.702C6.663 16.138 9.127 14.5 12 14.5s5.337 1.638 7.035 3.202c1.175 1.082.325 2.798-1.272 2.798H6.237c-1.597 0-2.447-1.716-1.272-2.798"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgProfile);
var Profile_default = ForwardRef;

module.exports = Profile_default;
//# sourceMappingURL=Profile.js.map
//# sourceMappingURL=Profile.js.map