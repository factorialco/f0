import * as react_jsx_runtime from 'react/jsx-runtime';
import * as cva from 'cva';
import { VariantProps } from 'cva';
import * as react from 'react';
import react__default, { ForwardRefExoticComponent, RefAttributes, ComponentProps, ReactNode, ReactElement } from 'react';
import * as Svg from 'react-native-svg';
import Svg__default, { SvgProps, Svg as Svg$1 } from 'react-native-svg';
import { View } from 'react-native';
import { baseColors } from '@factorialco/f0-core';

declare const iconVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
    icon: IconType;
    testID?: string;
    className?: string;
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote";
    isPressed?: boolean;
}
type IconType = ForwardRefExoticComponent<SvgProps & RefAttributes<Svg$1> & {
    className?: string;
}>;
declare function applyIconInterop(icon: IconType): IconType;
declare const Icon: react__default.ForwardRefExoticComponent<IconProps & react__default.RefAttributes<Svg$1>>;

type ActivityItemProps = {
    id: string;
    date: string;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onPress: (id: string) => void;
};
declare const ActivityItem: ({ id, date, title, description, icon, category, isUnread, onPress, }: ActivityItemProps) => react_jsx_runtime.JSX.Element;
declare const ActivityItemSkeleton: () => react_jsx_runtime.JSX.Element;

declare const sizes$1: readonly ["xsmall", "small", "medium", "large", "xlarge"];
declare const type: readonly ["base", "rounded"];
declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
type AvatarProps = react.ComponentPropsWithoutRef<typeof View> & {
    size?: (typeof sizes$1)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
    className?: string;
};
declare const Avatar$1: ({ size, type, color, className, ...props }: AvatarProps) => react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    type?: "critical" | "neutral" | "highlight" | "positive" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};
interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}
declare const Badge: ({ type, size, icon }: BadgeProps) => react_jsx_runtime.JSX.Element;

declare const modules: {
    readonly "ai-reports": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly analytics: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly ats: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly benefits: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly billing: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly calendar: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly cards: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "clock-in": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly company_attendance: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly company_documents: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly company_projects: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly company_trainings: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly compensations: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly discover: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly documents: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly employee_attendance: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly employees: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly engagement: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly engagement_insights: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_surveys: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "finance-accounting": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "finance-sales": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "finance-spending": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "finance-treasury": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "finance-workspace": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly goals: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly home: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly hub: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly kudos: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_benefits: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_documents: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_projects: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_spending: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly my_trainings: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "new-trainings": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly notifications: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly inbox: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly overviews: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly payroll_bundle: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly performance_v2: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly performance: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly playground: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly processes: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly profile: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly project_management: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly reports: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly settings: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly personal_settings: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly shift_management: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly shifts: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly social: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly software: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly space_control: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly talent_analytics: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly tasks: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly "time-tracking": react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly timeoff: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
    readonly workflows: react.ForwardRefExoticComponent<Svg.SvgProps & react.RefAttributes<Svg.default>>;
};
type ModuleId = keyof typeof modules;

type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: Exclude<BadgeProps["type"], undefined>;
    icon: BadgeProps["icon"];
}) & {
    tooltip?: string;
};

type ShadAvatarProps = ComponentProps<typeof Avatar$1>;
type Props$8 = {
    type: ShadAvatarProps["type"];
    name: string | string[];
    src?: string;
    size?: ShadAvatarProps["size"];
    color?: ShadAvatarProps["color"] | "random";
    badge?: AvatarBadge;
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">;
declare const BaseAvatar: {
    ({ src, name, size, type, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props$8): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type BaseAvatarProps$3 = ComponentProps<typeof BaseAvatar>;
type Props$7 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps$3["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps$3, "aria-label" | "aria-labelledby">;
declare const CompanyAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props$7): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type BaseAvatarProps$2 = ComponentProps<typeof BaseAvatar>;
type PersonAvatarProps$1 = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps$2["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps$2, "aria-label" | "aria-labelledby">;
declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: PersonAvatarProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type BaseAvatarProps$1 = ComponentProps<typeof BaseAvatar>;
type Props$6 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps$1["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps$1, "aria-label" | "aria-labelledby">;
declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props$6): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;
type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;
type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;
type AvatarVariant = ({
    type: "person";
} & Omit<PersonAvatarProps, "size">) | ({
    type: "team";
} & Omit<TeamAvatarProps, "size">) | ({
    type: "company";
} & Omit<CompanyAvatarProps, "size">);
declare const Avatar: ({ avatar, size, }: {
    avatar: AvatarVariant;
    size?: (typeof sizes$1)[number];
}) => ReactNode;

type Props$5 = {
    date: Date;
};
declare const DateAvatar: ({ date }: Props$5) => react_jsx_runtime.JSX.Element;

type Props$4 = {
    emoji: string;
    size?: "sm" | "md" | "lg";
    className?: string;
};
declare const EmojiAvatar: {
    ({ emoji, size, className }: Props$4): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type FileLike = {
    name: string;
    type?: string;
};

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
type Props$3 = {
    file: FileLike;
    className?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
};
declare const FileAvatar: {
    ({ file, className, size, badge, ...props }: Props$3): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type Props$2 = {
    icon: IconType;
    size?: "sm" | "md" | "lg";
    className?: string;
};
declare const IconAvatar: {
    ({ icon, size, className }: Props$2): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const moduleAvatarVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
type ModuleAvatarProps = VariantProps<typeof moduleAvatarVariants> & ({
    module: ModuleId;
} | {
    /**
     * @deprecated This component should only render module related icons, not arbitrary icons. The `icon` property will be removed soon. Use the `module` prop instead.
     */
    icon: IconType;
});
declare const ModuleAvatar: {
    ({ size, ...props }: ModuleAvatarProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];
type ButtonVariant = (typeof variants)[number];
declare const sizes: readonly ["sm", "md", "lg"];
type ButtonSize = (typeof sizes)[number];
declare const buttonVariants: (props?: ({
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
    disabled?: boolean | undefined;
    round?: boolean | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface ButtonProps extends VariantProps<typeof buttonVariants> {
    label: string;
    onPress?: () => void | Promise<unknown>;
    disabled?: boolean;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    className?: string;
    accessibilityHint?: string;
    showBadge?: boolean;
    fullWidth?: boolean;
}
declare const Button: react__default.ForwardRefExoticComponent<ButtonProps & react__default.RefAttributes<View>>;

declare const counterContainerVariants: (props?: ({
    size?: "md" | "sm" | undefined;
    type?: "default" | "bold" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterContainerVariants>;
declare function Counter({ size, type, value, maxValue }: CounterProps): react_jsx_runtime.JSX.Element;

interface ExampleComponentProps {
    /**
     * Optional custom text to display
     */
    text?: string;
}
/**
 * An example component that demonstrates system-based dark/light mode functionality
 */
declare const ExampleComponent: react__default.FC<ExampleComponentProps>;

type ActionType$1 = "notifications";
type ActionT = {
    type: ActionType$1;
    label: string;
    onPress: () => void;
    showBadge?: boolean;
};
type Props$1 = {
    title: string;
    actions?: ActionT[];
};
declare const PageHeader: react.MemoExoticComponent<({ title, actions }: Props$1) => react_jsx_runtime.JSX.Element>;

declare const chipContainerVariants: (props?: ({
    variant?: "default" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
declare const chipTextVariants: (props?: ({
    variant?: "default" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface ChipProps extends VariantProps<typeof chipContainerVariants> {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    onClose?: () => void;
}
declare const OneChip: ({ label, variant, onClick, onClose, icon, }: ChipProps) => react_jsx_runtime.JSX.Element;

interface PresetProps {
    label: string;
    number?: number;
    onClick?: () => void;
    selected?: boolean;
}
declare const OnePreset: ({ label, number, onClick, selected, }: PresetProps) => react_jsx_runtime.JSX.Element;

type Level = "info" | "warning" | "critical";
type NonEmpty<T extends string> = T extends "" ? never : T;
type Props<T extends string = string> = {
    text: NonEmpty<T>;
    level: Level;
};
declare const AlertTag: {
    <T extends string>({ text, level }: Props<T>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;
declare const dotTagColors: NewColor[];
type DotTagProps = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});
declare const DotTag: {
    ({ text, ...props }: DotTagProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

type RawTagProps = {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
    noBorder?: boolean;
    className?: string;
};
declare const RawTag: {
    ({ text, additionalAccesibleText, icon, noBorder, className, }: RawTagProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
    isHorizontalItem?: boolean;
    tableView?: boolean;
};
type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;
type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};
type ActionType = CopyActionType | GenericActionType | NoopActionType;
type CopyActionType = {
    type: "copy";
    text?: string;
};
type GenericActionType = {
    type: "generic";
    handlePress?: () => void;
};
type NoopActionType = {
    type: "noop";
};
declare const Item: ({ text, icon, action }: ItemProps) => react_jsx_runtime.JSX.Element;
type URL = string;
type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => react_jsx_runtime.JSX.Element;
type CompanyItemProps = {
    name: string;
    avatarUrl?: URL;
    action?: ActionType;
};
declare const CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => react_jsx_runtime.JSX.Element;
type TeamItemProps = {
    name: string;
    action?: ActionType;
};
declare const TeamItem: ({ action, name }: TeamItemProps) => react_jsx_runtime.JSX.Element;
type DotTagItemProps = DotTagProps;
declare const DataList: (({ children, label, isHorizontalItem, tableView, }: DataListProps) => react_jsx_runtime.JSX.Element) & {
    Item: ({ text, icon, action }: ItemProps) => react_jsx_runtime.JSX.Element;
    CompanyItem: ({ avatarUrl, name, action }: CompanyItemProps) => react_jsx_runtime.JSX.Element;
    PersonItem: ({ action, avatarUrl, firstName, lastName, }: EmployeeItemProps) => react_jsx_runtime.JSX.Element;
    TeamItem: ({ action, name }: TeamItemProps) => react_jsx_runtime.JSX.Element;
    DotTagItem: ({ ...props }: DotTagItemProps) => react_jsx_runtime.JSX.Element;
};

type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
});
interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
    isHorizontalItem?: boolean;
    tableView?: boolean;
}
declare const DetailsItem: ({ title, content, isHorizontalItem, tableView, spacingAtTheBottom, }: DetailsItemType) => react_jsx_runtime.JSX.Element;

interface DetailsItemsListProps {
    title?: string;
    tableView?: boolean;
    isHorizontalItem?: boolean;
    details: DetailsItemType[];
}
declare const DetailsItemsList: ({ title, tableView, isHorizontalItem, details, }: DetailsItemsListProps) => react_jsx_runtime.JSX.Element;

declare const ForwardRef$3s: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3r: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3p: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3o: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3n: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3m: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3l: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3k: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3j: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3i: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3h: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3g: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3f: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3e: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3d: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3c: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3b: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3a: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$39: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$38: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$37: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$36: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$35: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$34: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$33: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$32: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$31: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$30: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2$: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2_: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2Z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2Y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2X: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2W: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2V: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2U: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2T: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2S: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2R: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2Q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2P: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2O: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2N: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2M: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2L: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2K: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2J: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2I: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2H: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2G: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2F: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2E: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2D: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2C: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2B: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2A: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2x: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2w: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2v: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2u: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2t: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2s: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2r: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2p: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2o: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2n: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2m: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2l: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2k: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2j: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2i: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2h: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2g: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2f: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2e: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2d: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2c: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2b: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2a: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$29: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$28: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$27: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$26: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$25: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$24: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$23: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$22: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$21: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$20: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1$: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1_: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1Z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1Y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1X: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1W: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1V: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1U: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1T: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1S: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1R: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1Q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1P: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1O: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1N: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1M: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1L: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1K: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1J: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1I: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1H: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1G: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1F: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1E: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1D: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1C: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1B: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1A: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1x: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1w: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1v: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1u: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1t: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1s: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1r: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1p: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1o: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1n: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1m: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1l: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1k: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1j: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1i: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1h: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1g: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1f: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1e: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1d: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1c: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1b: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1a: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$19: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$18: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$17: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$16: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$15: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$14: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$13: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$12: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$11: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$10: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$$: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$_: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$Z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$Y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$X: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$W: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$V: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$U: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$T: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$S: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$R: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$Q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$P: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$O: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$N: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$M: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$L: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$K: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$J: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$I: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$H: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$G: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$F: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$E: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$D: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$C: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$B: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$A: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$z: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare namespace index$1 {
  export { ForwardRef$3i as AcademicCap, ForwardRef$3h as Add, ForwardRef$3g as Ai, ForwardRef$3d as Alert, ForwardRef$3e as AlertCircle, ForwardRef$3f as AlertCircleLine, ForwardRef$3c as AlignTextCenter, ForwardRef$3b as AlignTextJustify, ForwardRef$3a as AlignTextLeft, ForwardRef$39 as AlignTextRight, ForwardRef$38 as Appearance, ForwardRef$36 as Archive, ForwardRef$37 as ArchiveOpen, ForwardRef$3s as ArrowCycle, ForwardRef$35 as ArrowDown, ForwardRef$34 as ArrowLeft, ForwardRef$33 as ArrowRight, ForwardRef$32 as ArrowUp, ForwardRef$31 as Bank, ForwardRef$30 as BarGraph, ForwardRef$2$ as Bell, ForwardRef$2_ as Bold, ForwardRef$2Z as BookOpen, ForwardRef$2Y as Briefcase, ForwardRef$2X as Bucket, ForwardRef$2W as Building, ForwardRef$2V as Bullet, ForwardRef$2U as Calculator, ForwardRef$2Q as Calendar, ForwardRef$2T as CalendarArrowDown, ForwardRef$2S as CalendarArrowLeft, ForwardRef$2R as CalendarArrowRight, ForwardRef$2P as CameraPlus, ForwardRef$2O as ChartLine, ForwardRef$3r as ChartPie, ForwardRef$2L as Check, ForwardRef$2M as CheckCircle, ForwardRef$2N as CheckCircleLine, ForwardRef$3q as CheckDouble, ForwardRef$2K as ChevronDown, ForwardRef$2J as ChevronLeft, ForwardRef$2I as ChevronRight, ForwardRef$2H as ChevronUp, ForwardRef$2G as Circle, ForwardRef$2F as Clock, ForwardRef$2E as Code, ForwardRef$2D as Coffee, ForwardRef$2C as Comment, ForwardRef$2B as Completed, ForwardRef$2A as CreditCard, ForwardRef$2z as Cross, ForwardRef$2y as CrossedCircle, ForwardRef$2x as Crown, ForwardRef$2w as Delete, ForwardRef$2v as Deny, ForwardRef$2u as Desktop, ForwardRef$2t as DollarBill, ForwardRef$2s as DottedCircle, ForwardRef$2r as Download, ForwardRef$2q as DropdownDefault, ForwardRef$2p as DropdownOpen, ForwardRef$2n as Ellipsis, ForwardRef$2o as EllipsisHorizontal, ForwardRef$2l as Envelope, ForwardRef$2m as EnvelopeOpen, ForwardRef$2k as Exit, ForwardRef$2j as ExternalLink, ForwardRef$2i as EyeInvisible, ForwardRef$2h as EyeVisible, ForwardRef$2g as FaceNegative, ForwardRef$2f as FaceNeutral, ForwardRef$2e as FacePositive, ForwardRef$2d as FaceSuperNegative, ForwardRef$2c as FaceSuperPositive, ForwardRef$2b as Feed, ForwardRef$2a as File, ForwardRef$3p as FileFilled, ForwardRef$29 as Filter, ForwardRef$28 as Flag, ForwardRef$27 as Folder, ForwardRef$26 as Folders, ForwardRef$25 as Globe, ForwardRef$24 as Graph, ForwardRef$23 as Handshake, ForwardRef$22 as Heading1, ForwardRef$21 as Heading2, ForwardRef$20 as Heading3, ForwardRef$1$ as Heart, ForwardRef$1_ as HoldHeart, ForwardRef$1Z as Home, ForwardRef$1Y as Hub, ForwardRef$1X as Image, ForwardRef$1W as InProgressTask, ForwardRef$1V as Inbox, ForwardRef$1S as Info, ForwardRef$1T as InfoCircle, ForwardRef$1U as InfoCircleLine, ForwardRef$1R as Italic, ForwardRef$1Q as Kanban, ForwardRef$1P as Laptop, ForwardRef$1O as LayersFront, ForwardRef$1N as Lightbulb, ForwardRef$1L as Link, ForwardRef$1M as LinkRemove, ForwardRef$1K as List, ForwardRef$1J as LockLocked, ForwardRef$1I as LockUnlocked, ForwardRef$1H as LogoAvatar, ForwardRef$1G as LogoEruditai, ForwardRef$1F as LogoTravelperk, ForwardRef$1E as Masonry, ForwardRef$3o as Maximize, ForwardRef$1D as Megaphone, ForwardRef$1C as Menu, ForwardRef$1B as MessageFrown, ForwardRef$1A as MessageHeart, ForwardRef$1z as Messages, ForwardRef$1y as Microphone, ForwardRef$3n as MicrophoneNegative, ForwardRef$3m as Minimize, ForwardRef$1x as Minus, ForwardRef$1w as Mobile, ForwardRef$1u as Money, ForwardRef$1v as MoneyBag, ForwardRef$1t as MoveDown, ForwardRef$1s as MoveTop, ForwardRef$1r as MoveUp, ForwardRef$1q as Office, ForwardRef$1p as OlList, ForwardRef$1o as PalmTree, ForwardRef$1n as Paperclip, ForwardRef$1m as PartiallyCompleted, ForwardRef$1l as PauseCircle, ForwardRef$1k as Pencil, ForwardRef$1j as People, ForwardRef$1i as Person, ForwardRef$1h as Phone, ForwardRef$1g as Pin, ForwardRef$1f as PixBrazil, ForwardRef$1e as Placeholder, ForwardRef$1d as Plane, ForwardRef$1c as Plus, ForwardRef$1b as Present, ForwardRef$1a as Printer, ForwardRef$19 as Proyector, ForwardRef$18 as Question, ForwardRef$17 as Quote, ForwardRef$16 as Reaction, ForwardRef$15 as Receipt, ForwardRef$3l as Record, ForwardRef$14 as RemoveFavorite, ForwardRef$13 as Replace, ForwardRef$12 as Reset, ForwardRef$11 as Rocket, ForwardRef$10 as Salad, ForwardRef$$ as Save, ForwardRef$_ as Schedule, ForwardRef$Y as Search, ForwardRef$Z as SearchPerson, ForwardRef$X as Settings, ForwardRef$W as Share, ForwardRef$V as Sliders, ForwardRef$U as SolidPause, ForwardRef$T as SolidPlay, ForwardRef$S as SolidStop, ForwardRef$R as Sort, ForwardRef$Q as Sparkles, ForwardRef$P as Spinner, ForwardRef$O as Split, ForwardRef$M as Star, ForwardRef$N as StarFilled, ForwardRef$L as Strikethrough, ForwardRef$K as Suitcase, ForwardRef$J as Table, ForwardRef$I as Target, ForwardRef$H as TextSize, ForwardRef$G as Timer, ForwardRef$F as Underline, ForwardRef$E as Upload, ForwardRef$D as Video, ForwardRef$3k as VideoRecorder, ForwardRef$3j as VideoRecorderNegative, ForwardRef$C as Wallet, ForwardRef$B as Warning, ForwardRef$A as WhatsappChat, ForwardRef$z as Windows };
}

declare const ForwardRef$y: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$x: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$w: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$v: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$u: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$t: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$s: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$r: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$q: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$p: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$o: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$n: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$m: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$l: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$k: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$j: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$i: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$h: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$g: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$f: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$e: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$d: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$c: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$b: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$a: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$9: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$8: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$7: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$6: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$5: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$4: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$3: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$2: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef$1: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare const ForwardRef: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<Svg__default>>;

declare namespace index {
  export { ForwardRef$y as Benefits, ForwardRef$x as Calendar, ForwardRef$w as Cards, ForwardRef$v as ClockIn, ForwardRef$u as Discover, ForwardRef$t as Documents, ForwardRef$s as Engagement, ForwardRef$r as Finance, ForwardRef$q as Goals, ForwardRef$p as Home, ForwardRef$o as Hub, ForwardRef$n as Inbox, ForwardRef$m as Kudos, ForwardRef$l as MyDocuments, ForwardRef$k as Organization, ForwardRef$j as Overviews, ForwardRef$i as Payroll, ForwardRef$h as Performance, ForwardRef$g as Profile, ForwardRef$f as Projects, ForwardRef$e as Recruitment, ForwardRef$d as Reports, ForwardRef$c as Sales, ForwardRef$b as Settings, ForwardRef$a as Shifts, ForwardRef$9 as Social, ForwardRef$8 as Software, ForwardRef$7 as Spaces, ForwardRef$6 as Spending, ForwardRef$5 as Tasks, ForwardRef$4 as TimeOff, ForwardRef$3 as TimeTracking, ForwardRef$2 as Trainings, ForwardRef$1 as Treasury, ForwardRef as Workflows };
}

type IconComponent = ForwardRefExoticComponent<SvgProps & RefAttributes<SVGSVGElement> & {
    className?: string;
}>;

export { type ActionT, type ActionType, ActivityItem, type ActivityItemProps, ActivityItemSkeleton, AlertTag, index$1 as AppIcons, Avatar, type AvatarVariant, Badge, type BadgeProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, type ChipProps, CompanyAvatar, type Content, type CopyActionType, Counter, DataList, type DataListProps, DateAvatar, DetailsItem, type DetailsItemType, DetailsItemsList, type DetailsItemsListProps, DotTag, type DotTagProps, EmojiAvatar, ExampleComponent, type ExampleComponentProps, FileAvatar, type GenericActionType, Icon, IconAvatar, type IconComponent, type IconProps, type IconType, type ItemProps, ModuleAvatar, type ModuleAvatarProps, index as ModuleIcons, type NewColor, type NoopActionType, OneChip, OnePreset, PageHeader, PersonAvatar, type PersonAvatarProps$1 as PersonAvatarProps, type PresetProps, RawTag, type RawTagProps, TeamAvatar, applyIconInterop, chipContainerVariants, chipTextVariants, dotTagColors, sizes, variants };
