import { ReactNode } from "react";
import { GenericActionType } from "..";
export type GenericActionProps = {
    children: ReactNode;
    className?: string;
} & GenericActionType;
export declare const GenericAction: import("react").MemoExoticComponent<({ children, className, ...props }: GenericActionProps) => import("react").JSX.Element>;
//# sourceMappingURL=GenericAction.d.ts.map