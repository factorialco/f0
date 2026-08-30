import { F0AvatarCompanyProps } from '../../../components/avatars/F0AvatarCompany';
import { F0AvatarPersonProps } from '../../../components/avatars/F0AvatarPerson';
import { F0AvatarTeamProps } from '../../../components/avatars/F0AvatarTeam';
import { Numeric, RelaxedNumericWithFormatter } from '../../../lib/numeric';
import { Level } from '../../../components/tags/F0TagAlert';
export declare const contentTypes: readonly ["text", "person", "people", "team", "company", "alert", "balance", "sparkline"];
export type ContentType = (typeof contentTypes)[number];
export type SparklineDataPoint = {
    value: number;
};
export type BalanceConfig = {
    amount: RelaxedNumericWithFormatter | Numeric;
    percentage?: (Omit<RelaxedNumericWithFormatter, "value"> & {
        value: Omit<Numeric, "units" | "unitsPosition">;
    }) | Omit<Numeric, "units" | "unitsPosition"> | null;
    invertStatus?: boolean;
    hint?: string;
};
export type AiInsightCardContent = {
    content: "text";
} | {
    content: "person";
    avatar: Pick<F0AvatarPersonProps, "firstName" | "lastName" | "src">;
} | {
    content: "people";
    avatars: Array<Pick<F0AvatarPersonProps, "firstName" | "lastName" | "src">>;
} | {
    content: "team";
    avatar: Pick<F0AvatarTeamProps, "name" | "src">;
} | {
    content: "company";
    avatar: Pick<F0AvatarCompanyProps, "name" | "src">;
} | {
    content: "alert";
    level: Level;
    alertLabel: string;
} | {
    content: "balance";
    balance: BalanceConfig;
} | {
    content: "sparkline";
    data: SparklineDataPoint[];
    label: string;
    invertStatus?: boolean;
};
export type F0AiInsightCardProps = {
    description?: string;
    heading: string;
    label?: string;
    selected?: boolean;
    onClick?: () => void;
    onAskOne?: () => void;
} & AiInsightCardContent;
