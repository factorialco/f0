'use strict';

var Svg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Svg__default = /*#__PURE__*/_interopDefault(Svg);

// src/icons/app/Question.tsx
var SvgQuestion = (props, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M9 9c0-2 1.5-3 3-3s3 1.5 3 3c0 3-3 2.5-3 5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Svg.Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 17v.1" })
    ]
  }
);
var ForwardRef = react.forwardRef(SvgQuestion);
var Question_default = ForwardRef;

module.exports = Question_default;
//# sourceMappingURL=Question.js.map
//# sourceMappingURL=Question.js.map