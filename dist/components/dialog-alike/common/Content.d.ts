export type ContentProps = {
    children: React.ReactNode;
    /**
     * Disable the default padding from the dialog content area
     * @default false
     */
    disableContentPadding?: boolean;
};
export declare const Content: ({ children, disableContentPadding, }: ContentProps) => import("react").JSX.Element;
