import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSolidPlay = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M6 16.554V7.446C6 5.911 7.659 4.948 8.992 5.71l7.969 4.554c1.344.767 1.344 2.705 0 3.473L8.992 18.29C7.66 19.052 6 18.09 6 16.554"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSolidPlay);
export default ForwardRef;
