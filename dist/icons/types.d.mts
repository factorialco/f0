import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { SvgProps } from 'react-native-svg';

type IconComponent = ForwardRefExoticComponent<SvgProps & RefAttributes<SVGSVGElement> & {
    className?: string;
}>;

export type { IconComponent };
