import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { SvgProps } from 'react-native-svg';

declare function iconWithClassName(icon: ForwardRefExoticComponent<SvgProps & RefAttributes<SVGSVGElement>>): void;

export { iconWithClassName };
