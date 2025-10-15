import * as react_jsx_runtime from 'react/jsx-runtime';

type Level = "info" | "warning" | "critical";
type NonEmpty<T extends string> = T extends "" ? never : T;
type Props<T extends string = string> = {
    text: NonEmpty<T>;
    level: Level;
};
declare const AlertTag: {
    <T extends string>({ text, level }: Props<T>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { AlertTag };
