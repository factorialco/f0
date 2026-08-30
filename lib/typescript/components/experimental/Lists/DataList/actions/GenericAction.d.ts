import { ReactNode } from "react";
import { GenericActionType } from "..";
export type GenericActionProps = {
    children: ReactNode;
    className?: string;
} & GenericActionType;
export declare const GenericAction: import("node_modules/@types/react").MemoExoticComponent<({ children, className, ...props }: GenericActionProps) => import("node_modules/@types/react").JSX.Element>;
//# sourceMappingURL=GenericAction.d.ts.map