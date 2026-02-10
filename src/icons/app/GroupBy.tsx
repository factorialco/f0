import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgGroupBy = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M3.35 16.5a2.15 2.15 0 0 0 2.15 2.15h1a2.15 2.15 0 0 0 2.15-2.15v-1a2.15 2.15 0 0 0-2.15-2.15h-1a2.15 2.15 0 0 0-2.15 2.15zm2.15.85a.85.85 0 0 1-.85-.85v-1c0-.47.38-.85.85-.85h1c.47 0 .85.38.85.85v1c0 .47-.38.85-.85.85zm3.85-.85a2.15 2.15 0 0 0 2.15 2.15h1a2.15 2.15 0 0 0 2.15-2.15v-1a2.15 2.15 0 0 0-2.15-2.15h-1a2.15 2.15 0 0 0-2.15 2.15zm2.15.85a.85.85 0 0 1-.85-.85v-1c0-.47.38-.85.85-.85h1c.47 0 .85.38.85.85v1c0 .47-.38.85-.85.85zm6 1.3a2.15 2.15 0 0 1-2.15-2.15v-1a2.15 2.15 0 0 1 2.15-2.15h1a2.15 2.15 0 0 1 2.15 2.15v1a2.15 2.15 0 0 1-2.15 2.15zm-.85-2.15c0 .47.38.85.85.85h1c.47 0 .85-.38.85-.85v-1a.85.85 0 0 0-.85-.85h-1a.85.85 0 0 0-.85.85zm-13.3-8a2.15 2.15 0 0 0 2.15 2.15h13a2.15 2.15 0 0 0 2.15-2.15v-1a2.15 2.15 0 0 0-2.15-2.15h-13A2.15 2.15 0 0 0 3.35 7.5zm2.15.85a.85.85 0 0 1-.85-.85v-1c0-.47.38-.85.85-.85h13c.47 0 .85.38.85.85v1c0 .47-.38.85-.85.85z"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgGroupBy);
export default ForwardRef;
