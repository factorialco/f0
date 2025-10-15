import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { CopyActionType } from '../index.js';
import '../../../../Icon/index.js';
import 'cva';
import 'react-native-svg';
import '../../../../Tags/DotTag/index.js';
import '@factorialco/f0-core';

type CopyActionProps = {
    children: ReactNode;
} & CopyActionType;
declare const CopyAction: ({ text, children }: CopyActionProps) => react_jsx_runtime.JSX.Element;

export { CopyAction, type CopyActionProps };
