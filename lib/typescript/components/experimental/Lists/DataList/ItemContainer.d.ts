import { ReactElement } from "react";
import { IconType } from "../../../Icon";
import { ActionType } from ".";
type ItemContainerProps = {
    leftIcon?: IconType | (() => ReactElement);
    action?: ActionType;
    text: string;
    className?: string;
};
export declare const ItemContainer: (props: ItemContainerProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=ItemContainer.d.ts.map