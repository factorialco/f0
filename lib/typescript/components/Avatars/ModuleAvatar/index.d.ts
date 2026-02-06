import { type VariantProps } from "tailwind-variants";
import { IconType } from "../../Icon";
import { ModuleId } from "./modules";
declare const moduleAvatarVariants: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "relative flex shrink-0 items-center justify-center", {
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "relative flex shrink-0 items-center justify-center", unknown, unknown, undefined>>;
export type ModuleAvatarProps = VariantProps<typeof moduleAvatarVariants> & ({
    module: ModuleId;
} | {
    /**
     * @deprecated This component should only render module related icons, not arbitrary icons. The `icon` property will be removed soon. Use the `module` prop instead.
     */
    icon: IconType;
});
export declare const ModuleAvatar: {
    ({ size, ...props }: ModuleAvatarProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map