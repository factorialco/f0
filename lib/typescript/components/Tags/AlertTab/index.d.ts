type Level = "info" | "warning" | "critical";
type NonEmpty<T extends string> = T extends "" ? never : T;
type Props<T extends string = string> = {
    text: NonEmpty<T>;
    level: Level;
};
export declare const AlertTag: {
    <T extends string>({ text, level }: Props<T>): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map