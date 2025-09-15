import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgFaceSuperPositive = (props: SvgProps, ref: Ref<Svg>) => (
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
      d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18M9 14a1 1 0 0 0-.995.898L8 15c0 .935.623 1.699 1.3 2.175.712.5 1.663.825 2.7.825s1.988-.325 2.7-.825c.677-.476 1.3-1.24 1.3-2.175a1 1 0 0 0-.898-.995L15 14zm-.25-5c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.353.231l.08.105.062.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C10.175 9.404 9.534 9 8.75 9m6.5 0c-.887 0-1.615.518-2.077 1.198l-.054.088a1 1 0 0 0 1.647 1.117l.061-.082c.196-.289.368-.321.423-.321.04 0 .172.018.352.231l.08.105.063.08a1 1 0 0 0 1.627-1.146l-.055-.086-.184-.24C16.675 9.404 16.034 9 15.25 9"
      clipRule="evenodd"
    />
  </Svg>
);
const ForwardRef = forwardRef(SvgFaceSuperPositive);
export default ForwardRef;
