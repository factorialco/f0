import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTreasury = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.77 3.054c.151-.036.309-.036.46 0l7.5 1.765a1 1 0 0 1 .77.973V8a1 1 0 0 1-1 1h-.85v7h.85a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.85V9H4.5a1 1 0 0 1-1-1V5.792a1 1 0 0 1 .77-.973zM10.65 16h2.7V9h-2.7zm4 0h2.7V9h-2.7zm-8 0h2.7V9h-2.7z"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTreasury);
export default ForwardRef;
