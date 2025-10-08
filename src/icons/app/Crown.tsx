import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCrown = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m4.572 9.908 2 6.667A2 2 0 0 0 8.488 18h7.024a2 2 0 0 0 1.916-1.425l2-6.667a1 1 0 0 0-1.3-1.227l-2.73.993a1 1 0 0 1-1.265-.556l-1.21-2.903c-.342-.82-1.504-.82-1.846 0l-1.21 2.903a1 1 0 0 1-1.265.556l-2.73-.993a1 1 0 0 0-1.3 1.227"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCrown);
export default ForwardRef;
