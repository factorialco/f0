import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgGroup = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M6 4.35A1.65 1.65 0 0 0 4.35 6v2c0 .911.739 1.65 1.65 1.65h.35v4.7H6A1.65 1.65 0 0 0 4.35 16v2c0 .911.739 1.65 1.65 1.65h2A1.65 1.65 0 0 0 9.65 18v-.35h4.7V18c0 .911.739 1.65 1.65 1.65h2A1.65 1.65 0 0 0 19.65 18v-2A1.65 1.65 0 0 0 18 14.35h-.35v-4.7H18A1.65 1.65 0 0 0 19.65 8V6A1.65 1.65 0 0 0 18 4.35h-2A1.65 1.65 0 0 0 14.35 6v.35h-4.7V6A1.65 1.65 0 0 0 8 4.35zm11 4h1a.35.35 0 0 0 .35-.35V6a.35.35 0 0 0-.35-.35h-2a.35.35 0 0 0-.35.35v2c0 .193.157.35.35.35zm-.65 1.3v4.7H16A1.65 1.65 0 0 0 14.35 16v.35h-4.7V16A1.65 1.65 0 0 0 8 14.35h-.35v-4.7H8A1.65 1.65 0 0 0 9.65 8v-.35h4.7V8c0 .911.739 1.65 1.65 1.65zm.649 6H16a.35.35 0 0 0-.35.35v2c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35v-2a.35.35 0 0 0-.35-.35h-1.001M8 8.35H6A.35.35 0 0 1 5.65 8V6A.35.35 0 0 1 6 5.65h2a.35.35 0 0 1 .35.35v2a.35.35 0 0 1-.35.35m-2 7.3h2a.35.35 0 0 1 .35.35v2a.35.35 0 0 1-.35.35H6a.35.35 0 0 1-.35-.35v-2a.35.35 0 0 1 .35-.35"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgGroup);
export default ForwardRef;
