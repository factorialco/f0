type ToastProviderProps = {
    children: React.ReactNode;
    portalTargets?: Record<"mobile" | "desktop", string>;
};
export declare const ToastProvider: ({ children, portalTargets, }: ToastProviderProps) => import("react").JSX.Element;
export {};
