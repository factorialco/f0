import { cssInterop } from "nativewind";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { SvgProps } from "react-native-svg";

export function iconWithClassName(
  icon: ForwardRefExoticComponent<SvgProps & RefAttributes<SVGSVGElement>>,
) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}
