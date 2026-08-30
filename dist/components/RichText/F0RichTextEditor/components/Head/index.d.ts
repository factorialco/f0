interface HeadProps {
    fullScreenMode: boolean;
    isFullscreen: boolean;
    handleToggleFullscreen: () => void;
    disableAllButtons: boolean;
    title: string;
}
declare const Head: ({ fullScreenMode, isFullscreen, handleToggleFullscreen, disableAllButtons, title, }: HeadProps) => import("react").JSX.Element;
export { Head };
