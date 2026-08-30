import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { F0AvatarPulse } from '../F0AvatarPulse';
declare const daytimePageVariants: (props?: ({
    period?: "evening" | "morning" | "afternoon" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export interface DaytimePageProps extends VariantProps<typeof daytimePageVariants> {
    children?: React.ReactNode;
    header?: {
        title: string;
        description?: string;
        employeeFirstName: string;
        employeeLastName: string;
        employeeAvatar?: string;
        pulse?: ComponentProps<typeof F0AvatarPulse>["pulse"];
        onPulseClick?: ComponentProps<typeof F0AvatarPulse>["onPulseClick"];
    };
    embedded?: boolean;
    /**
     * Hides the One AI toggle in the header. Use when One is reached elsewhere
     * (e.g. a sidebar tab) so the home header doesn't show a redundant switch.
     */
    hideOneSwitch?: boolean;
}
declare function _DaytimePage({ children, header, period, embedded, hideOneSwitch, }: DaytimePageProps): import("react").JSX.Element;
declare namespace _DaytimePage {
    var displayName: string;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const DaytimePage: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _DaytimePage>;
export {};
