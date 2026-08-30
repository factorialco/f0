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
export declare function BaseTag({ left, text, right, additionalAccesibleText, onClick, classNameContainer, classNameText, }: Props): import("node_modules/@types/react").JSX.Element;
export declare namespace BaseTag {
    var displayName: string;
}
export {};
//# sourceMappingURL=index.d.ts.map