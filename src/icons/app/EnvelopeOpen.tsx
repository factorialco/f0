import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgEnvelopeOpen = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M20 15V8.618a1 1 0 0 0-.553-.894L13.342 4.67a3 3 0 0 0-2.684 0L4.553 7.724A1 1 0 0 0 4 8.618V15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
    />
    <Path
      stroke="currentColor"
      d="m4 9 7.497 3.748c.317.159.69.159 1.006 0L20 9"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgEnvelopeOpen);
export default ForwardRef;
