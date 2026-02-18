import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSearchPerson = (props: SvgProps, ref: Ref<Svg>) => (
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
      strokeLinejoin="round"
      d="M6.5 16c2.106-3.276 6.894-3.276 9 0v0"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="m16 16 3 3" />
    <Circle cx={11} cy={10.5} r={2.5} stroke="currentColor" />
    <Circle cx={11} cy={11} r={7} stroke="currentColor" />
  </Svg>
);
const ForwardRef = forwardRef(SvgSearchPerson);
export default ForwardRef;
