import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgThumbsUp = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 16v-3a2 2 0 0 1 2-2h1.48a1 1 0 0 0 .819-.427l2.808-4.012a1.315 1.315 0 0 1 2.393.754V10h4.438a2 2 0 0 1 1.94 2.485l-.81 3.243A3 3 0 0 1 16.158 18H6a2 2 0 0 1-2-2M8 11v7"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgThumbsUp);
export default ForwardRef;
