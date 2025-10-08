import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgWhatsappChat = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 5a7 7 0 0 0-6.297 10.062l.16.328-.824 3.278 3.237-.727.333.185A7 7 0 1 0 12 5m-9 7a9 9 0 1 1 4.984 8.056l-2.507.564a2 2 0 0 1-2.378-2.44l.65-2.582A9 9 0 0 1 3 12"
    />
    <Path
      fill="currentColor"
      d="M8.941 8h1.544a.5.5 0 0 1 .464.314l.658 1.644a.5.5 0 0 1-.207.614l-.812.487a5.18 5.18 0 0 0 2.353 2.353l.487-.812a.5.5 0 0 1 .614-.207l1.644.658a.5.5 0 0 1 .314.464v1.544a.94.94 0 0 1-.941.941A7.53 7.53 0 0 1 8 8.941.94.94 0 0 1 8.941 8"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgWhatsappChat);
export default ForwardRef;
