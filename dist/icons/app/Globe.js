'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Globe.tsx
var SvgGlobe = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M12 20c-1.767-1.804-3-5.275-3-8s1.233-6.196 3-8M12 20c1.767-1.804 3-5.275 3-8s-1.233-6.196-3-8"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgGlobe);
var Globe_default = ForwardRef;

module.exports = Globe_default;
//# sourceMappingURL=Globe.js.map
//# sourceMappingURL=Globe.js.map