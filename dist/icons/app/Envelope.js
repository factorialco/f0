'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Envelope.tsx
var SvgEnvelope = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgEnvelope);
var Envelope_default = ForwardRef;

module.exports = Envelope_default;
//# sourceMappingURL=Envelope.js.map
//# sourceMappingURL=Envelope.js.map