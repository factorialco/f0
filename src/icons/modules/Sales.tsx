import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSales = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="m5.172 14.086.171.171 5-5 1.75 1.75a1.768 1.768 0 0 0 2.5-2.5L11.964 5.88a3 3 0 0 0-4.242 0l-2.55 2.55a4 4 0 0 0 0 5.657"
    />
    <Path
      fill="currentColor"
      d="M13.987 6.063a2.83 2.83 0 0 1 2.856.694l1.672 1.672a4 4 0 0 1 0 5.656l-4.258 4.258a2 2 0 0 1-2.828 0l-.586-.586-.086.086a2 2 0 0 1-2.828 0c-.323-.323-.857-.29-1.305-.2a1.41 1.41 0 0 1-1.28-.386l-.25-.25a1.77 1.77 0 0 1-.467-1.667c.504.335 1.19.281 1.635-.164l4.081-4.08.831.83.115.11a3.068 3.068 0 0 0 4.333-4.333l-.11-.115z"
    />
    <Path
      fill="currentColor"
      d="m14.593 8.507.121.134a1.768 1.768 0 0 1-2.62 2.366l-1.75-1.75 2.5-2.5z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSales);
export default ForwardRef;
