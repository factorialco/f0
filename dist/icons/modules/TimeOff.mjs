import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/modules/TimeOff.tsx
var SvgTimeOff = (props, ref) => /* @__PURE__ */ jsx(
  Svg,
  {
    fill: "none",
    viewBox: "0 0 24 24",
    className: props.className,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.907 3.573c-1.102-.007-2.253.416-2.734 1.31a.89.89 0 0 0 .089.974l1.043 1.305C4.51 7.693 3.036 9.572 3 11.328c-.01.517.41.906.888.906h1.418a4.7 4.7 0 0 0-.244 3.477.888.888 0 0 0 1.244.524l3.222-1.61-.343 4.116H7.921a.843.843 0 0 0 0 1.686h8.158a.843.843 0 0 0 0-1.686h-1.264l-.343-4.117 3.222 1.611a.888.888 0 0 0 1.244-.524 4.7 4.7 0 0 0-.244-3.477h1.418a.89.89 0 0 0 .888-.906c-.036-1.757-1.51-3.635-4.305-4.166l1.043-1.305a.89.89 0 0 0 .09-.974c-.482-.894-1.633-1.317-2.735-1.31-.98.007-2.08.338-3.093 1.123-1.013-.785-2.112-1.116-3.093-1.123m3.8 10.169L12 13.388l-.707.354-.417 5h2.248z",
        clipRule: "evenodd"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgTimeOff);
var TimeOff_default = ForwardRef;

export { TimeOff_default as default };
//# sourceMappingURL=TimeOff.mjs.map
//# sourceMappingURL=TimeOff.mjs.map