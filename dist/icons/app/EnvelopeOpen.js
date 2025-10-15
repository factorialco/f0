'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/EnvelopeOpen.tsx
var SvgEnvelopeOpen = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M20 15V8.618a1 1 0 0 0-.553-.894L13.342 4.67a3 3 0 0 0-2.684 0L4.553 7.724A1 1 0 0 0 4 8.618V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "m4 9 7.497 3.748c.317.159.69.159 1.006 0L20 9"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgEnvelopeOpen);
var EnvelopeOpen_default = ForwardRef;

module.exports = EnvelopeOpen_default;
//# sourceMappingURL=EnvelopeOpen.js.map
//# sourceMappingURL=EnvelopeOpen.js.map