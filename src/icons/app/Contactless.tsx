import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgContactless = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" d="M6.5 12v.1" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M15 5a8.95 8.95 0 0 1 3.363 7A8.95 8.95 0 0 1 15 19M11 7.517A5.73 5.73 0 0 1 13.154 12c0 1.814-.841 3.43-2.154 4.483"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgContactless);
export default ForwardRef;
