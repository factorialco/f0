import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgOffice = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M6 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM10 12h4M10 8h4"
    />
    <Path
      stroke="currentColor"
      d="M10 16.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h-4z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 20H5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgOffice);
export default ForwardRef;
