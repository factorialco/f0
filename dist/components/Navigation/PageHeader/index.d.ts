import * as react from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ActionType = "notifications";
type ActionT = {
    type: ActionType;
    label: string;
    onPress: () => void;
    showBadge?: boolean;
};
type Props = {
    title: string;
    actions?: ActionT[];
};
declare const PageHeader: react.MemoExoticComponent<({ title, actions }: Props) => react_jsx_runtime.JSX.Element>;

export { type ActionT, PageHeader };
