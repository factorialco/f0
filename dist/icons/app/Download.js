'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Download.tsx
var SvgDownload = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M19 15v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1M12 5v9m0 0-3-3m3 3 3-3"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgDownload);
var Download_default = ForwardRef;

module.exports = Download_default;
//# sourceMappingURL=Download.js.map
//# sourceMappingURL=Download.js.map