type ActionType = "notifications";
export type ActionT = {
    type: ActionType;
    label: string;
    onPress: () => void;
    showBadge?: boolean;
};
type Props = {
    title: string;
    actions?: ActionT[];
};
export declare const PageHeader: import("react").MemoExoticComponent<({ title, actions }: Props) => import("react").JSX.Element>;
export {};
//# sourceMappingURL=index.d.ts.map