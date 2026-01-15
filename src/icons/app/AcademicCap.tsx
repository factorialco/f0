import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgAcademicCap = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="m3.16 8.536 8.654-3.462a.5.5 0 0 1 .372 0l8.653 3.462a.5.5 0 0 1 0 .928l-8.653 3.462a.5.5 0 0 1-.372 0L3.161 9.464a.5.5 0 0 1 0-.928Z"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M19 10v5.67a.5.5 0 0 1-.303.46l-6.5 2.786a.5.5 0 0 1-.394 0l-6.5-2.786A.5.5 0 0 1 5 15.67V10"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 9 4 2v2.5"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgAcademicCap);
export default ForwardRef;
