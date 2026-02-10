import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPassword = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M19.25 17v-1.75a1.75 1.75 0 1 0-3.5 0V17m-.15 4h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 17 19.96 17 19.4 17h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 17.76 14 18.04 14 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 21 15.04 21 15.6 21"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M10 18H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 15.72 2 14.88 2 13.2v-2.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 6 5.12 6 6.8 6h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 8.28 22 9.12 22 10.8v1.7"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12v.1M10 12v.1M14 12v.1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPassword);
export default ForwardRef;
