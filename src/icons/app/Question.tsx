import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgQuestion = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9 9c0-2 1.5-3 3-3s3 1.5 3 3c0 3-3 2.5-3 5"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="M12 17v.1" />
  </Svg>
);
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;
