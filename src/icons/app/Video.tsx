import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgVideo = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M8.8 6h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 8.28 20 9.12 20 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 18 16.88 18 15.2 18H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 15.72 4 14.88 4 13.2v-2.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 6 7.12 6 8.8 6Z"
    />
    <Path
      stroke="currentColor"
      d="M10 14.117V9.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgVideo);
export default ForwardRef;
