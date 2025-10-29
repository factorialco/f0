import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSpending = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M6.667 4.889A2.667 2.667 0 0 0 4 7.6v7.956a3.555 3.555 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.56 3.56 0 0 0-2.667-3.443V7.556a2.667 2.667 0 0 0-2.667-2.667zm-.889 2.692a.89.89 0 0 0 .889.864h8.888v-.89a.89.89 0 0 0-.889-.888h-8a.89.89 0 0 0-.888.889zm11.555 6.197a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSpending);
export default ForwardRef;
