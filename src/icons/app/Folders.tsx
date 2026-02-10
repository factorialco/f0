import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFolders = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="M10.438 5a1.96 1.96 0 0 0-1.71-1H7.13c-1.054 0-1.581 0-1.988.194a2 2 0 0 0-.948.948C4 5.549 4 6.076 4 7.13v4.07c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 16 7.12 16 8.8 16h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 13.72 18 12.88 18 11.2v-.783c0-1.32 0-1.98-.204-2.504a3 3 0 0 0-1.709-1.709C15.563 6 14.903 6 13.583 6h-1.436a1.96 1.96 0 0 1-1.71-1Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7 19h4.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C21 14.44 21 12.76 21 9.4V9"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFolders);
export default ForwardRef;
