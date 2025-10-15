'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/List.tsx
var SvgList = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M9 8h10M9 12h10M9 16h10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M4.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgList);
var List_default = ForwardRef;

module.exports = List_default;
//# sourceMappingURL=List.js.map
//# sourceMappingURL=List.js.map