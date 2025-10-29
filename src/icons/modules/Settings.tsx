import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSettings = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.752 4.372c1.038-1.662 3.458-1.662 4.496 0l.74 1.185c.238.38.65.619 1.098.634l1.396.048c1.958.068 3.168 2.164 2.248 3.894l-.656 1.233a1.35 1.35 0 0 0 0 1.268l.656 1.233c.92 1.73-.29 3.826-2.248 3.893l-1.396.049a1.35 1.35 0 0 0-1.098.634l-.74 1.185c-1.038 1.662-3.458 1.662-4.496 0l-.74-1.185a1.35 1.35 0 0 0-1.098-.634l-1.396-.049c-1.958-.067-3.168-2.163-2.248-3.893l.656-1.233a1.35 1.35 0 0 0 0-1.268l-.656-1.233c-.92-1.73.29-3.826 2.248-3.894l1.396-.048a1.35 1.35 0 0 0 1.098-.634zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSettings);
export default ForwardRef;
