import { ForwardRefExoticComponent, RefAttributes } from "react";
import { SvgProps } from "react-native-svg";

export type IconComponent = ForwardRefExoticComponent<
  SvgProps &
    RefAttributes<SVGSVGElement> & {
      className?: string;
    }
>;
