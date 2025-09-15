import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAi = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 13c3.314 0 6-3.134 6-7 0 3.866 2.686 7 6 7-3.314 0-6 3.134-6 7 0-3.866-2.686-7-6-7Z"
    />
    <Path
      fill="currentColor"
      d="M17.5 3.35a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 1 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 1 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 1 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgAi);
export default ForwardRef;
