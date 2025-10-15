'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Microphone.tsx
var SvgMicrophone = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11v0a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v0M12 17v3m0 0h-2m2 0h2"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgMicrophone);
var Microphone_default = ForwardRef;

module.exports = Microphone_default;
//# sourceMappingURL=Microphone.js.map
//# sourceMappingURL=Microphone.js.map