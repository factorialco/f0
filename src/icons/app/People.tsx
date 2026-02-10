import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPeople = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={9} cy={9} r={4} stroke="currentColor" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M16 13a3 3 0 1 0 0-6"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 18s1.5-2 5-2 5 2 5 2M17 16c2 0 2.75 1 2.75 1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;
