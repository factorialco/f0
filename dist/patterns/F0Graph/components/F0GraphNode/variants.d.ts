export declare const graphNodeContainerVariants: (props?: ({
    variant?: "compact" | "dot" | "detail" | undefined;
    state?: "selected" | "default" | "highlighted" | "dimmed" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export declare const graphNodeSlotVisibility: {
    readonly avatar: {
        readonly detail: "block";
        readonly compact: "block";
        readonly dot: "block";
    };
    readonly title: {
        readonly detail: "block";
        readonly compact: "block";
        readonly dot: "hidden";
    };
    readonly subtitle: {
        readonly detail: "block";
        readonly compact: "hidden";
        readonly dot: "hidden";
    };
    readonly tags: {
        readonly detail: "flex";
        readonly compact: "hidden";
        readonly dot: "hidden";
    };
};
