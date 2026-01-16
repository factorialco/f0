import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgUpsell = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 36 36"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="#F5A51C"
      d="M21.078 6.851a1.626 1.626 0 0 0-2.954-.938l-9.755 13.82a1.626 1.626 0 0 0 1.328 2.564h4.877v7.316a1.626 1.626 0 0 0 2.896 1.016l9.755-12.194a1.626 1.626 0 0 0-1.27-2.642h-4.877z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgUpsell);
export default ForwardRef;
