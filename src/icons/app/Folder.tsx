import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFolder = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M11.438 6a1.96 1.96 0 0 0-1.71-1H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v6c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 19 7.12 19 8.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 16.72 20 15.88 20 14.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 7 16.88 7 15.2 7h-2.053a1.96 1.96 0 0 1-1.71-1Z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
