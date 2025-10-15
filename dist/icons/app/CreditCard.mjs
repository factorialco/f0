import Svg, { Path } from 'react-native-svg';
import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/icons/app/CreditCard.tsx
var SvgCreditCard = (props, ref) => /* @__PURE__ */ jsx(
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
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5m16 0V9a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1m16 0H4M7 14h3"
      }
    )
  }
);
var ForwardRef = forwardRef(SvgCreditCard);
var CreditCard_default = ForwardRef;

export { CreditCard_default as default };
//# sourceMappingURL=CreditCard.mjs.map
//# sourceMappingURL=CreditCard.mjs.map