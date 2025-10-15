import Svg, { Path, Circle } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/SearchPerson.tsx
var SvgSearchPerson = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M6.5 16c2.106-3.276 6.894-3.276 9 0v0"
        }
      ),
      /* @__PURE__ */ jsx(Path, { stroke: "currentColor", strokeLinecap: "round", d: "m16 16 3 3" }),
      /* @__PURE__ */ jsx(Circle, { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(Circle, { cx: 11, cy: 11, r: 7, stroke: "currentColor" })
    ]
  }
);
var ForwardRef = forwardRef(SvgSearchPerson);
var SearchPerson_default = ForwardRef;

export { SearchPerson_default as default };
//# sourceMappingURL=SearchPerson.mjs.map
//# sourceMappingURL=SearchPerson.mjs.map