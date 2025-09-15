import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgWarning = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M5.399 19c-1.525 0-2.489-1.638-1.748-2.971l6.6-11.882c.763-1.372 2.735-1.372 3.497 0l6.601 11.882c.74 1.333-.223 2.971-1.748 2.971zM12 7.5a.97.97 0 0 0-.967 1.045l.302 3.9a.667.667 0 0 0 1.33 0l.303-3.9A.97.97 0 0 0 12 7.5m0 8.987a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
