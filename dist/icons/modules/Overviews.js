'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/modules/Overviews.tsx
var SvgOverviews = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          fill: "currentColor",
          d: "M11 12.2a.8.8 0 0 0 .8.8H17c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 4 13a7 7 0 0 1 6.003-6.93c.547-.078.997.378.997.93z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          fill: "currentColor",
          d: "M14 4c0-.552.45-1.007.997-.93a7 7 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5.5a.5.5 0 0 1-.5-.5z"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgOverviews);
var Overviews_default = ForwardRef;

module.exports = Overviews_default;
//# sourceMappingURL=Overviews.js.map
//# sourceMappingURL=Overviews.js.map