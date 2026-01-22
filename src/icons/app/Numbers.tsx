import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgNumbers = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M7.65 8.5a.65.65 0 0 0-1.3 0c0 .289-.15.632-.435.915-.283.284-.626.435-.915.435a.65.65 0 0 0 0 1.3c.49 0 .956-.166 1.35-.422V15.5a.65.65 0 1 0 1.3 0zm1.7 4a.65.65 0 0 1 .65-.65h2.5a.65.65 0 1 1 0 1.3H10a.65.65 0 0 1-.65-.65m6.3-2a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0m2.206 3.334q.198-.399.31-.954a2.65 2.65 0 1 1 1.483-2.38c.001 1.504-.118 2.892-.63 3.916-.265.53-.642.976-1.166 1.285-.52.306-1.141.449-1.853.449a.65.65 0 1 1 0-1.3c.538 0 .918-.107 1.194-.27.272-.16.49-.4.662-.746"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgNumbers);
export default ForwardRef;
