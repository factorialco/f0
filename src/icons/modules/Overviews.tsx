import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgOverviews = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11 12.2a.8.8 0 0 0 .8.8H17c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 4 13a7 7 0 0 1 6.003-6.93c.547-.078.997.378.997.93z"
    />
    <Path
      fill="currentColor"
      d="M14 4c0-.552.45-1.007.997-.93a7 7 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5.5a.5.5 0 0 1-.5-.5z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgOverviews);
export default ForwardRef;
