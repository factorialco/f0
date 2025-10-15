import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Question.tsx
var SvgQuestion = (props, ref) => /* @__PURE__ */ jsxs(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 9c0-2 1.5-3 3-3s3 1.5 3 3c0 3-3 2.5-3 5"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "M12 17v.1" })
    ]
  }
);
var ForwardRef = forwardRef(SvgQuestion);
var Question_default = ForwardRef;

export { Question_default as default };
//# sourceMappingURL=Question.mjs.map
//# sourceMappingURL=Question.mjs.map