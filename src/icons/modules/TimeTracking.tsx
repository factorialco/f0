import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTimeTracking = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M6.336 5.836a.9.9 0 1 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zM18.936 4.564a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTimeTracking);
export default ForwardRef;
