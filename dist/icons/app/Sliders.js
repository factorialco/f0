'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Sliders.tsx
var SvgSliders = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M8 13v8M16 3v8M8 3v1M16 20v1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 3, x: 5, y: 7, stroke: "currentColor", rx: 1.5 }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Rect, { width: 6, height: 3, x: 13, y: 14, stroke: "currentColor", rx: 1.5 })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgSliders);
var Sliders_default = ForwardRef;

module.exports = Sliders_default;
//# sourceMappingURL=Sliders.js.map
//# sourceMappingURL=Sliders.js.map