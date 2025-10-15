'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Image.tsx
var SvgImage = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M4 15V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "m20 15-1.879-1.879a3 3 0 0 0-4.242 0L9 18" }),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Circle, { cx: 9, cy: 11, r: 2.35, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgImage);
var Image_default = ForwardRef;

module.exports = Image_default;
//# sourceMappingURL=Image.js.map
//# sourceMappingURL=Image.js.map