import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPig = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M16.996 5.392c-.529 0-1.038.201-1.424.562l-.31.29c-.408.38-.966.54-1.523.54h-2.782a6.26 6.26 0 0 0-5.013 10.01c.475.633.84 1.367.84 2.159v.35c0 .768.622 1.391 1.39 1.391h1.995c.489 0 .941-.256 1.193-.675l.143-.239a.983.983 0 0 1 1.685 0l.144.239c.251.419.704.675 1.192.675h1.995c.768 0 1.391-.623 1.391-1.39v-.876c0-.457.203-.886.507-1.228.357-.4.848-.68 1.385-.68h.195c.768 0 1.39-.622 1.39-1.39v-1.391c0-.768-.622-1.391-1.39-1.391a.043.043 0 0 1-.043-.038 6.25 6.25 0 0 0-2.044-3.933V6.088a.696.696 0 0 0-.695-.696z"
    />
    <Rect
      width={1.391}
      height={1.391}
      x={14.782}
      y={11.305}
      fill="currentColor"
      stroke="currentColor"
      rx={0.696}
    />
    <Path
      fill="currentColor"
      d="M3.26 10.261a.65.65 0 1 0-1.3 0zm1.472 2.678-.107-.641a1 1 0 0 1-.798-.214c-.247-.207-.567-.69-.567-1.823h-1.3c0 1.371.394 2.285 1.033 2.82.626.523 1.363.58 1.846.5z"
    />
    <Rect
      width={3.478}
      height={3.478}
      x={8.87}
      y={3.306}
      stroke="currentColor"
      rx={1.739}
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPig);
export default ForwardRef;
