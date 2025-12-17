import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMouse = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path stroke="currentColor" strokeLinecap="round" d="M12 7v2.5" />
    <Path
      stroke="currentColor"
      d="M6.192 16.071c.152 1.913 1.667 3.538 3.62 3.778.718.089 1.448.151 2.188.151s1.47-.062 2.188-.15c1.953-.241 3.467-1.866 3.62-3.779.105-1.326.192-2.685.192-4.071s-.087-2.745-.193-4.071c-.151-1.913-1.666-3.538-3.62-3.778A18 18 0 0 0 12 4c-.74 0-1.47.062-2.188.15-1.953.241-3.468 1.866-3.62 3.779C6.087 9.255 6 10.614 6 12s.087 2.745.192 4.071Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMouse);
export default ForwardRef;
