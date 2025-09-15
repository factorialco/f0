import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFacePositive = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m4.6 10.7a1 1 0 0 0-1.4.2l.001-.002-.003.003-.033.042q-.05.061-.16.177a5 5 0 0 1-.655.571c-.577.42-1.376.809-2.35.809s-1.773-.389-2.35-.809a5 5 0 0 1-.815-.748l-.033-.042L8.8 13.9l-.001.001A.999.999 0 1 0 7.2 15.1l.002.002.003.004.007.01.021.028.07.085a6.96 6.96 0 0 0 1.17 1.08c.8.58 2.002 1.19 3.527 1.191 1.525 0 2.727-.611 3.525-1.191.4-.292.711-.583.923-.804.107-.111.19-.207.248-.277q.045-.052.07-.084.015-.016.022-.028l.007-.01.003-.004.002-.002a1 1 0 0 0-.2-1.4M10 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFacePositive);
export default ForwardRef;
