import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgCrossedCircle = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M3.35 12a8.65 8.65 0 1 1 17.3 0 8.65 8.65 0 0 1-17.3 0m6.11-3.46a.65.65 0 0 0-.92.92L11.08 12l-2.54 2.54a.65.65 0 1 0 .92.92L12 12.92l2.54 2.54a.65.65 0 1 0 .92-.92L12.92 12l2.54-2.54a.65.65 0 1 0-.92-.92L12 11.08z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgCrossedCircle);
export default ForwardRef;
