import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgChartPie = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M11 13h7a7 7 0 1 1-7-7z"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M14 4a6 6 0 0 1 6 6h-6z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;
