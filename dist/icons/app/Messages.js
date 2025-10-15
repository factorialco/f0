'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Messages.tsx
var SvgMessages = (props, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M14 17v-3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.793a.5.5 0 0 0 .854.353L7 19h5a2 2 0 0 0 2-2M10 9V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5.793a.5.5 0 0 1-.854.353L17 12h-.5"
      }
    )
  }
);
var ForwardRef = react.forwardRef(SvgMessages);
var Messages_default = ForwardRef;

module.exports = Messages_default;
//# sourceMappingURL=Messages.js.map
//# sourceMappingURL=Messages.js.map