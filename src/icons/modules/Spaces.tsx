import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSpaces = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M10.446 3.948a3.2 3.2 0 0 1 3.108 0l4.8 2.667A3.2 3.2 0 0 1 20 9.412v5.176a3.2 3.2 0 0 1-1.646 2.797l-4.8 2.667a3.2 3.2 0 0 1-3.108 0l-4.8-2.667A3.2 3.2 0 0 1 4 14.588V9.412a3.2 3.2 0 0 1 1.646-2.797zm2.331 1.399a1.6 1.6 0 0 0-1.554 0L6.447 8 12 11.085 17.553 8zm5.622 4.013L12.8 12.47v6.17l1.6-.889v-3.236a1.6 1.6 0 0 1 .823-1.399l.388-.215a.8.8 0 0 1 1.189.699v2.818l.777-.431a1.6 1.6 0 0 0 .823-1.4V9.36"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSpaces);
export default ForwardRef;
