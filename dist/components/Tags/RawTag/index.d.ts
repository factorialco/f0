import * as react_jsx_runtime from 'react/jsx-runtime';
import { IconType } from '../../Icon/index.js';
import 'cva';
import 'react';
import 'react-native-svg';

type RawTagProps = {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
    noBorder?: boolean;
    className?: string;
};
declare const RawTag: {
    ({ text, additionalAccesibleText, icon, noBorder, className, }: RawTagProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { RawTag, type RawTagProps };
