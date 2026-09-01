import { ReactNode } from "react";
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
export declare const BaseTag: {
    ({ left, text, right, additionalAccesibleText, onClick, classNameContainer, classNameText, }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map