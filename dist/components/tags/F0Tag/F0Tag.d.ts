import { ComponentProps, ReactNode } from 'react';
import { F0TagAlert } from '../F0TagAlert';
import { F0TagBalance } from '../F0TagBalance';
import { F0TagCompany } from '../F0TagCompany';
import { TagDotProps } from '../F0TagDot';
import { F0TagPerson } from '../F0TagPerson';
import { TagRawProps } from '../F0TagRaw';
import { TagStatusProps } from '../F0TagStatus';
import { F0TagTeam } from '../F0TagTeam';
type PersonTagProps = ComponentProps<typeof F0TagPerson>;
type TeamTagProps = ComponentProps<typeof F0TagTeam>;
type CompanyTagProps = ComponentProps<typeof F0TagCompany>;
type AlertTagProps = ComponentProps<typeof F0TagAlert>;
type BalanceTagProps = ComponentProps<typeof F0TagBalance>;
interface WithTooltipDescription {
    /**
     * Optional description to show in the tooltip
     */
    description?: string;
}
type BaseTag<T extends {
    type: string;
}> = T & WithTooltipDescription;
export type TagVariant = BaseTag<{
    type: "dot";
} & TagDotProps> | BaseTag<{
    type: "person";
} & PersonTagProps> | BaseTag<{
    type: "team";
} & TeamTagProps> | BaseTag<{
    type: "company";
} & CompanyTagProps> | BaseTag<{
    type: "alert";
} & AlertTagProps> | BaseTag<{
    type: "status";
} & TagStatusProps> | BaseTag<{
    type: "balance";
} & BalanceTagProps> | BaseTag<{
    type: "raw";
} & TagRawProps>;
export declare const Tag: ({ tag }: {
    tag: TagVariant;
}) => ReactNode;
export {};
