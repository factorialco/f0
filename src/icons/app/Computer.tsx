import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgComputer = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M5 18h8M9 15v3M12.5 7H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 15 5.08 15 6.2 15h6.3"
    />
    <Path
      stroke="currentColor"
      d="M15 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C16.602 5 17.068 5 18 5s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 6.602 21 7.068 21 8v7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 18 18.932 18 18 18s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C15 16.398 15 15.932 15 15z"
    />
    <Path stroke="currentColor" strokeLinecap="round" d="M18 15v.1" />
  </Svg>
);
const ForwardRef = forwardRef(SvgComputer);
export default ForwardRef;
