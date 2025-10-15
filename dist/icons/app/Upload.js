'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Upload.tsx
var SvgUpload = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M12 14V5m0 0L9 8m3-3 3 3M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgUpload);
var Upload_default = ForwardRef;

module.exports = Upload_default;
//# sourceMappingURL=Upload.js.map
//# sourceMappingURL=Upload.js.map