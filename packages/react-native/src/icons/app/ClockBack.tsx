import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgClockBack = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M10.508 4.497A7.65 7.65 0 1 1 6.591 17.41a.65.65 0 0 1 .919-.919 6.352 6.352 0 0 0 10.566-2.646 6.352 6.352 0 0 0-7.315-8.071A6.35 6.35 0 0 0 5.679 11.4l.861-.86.103-.083a.65.65 0 0 1 .9.9l-.083.103-2 2a.65.65 0 0 1-.817.083l-.103-.083-2-2-.083-.103a.65.65 0 0 1 .9-.9l.103.083.91.91a7.65 7.65 0 0 1 6.138-6.953M12 8.35a.65.65 0 0 1 .65.65v2.623l3.172 1.813.108.076a.65.65 0 0 1-.632 1.106l-.12-.053-3.5-2A.65.65 0 0 1 11.35 12V9a.65.65 0 0 1 .65-.65"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgClockBack);
export default ForwardRef;
