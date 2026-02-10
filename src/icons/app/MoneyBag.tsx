import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgMoneyBag = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      d="m5.55 14.121.714-4A5 5 0 0 1 11.186 6h1.628a5 5 0 0 1 4.922 4.121l.714 4A5 5 0 0 1 13.528 20h-3.056a5 5 0 0 1-4.922-5.879ZM10.326 2.5h3.348a1 1 0 0 1 .962 1.275L14 6h-4l-.636-2.225a1 1 0 0 1 .962-1.275Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      d="M14 10h-2.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H10M12 16v1M12 9v1"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;
