import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgKudos = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="m11.895 5.955.105.082.105-.082C12.747 5.465 13.72 5 15.062 5c1.434 0 2.676.702 3.539 1.677C19.46 7.648 20 8.95 20 10.286c0 1.338-.542 2.608-1.253 3.711-.716 1.111-1.654 2.13-2.563 2.982a27.5 27.5 0 0 1-3.623 2.85l-.018.011-.006.003-.002.002a1 1 0 0 1-1.07 0L12 19c-.535.845-.536.844-.536.844h-.001l-.006-.004-.018-.012a12 12 0 0 1-.3-.198 27.48 27.48 0 0 1-3.323-2.65c-.91-.854-1.847-1.872-2.563-2.983C4.543 12.894 4 11.624 4 10.286 4 7.143 6.655 5 8.938 5c1.34 0 2.315.465 2.957.955"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgKudos);
export default ForwardRef;
