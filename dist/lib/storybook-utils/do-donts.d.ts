import { FC, ReactNode } from 'react';
interface DoDontsProps {
    do: {
        description: string;
        guidelines?: Array<string>;
        children?: ReactNode;
    };
    dont: {
        description: string;
        guidelines?: Array<string>;
        children?: ReactNode;
    };
    /**
     * Stack the Do and Don't blocks vertically instead of side by side. Use it when
     * each block holds wide content (e.g. a full-width card example) that would
     * overflow a half-width column. Defaults to the side-by-side layout.
     */
    stacked?: boolean;
}
export declare const DoDonts: FC<DoDontsProps>;
export {};
