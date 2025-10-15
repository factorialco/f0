import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/app/Save.tsx
var SvgSave = (props, ref) => /* @__PURE__ */ jsxs(
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
          d: "M16 19a3 3 0 0 0 3-3v-5.757a3 3 0 0 0-.879-2.122L15.88 5.88A3 3 0 0 0 13.757 5H8v0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v0m8 0v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3m8 0H8"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 6v4H9V6"
        }
      )
    ]
  }
);
var ForwardRef = forwardRef(SvgSave);
var Save_default = ForwardRef;

export { Save_default as default };
//# sourceMappingURL=Save.mjs.map
//# sourceMappingURL=Save.mjs.map