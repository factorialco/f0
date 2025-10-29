import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgSort = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.667 13.15a.65.65 0 0 1-.65-.65V6.57l-1.39 1.39-.103.083a.65.65 0 0 1-.9-.9l.083-.103 2.5-2.5a.65.65 0 0 1 .92 0l2.5 2.5a.65.65 0 0 1-.92.92l-1.39-1.39v5.93a.65.65 0 0 1-.65.65m6.666-6.3a.65.65 0 0 0-.65.65v5.93l-1.39-1.39-.102-.083a.65.65 0 0 0-.9.9l.082.103 2.5 2.5a.65.65 0 0 0 .92 0l2.5-2.5a.65.65 0 0 0-.92-.92l-1.39 1.39V7.5a.65.65 0 0 0-.65-.65"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
