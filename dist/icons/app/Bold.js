'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Bold.tsx
var SvgBold = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M12.5 11.5a3 3 0 1 0 0-6H9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          d: "M14.833 18.5c2.025 0 3.667-1.567 3.667-3.5s-1.642-3.5-3.667-3.5H7.5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgBold);
var Bold_default = ForwardRef;

module.exports = Bold_default;
//# sourceMappingURL=Bold.js.map
//# sourceMappingURL=Bold.js.map