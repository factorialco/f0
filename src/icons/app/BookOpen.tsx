import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgBookOpen = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 7.5c3-2.005 5.5-2 8 0v9.42c0 .838-.998 1.324-1.771 1-1.933-.811-3.935-.453-6.229 1.08m0-11.5c-3-2.005-5.5-2-8 0v9.42c0 .838.998 1.324 1.771 1C7.704 17.109 9.706 17.467 12 19m0-11.5V19"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgBookOpen);
export default ForwardRef;
