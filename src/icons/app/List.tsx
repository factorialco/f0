import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgList = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9 8h10M9 12h10M9 16h10"
    />
    <Path
      stroke="currentColor"
      d="M4.5 8a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgList);
export default ForwardRef;
