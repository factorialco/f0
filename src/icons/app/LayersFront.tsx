import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgLayersFront = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M9 20h1.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C20 15.44 20 13.76 20 10.4V9"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 5h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgLayersFront);
export default ForwardRef;
