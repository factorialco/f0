import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgVideoRecorderNegative = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M17 13.7v-2.9c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 6 13.88 6 12.2 6H9.5m5.168 11.897C14.1 18 13.345 18 12.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.036 0-1.752.077-2.3M17 11l4-2v6l-4-2z"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="m5 5 13 13" />
  </Svg>
);
const ForwardRef = forwardRef(SvgVideoRecorderNegative);
export default ForwardRef;
