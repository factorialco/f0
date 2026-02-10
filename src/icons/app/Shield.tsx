import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgShield = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5 11.404V6l1.638-.468a16 16 0 0 0 3.543-1.493L12 3l1.819 1.04a16 16 0 0 0 3.543 1.492L19 6v5.404c0 1.72-.215 3.49-1.281 4.84C15.6 18.923 12 21 12 21s-3.601-2.077-5.719-4.756C5.215 14.894 5 13.124 5 11.404Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgShield);
export default ForwardRef;
