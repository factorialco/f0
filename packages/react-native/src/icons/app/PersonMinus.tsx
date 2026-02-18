import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgPersonMinus = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M20.13 17.363a.65.65 0 0 1 0 1.274l-.13.013h-4a.65.65 0 0 1 0-1.3h4zM12 15.35c.846 0 1.59.109 2.235.28l.27.078.123.052a.65.65 0 0 1-.502 1.191 7.2 7.2 0 0 0-2.126-.3c-1.619 0-2.752.46-3.472.903a4.7 4.7 0 0 0-.789.602 3 3 0 0 0-.216.23l-.006.008v-.002a.649.649 0 0 1-1.037-.782l.359.269-.359-.27.002-.002.002-.003.007-.01.02-.025.07-.083c.06-.067.146-.16.258-.267a6 6 0 0 1 1.008-.773c.905-.557 2.272-1.096 4.153-1.096m0-11a4.65 4.65 0 1 1 0 9.301 4.65 4.65 0 0 1 0-9.301m0 1.3a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgPersonMinus);
export default ForwardRef;
