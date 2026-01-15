import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgOrganization = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Circle cx={12} cy={6} r={2} stroke="currentColor" />
    <Circle cx={12} cy={18} r={2} stroke="currentColor" />
    <Circle cx={4} cy={18} r={2} stroke="currentColor" />
    <Circle cx={20} cy={18} r={2} stroke="currentColor" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v-.5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v.5M12 8v8"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgOrganization);
export default ForwardRef;
