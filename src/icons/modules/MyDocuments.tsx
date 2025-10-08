import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMyDocuments = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M3 6.55a2.7 2.7 0 0 1 2.7-2.7h4.757A2.443 2.443 0 0 1 12.9 6.293c0 .142.115.257.257.257H17.4a3.6 3.6 0 0 1 3.6 3.6v5.4a3.6 3.6 0 0 1-3.6 3.6H6.6a3.6 3.6 0 0 1-3.6-3.6zm11.118 4.394a2.144 2.144 0 1 1-4.289 0 2.144 2.144 0 0 1 4.289 0m-2.145 2.919c-1.203 0-2.264.567-3.081 1.21-.847.668-.284 1.827.795 1.827h4.573c1.079 0 1.642-1.159.795-1.826-.817-.644-1.878-1.211-3.081-1.211"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMyDocuments);
export default ForwardRef;
