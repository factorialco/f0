import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgThumbsDown = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M20 8v3a2 2 0 0 1-2 2h-1.48a1 1 0 0 0-.819.427l-2.808 4.012a1.315 1.315 0 0 1-2.393-.754V14H6.062a2 2 0 0 1-1.94-2.485l.81-3.243A3 3 0 0 1 7.842 6H18a2 2 0 0 1 2 2M16 6v7"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgThumbsDown);
export default ForwardRef;
