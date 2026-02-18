import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPersonNegative = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M10 5.535a4 4 0 0 1 5.254 5.791M7.8 11a4 4 0 0 0 1.887 1.89"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18s1.5-2 5-2q.53 0 1 .057"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="m5 5 14 14" />
  </Svg>
);
const ForwardRef = forwardRef(SvgPersonNegative);
export default ForwardRef;
