'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/MoveUp.tsx
var SvgMoveUp = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M12.5 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m8 5 2 2-2 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 3.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Rect,
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 13.65,
          stroke: "currentColor",
          rx: 1.35
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgMoveUp);
var MoveUp_default = ForwardRef;

module.exports = MoveUp_default;
//# sourceMappingURL=MoveUp.js.map
//# sourceMappingURL=MoveUp.js.map