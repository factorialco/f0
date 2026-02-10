import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgComplaints = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M17 5.35A3.65 3.65 0 0 1 20.65 9v6A3.65 3.65 0 0 1 17 18.65h-4.667a.35.35 0 0 0-.21.07L9.5 20.688c-.9.675-2.2.27-2.556-.798l-.419-1.257a3.52 3.52 0 0 1-3.175-3.504V8.857A3.51 3.51 0 0 1 6.857 5.35zm-9.5 8a.65.65 0 0 0 0 1.3h4l.13-.013a.65.65 0 0 0 0-1.274l-.13-.013zm0-3.5a.65.65 0 0 0 0 1.3h9l.13-.013a.65.65 0 0 0 0-1.274l-.13-.013z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgComplaints);
export default ForwardRef;
