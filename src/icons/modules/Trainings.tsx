import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgTrainings = (props: SvgProps, ref: Ref<Svg>) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    ref={ref}
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 6.83C10.748 6.076 9.515 5.3 8.277 5.3c-1.414 0-2.715.547-3.943 1.53A.89.89 0 0 0 4 7.524v8.373c0 .765.464 1.328.998 1.615.524.282 1.198.35 1.81.094 1.354-.569 2.815-.38 4.698.88.299.199.689.199.988 0 1.883-1.26 3.344-1.449 4.699-.88.61.256 1.285.188 1.81-.094.533-.287.997-.85.997-1.615V7.524a.89.89 0 0 0-.334-.694c-1.228-.983-2.529-1.53-3.943-1.53-1.239 0-2.471.776-3.723 1.53"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgTrainings);
export default ForwardRef;
