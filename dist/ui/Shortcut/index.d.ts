import { VariantProps } from 'cva';
declare const shortcutVariants: (props?: ({
    variant?: "inverse" | "default" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}
declare function _Shortcut({ keys, variant }: ShortcutProps): import("react").JSX.Element | null;
/**
 * @experimental This is an experimental component use it at your own risk
 */
declare const Shortcut: import('../../lib/data-testid').WithDataTestIdReturnType<typeof _Shortcut>;
export { Shortcut };
