import * as react from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { GenericActionType } from '../index.js';
import '../../../../Icon/index.js';
import 'cva';
import 'react-native-svg';
import '../../../../Tags/DotTag/index.js';
import '@factorialco/f0-core';

type GenericActionProps = {
    children: ReactNode;
    className?: string;
} & GenericActionType;
declare const GenericAction: react.MemoExoticComponent<({ children, className, ...props }: GenericActionProps) => react_jsx_runtime.JSX.Element>;

export { GenericAction, type GenericActionProps };
