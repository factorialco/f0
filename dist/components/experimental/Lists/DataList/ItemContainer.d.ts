import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactElement } from 'react';
import { IconType } from '../../../Icon/index.js';
import { ActionType } from './index.js';
import 'cva';
import 'react-native-svg';
import '../../../Tags/DotTag/index.js';
import '@factorialco/f0-core';

type ItemContainerProps = {
    leftIcon?: IconType | (() => ReactElement);
    action?: ActionType;
    text: string;
    className?: string;
};
declare const ItemContainer: (props: ItemContainerProps) => react_jsx_runtime.JSX.Element;

export { ItemContainer };
