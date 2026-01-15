import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgThumbsUpFilled = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M7 18a.5.5 0 0 1-.5.5H6A2.5 2.5 0 0 1 3.5 16v-3A2.5 2.5 0 0 1 6 10.5h.5a.5.5 0 0 1 .5.5zM12.185 5.5C13.187 5.5 14 6.313 14 7.315V9.5h3.939a2.5 2.5 0 0 1 2.425 3.106l-.811 3.243a3.5 3.5 0 0 1-3.396 2.651H9a1 1 0 0 1-1-1v-6.427a3 3 0 0 1 .542-1.72l2.155-3.079c.34-.485.895-.774 1.488-.774"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgThumbsUpFilled);
export default ForwardRef;
