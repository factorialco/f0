'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Pin.tsx
var SvgPin = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M12 20c3-3.2 6-6.065 6-9.6S15.314 4 12 4s-6 2.865-6 6.4 3 6.4 6 9.6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2 })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgPin);
var Pin_default = ForwardRef;

module.exports = Pin_default;
//# sourceMappingURL=Pin.js.map
//# sourceMappingURL=Pin.js.map