'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/FileFilled.tsx
var SvgFileFilled = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M14.879 4.879 17.12 7.12A3 3 0 0 1 18 9.243V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.757a3 3 0 0 1 2.122.879M14 12h-4M12 16h-2"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgFileFilled);
var FileFilled_default = ForwardRef;

module.exports = FileFilled_default;
//# sourceMappingURL=FileFilled.js.map
//# sourceMappingURL=FileFilled.js.map