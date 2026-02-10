import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgThumbsDownFilled = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16.94 6a.5.5 0 0 1 .5-.5h.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-.5a.5.5 0 0 1-.5-.5zM11.756 18.5a1.816 1.816 0 0 1-1.816-1.815V14.5H6.002a2.5 2.5 0 0 1-2.426-3.106l.811-3.243A3.5 3.5 0 0 1 7.783 5.5h7.157a1 1 0 0 1 1 1v6.427a3 3 0 0 1-.542 1.72l-2.155 3.079c-.34.485-.895.774-1.488.774"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgThumbsDownFilled);
export default ForwardRef;
