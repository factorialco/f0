import { ComponentType, ReactElement } from 'react';
import { CountryCode } from '../lib/countries';
export type FlagComponent = ComponentType<React.SVGProps<SVGSVGElement>>;
export declare const flagsComponents: Record<string, FlagComponent>;
export declare const flagsMap: Record<CountryCode, FlagComponent>;
export declare const getFlag: (code: string) => FlagComponent | ReactElement | undefined;
export default flagsMap;
