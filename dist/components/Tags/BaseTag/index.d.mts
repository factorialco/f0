import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type Props = {
    additionalAccesibleText?: string;
    onClick?: () => void;
    classNameContainer?: string;
    classNameText?: string;
} & ({
    left: ReactNode;
    text?: string;
    right?: ReactNode;
} | {
    left?: ReactNode;
    text: string;
    right?: ReactNode;
});
declare const BaseTag: {
    ({ left, text, right, additionalAccesibleText, onClick, classNameContainer, classNameText, }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { BaseTag };
