'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Proyector.tsx
var SvgProyector = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  Svg__default.default,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", d: "M5 5h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Svg.Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15v5M12 15l-5 5M12 15l5 5M4 5h16M9 11.5l2-2 2 2L15.5 9M12 5V3.5"
        }
      )
    ]
  }
);
var ForwardRef = react.forwardRef(SvgProyector);
var Proyector_default = ForwardRef;

module.exports = Proyector_default;
//# sourceMappingURL=Proyector.js.map
//# sourceMappingURL=Proyector.js.map