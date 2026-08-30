declare const themes: readonly ["light", "dark", "system"];
export type Theme = (typeof themes)[number];
export declare const availableThemes: Theme[];
type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: Theme;
    storageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
};
export declare function ThemeProvider({ children, theme, ...props }: ThemeProviderProps): import("react").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
