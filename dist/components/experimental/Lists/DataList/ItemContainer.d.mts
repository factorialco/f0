import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactElement } from 'react';
import { IconType } from '../../../Icon/index.mjs';
import { ActionType } from './index.mjs';
import 'cva';
import 'react-native-svg';
import '../../../Tags/DotTag/index.mjs';
import '@factorialco/f0-core';

type ItemContainerProps = {
    leftIcon?: IconType | (() => ReactElement);
    action?: ActionType;
    text: string;
    className?: string;
};
declare const ItemContainer: (props: ItemContainerProps) => react_jsx_runtime.JSX.Element;

export { ItemContainer };
