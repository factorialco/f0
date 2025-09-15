import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgChartLine = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M4 6v9a3 3 0 0 0 3 3h13"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 13 4.5-4 3.5 1 4.5-4L20 9M5.5 17 9 13.5l3.5 2 4-3.5 3.5 2.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;
