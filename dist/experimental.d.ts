import { AIMessage } from '@copilotkit/shared';
import { AlertAvatarProps as AlertAvatarProps_2 } from '../../f0';
import { AlertTagCellValue } from './types/alertTag';
import { AlertTagCellValue as AlertTagCellValue_2 } from '../../value-display/types/alertTag';
import { AmountCellValue } from './types/amount';
import { AmountCellValue as AmountCellValue_2 } from '../../value-display/types/amount';
import { AnchorHTMLAttributes } from 'react';
import { AreaChartWidgetProps } from './AreaChartWidget';
import { AriaAttributes } from 'react';
import { AutoFill as AutoFill_2 } from 'react';
import { AvatarListCellValue } from './types/avatarList';
import { AvatarListCellValue as AvatarListCellValue_2 } from '../../value-display/types/avatarList';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { BarChartProps } from '../../../components/Charts/BarChart';
import { baseColors } from '@factorialco/f0-core';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'cva';
import { CompanyCellValue } from './types/company';
import { CompanyCellValue as CompanyCellValue_2 } from '../../value-display/types/company';
import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { CopilotKitProps } from '@copilotkit/react-core';
import { CountryCellValue } from './types/country';
import { DateCellValue } from './types/date';
import { DateCellValue as DateCellValue_2 } from '../../value-display/types/date';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { DotTagCellValue } from './types/dotTag';
import { DotTagCellValue as DotTagCellValue_2 } from '../../value-display/types/dotTag';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Editor } from '@tiptap/react';
import { F0SelectProps as F0SelectProps_2 } from './types';
import { f1Colors } from '@factorialco/f0-core';
import { FC } from 'react';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { FileCellValue } from './types/file';
import { FileCellValue as FileCellValue_2 } from '../../value-display/types/file';
import { FolderCellValue } from './types/folder';
import { FolderCellValue as FolderCellValue_2 } from '../../value-display/types/folder';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributeAnchorTarget } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { IconCellValue } from './types/icon';
import { IconType as IconType_2 } from '../../f0';
import { InFilterOptions } from './InFilter/types';
import { InputProps as InputProps_2 } from '@copilotkit/react-ui';
import { JSONContent } from '@tiptap/react';
import { JSONContent as JSONContent_2 } from '@tiptap/core';
import { JSX as JSX_2 } from 'react';
import { LineChartProps } from '../../../components/Charts/LineChart';
import { LongTextCellValue } from './types/longText';
import { Message as Message_2 } from '@copilotkit/shared';
import { NumberCellValue } from './types/number';
import { NumberCellValue as NumberCellValue_2 } from '../../value-display/types/number';
import { NumberFilterOptions } from './NumberFilter/NumberFilter';
import { Observable } from 'zen-observable-ts';
import { Path } from 'react-hook-form';
import { PercentageCellValue } from './types/percentage';
import { PersonCellValue } from './types/person';
import { PersonCellValue as PersonCellValue_2 } from '../../value-display/types/person';
import { PieChartProps } from '../../../components/Charts/PieChart';
import { PopoverProps } from '@radix-ui/react-popover';
import { ProgressBarCellValue } from './types/progressBar';
import { ProgressBarCellValue as ProgressBarCellValue_2 } from '../../value-display/types/progressBar';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { SearchFilterOptions } from './SearchFilter/SearchFilter';
import { StatusCellValue } from './types/status';
import { StatusCellValue as StatusCellValue_2 } from '../../value-display/types/status';
import { SVGProps } from 'react';
import { SyncStatusCellValue } from './types/syncStatus';
import { TagCellValue } from './types/tag';
import { TagCellValue as TagCellValue_2 } from '../../value-display/types/tag';
import { TagListCellValue } from './types/tagList';
import { TagListCellValue as TagListCellValue_2 } from '../../value-display/types/tagList';
import { TeamCellValue } from './types/team';
import { TeamCellValue as TeamCellValue_2 } from '../../value-display/types/team';
import { TextCellValue } from './types/text';
import { TextCellValue as TextCellValue_2 } from '../../value-display/types/text';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { useForm } from 'react-hook-form';
import { UseFormHandleSubmit } from 'react-hook-form';
import { UseFormProps } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { ValueDisplayRendererContext as ValueDisplayRendererContext_2 } from '../../value-display';
import { VariantProps } from 'cva';
import { VerticalBarChartProps } from '../../../components/Charts/VerticalBarChart';
import { WidgetProps as WidgetProps_2 } from '../Widget';
import { z } from 'zod';
import { ZodType } from 'zod';

declare type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: F0ButtonProps["variant"];
    disabled?: boolean;
};

declare type Action_2 = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: "default" | "outline" | "promote";
};

export declare type ActionBarGroup = {
    label?: string;
    items: ActionBarItem[];
};

export declare type ActionBarItem = ActionType_2;

declare type ActionBaseProps = ActionCommonProps & DataAttributes;

declare type ActionButtonProps = ActionBaseProps & {
    type?: ButtonType;
    href?: never;
    target?: never;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

declare type ActionButtonVariant = (typeof actionButtonVariants)[number];

declare const actionButtonVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai"];

declare interface ActionCommonProps {
    /**
     * Tooltip
     */
    tooltip?: string | false;
    /**
     * The variant of the action.
     */
    variant?: ActionVariant;
    /**
     * The children of the action.
     */
    children: ReactNode;
    /**
     * The prepend of the action.
     */
    prepend?: ReactNode;
    /**
     * The append of the action.
     */
    append?: ReactNode;
    /**
     * The prepend outside (next to the button) of the action.
     */
    prependOutside?: ReactNode;
    /**
     * The append outside of the action.
     */
    appendOutside?: ReactNode;
    /**
     * The disabled state of the action.
     */
    disabled?: boolean;
    /**
     * The loading state of the action.
     */
    loading?: boolean;
    /**
     * The pressed state of the action.
     */
    pressed?: boolean;
    /**
     * The class name of the action.
     */
    className?: string;
    /**
     * The size of the action.
     */
    size?: ActionSize;
    /**
     * The font size of the action.
     */
    fontSize?: FontSize;
    /**
     * The render mode.
     * @default "default"
     */
    mode?: "default" | "only";
    /**
     * The title of the action.
     */
    title?: string;
    /**
     * make the left and right padding of the action smaller.
     */
    compact?: boolean;
    /**
     * The aria label of the action.
     */
    "aria-label"?: string;
    /**
     * The tab index of the action.
     */
    tabIndex?: number;
    /**
     * Mouse enter event handler.
     */
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    /**
     * Mouse leave event handler.
     */
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export declare type ActionDefinition = DropdownItemSeparator | (Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    onClick: () => void;
    enabled?: boolean;
    type?: "primary" | "secondary" | "other";
});

export declare const ActionItem: ({ title, status, inGroup }: ActionItemProps) => JSX_2.Element;

export declare interface ActionItemProps {
    title: string;
    status?: "inProgress" | "executing" | "completed";
    inGroup?: boolean;
}

declare type ActionLinkProps = ActionBaseProps & {
    href: string;
    target?: NavTarget;
    rel?: string;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
};

declare type ActionProps = ActionLinkProps | ActionButtonProps;

declare type ActionProps_2 = {
    buttonType: "gradient" | "internal";
    label: string;
    onClick: () => void;
    isLoading: boolean;
    buttonVariant?: ButtonVariant;
    icon?: IconType;
};

declare type ActionProps_3 = {
    /**
     * The label of the action
     */
    label: string;
    /**
     * The click handler of the action
     */
    onClick: () => void;
    /**
     * The variant of the action
     * @default "default"
     * @optional
     */
    variant?: "default" | "outline" | "promote";
    /**
     * The icon of the action
     * @optional
     */
    icon?: IconType;
} & ({
    /**
     * The type of the action
     */
    type: "upsell";
    /**
     * The error message of the action
     */
    errorMessage: ErrorMessageProps;
    /**
     * The success message of the action
     */
    successMessage: SuccessMessageProps;
    /**
     * The loading state of the action
     */
    loadingState: LoadingStateProps;
    /**
     * The next steps of the action
     */
    nextSteps: NextStepsProps;
    /**
     * The next steps of the action
     */
    closeLabel: string;
} | {
    /**
     * The type of the action
     */
    type?: "default";
});

declare type ActionSize = (typeof actionSizes)[number];

declare const actionSizes: readonly ["sm", "md", "lg"];

export declare type ActionType = "duplicate" | "delete";

export declare type actionType = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant: "default" | "outline" | "neutral" | undefined;
    icon?: IconType;
};

declare type ActionType_2 = {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    disabled?: boolean;
    critical?: boolean;
    description?: string;
};

declare type actionType_2 = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: IconType;
    hideLabel?: boolean;
    variant?: "default" | "outline" | "neutral";
};

declare type ActionType_3 = CopyActionType | NavigateActionType | OpenLinkActionType;

declare type ActionVariant = (typeof actionVariants)[number];

declare const actionVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai", "link", "unstyled", "mention"];

export declare const ActivityItemList: (({ items, loadingMoreItems, onClickItem, onEndReached, onEndReachedItemsThreshold, }: ActivityItemListProps) => default_2.JSX.Element) & {
    Skeleton: () => default_2.JSX.Element;
};

export declare type ActivityItemListProps = Pick<SectionProps_2, "items" | "onClickItem"> & {
    onEndReached?: () => void;
    onEndReachedItemsThreshold?: number;
    loadingMoreItems?: boolean;
};

export declare const ActivityItemListSkeleton: () => default_2.JSX.Element;

declare type ActivityItemProps = {
    id: string;
    createdAt: Date;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onClick: (id: string) => void;
    onVisible?: (id: string) => void;
};

declare type AiBannerAction = {
    label: string;
    onClick: () => void;
    icon?: IconType;
};

declare interface AiBannerInternalProps {
    title: string;
    onClose?: () => void;
    content: string;
    primaryAction?: AiBannerAction;
    secondaryAction?: AiBannerAction;
}

declare interface AiBannerSkeletonProps {
    compact?: boolean;
}

declare interface AIBlockConfig {
    buttons?: AIButton[];
    onClick: (type: string) => Promise<JSONContent_2 | null>;
    title: string;
}

declare interface AIBlockLabels {
    reset: string;
    resetDescription: string;
    deleteBlock: string;
    expand: string;
    collapse: string;
}

declare type AIButton = {
    type: string;
    emoji: string;
    label: string;
    icon: IconType;
    editable?: boolean;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AiChat: () => JSX_2.Element | null;

export declare const AiChatOneIcon: ForwardRefExoticComponent<Omit<OneIconProps, "ref"> & RefAttributes<SVGSVGElement>>;

export declare const AiChatProvider: ({ enabled, greeting, initialMessage, welcomeScreenSuggestions, onThumbsUp, onThumbsDown, fileValidation, onFilesRejected, children, agent, ...copilotKitProps }: AiChatProviderProps) => JSX_2.Element;

export declare type AiChatProviderProps = {
    enabled?: boolean;
    greeting?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    /**
     * Configuration for file validation. When provided, enables file uploads in the chat.
     */
    fileValidation?: FileValidationConfig;
    /**
     * Callback when files are rejected during attachment validation
     */
    onFilesRejected?: (rejectedFiles: RejectedFile[]) => void;
} & Pick<CopilotKitProps, "agent" | "credentials" | "children" | "runtimeUrl" | "showDevConsole" | "threadId" | "headers">;

declare type AiChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    tmp_setAgent: (agent?: string) => void;
    placeholders: string[];
    setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>;
    /**
     * Whether file uploads are enabled. True when fileValidation is provided.
     * Use this to conditionally show/hide file upload UI.
     */
    fileUploadsEnabled: boolean;
    /**
     * Set the amount of minutes after which the chat will be cleared automatically
     * Set `null` to disable auto-clearing
     *
     * @default 15
     */
    setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>;
    autoClearMinutes: number | null;
    /**
     * The initial message to display in the chat
     */
    initialMessage?: string | string[];
    setInitialMessage: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
    welcomeScreenSuggestions: WelcomeScreenSuggestion[];
    setWelcomeScreenSuggestions: React.Dispatch<React.SetStateAction<WelcomeScreenSuggestion[]>>;
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    /**
     * Clear/reset the chat conversation
     */
    clear: () => void;
    /* Excluded from this release type: setClearFunction */
    /**
     * Send a message to the chat. If onBeforeSend is configured and there are
     * attachments, they will be processed before the message is sent.
     * @param message - The message content as a string, or a full Message object
     */
    sendMessage: (message: string | Message_2) => Promise<void>;
    /* Excluded from this release type: setSendMessageFunction */
    /**
     * Files attached to the current message (before sending)
     */
    attachments: File[];
    /**
     * Add a single file attachment
     */
    addAttachment: (file: File) => void;
    /**
     * Add multiple file attachments
     */
    addAttachments: (files: File[]) => void;
    /**
     * Remove an attachment by index
     */
    removeAttachment: (index: number) => void;
    /**
     * Clear all attachments
     */
    clearAttachments: () => void;
    /* Excluded from this release type: setOnBeforeSend */
    /**
     * Trigger the file input to open the file picker dialog.
     * Use this to programmatically open the file picker (e.g., from a suggestion button).
     */
    triggerFileInput: () => void;
    /* Excluded from this release type: setFileInputRef */
} & Pick<AiChatState, "greeting" | "agent">;

declare interface AiChatState {
    greeting?: string;
    enabled: boolean;
    agent?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    placeholders?: string[];
    setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>;
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    /**
     * Callback when files are rejected during attachment validation
     */
    onFilesRejected?: (rejectedFiles: RejectedFile[]) => void;
    /**
     * Configuration for file validation. If not provided, all files are accepted.
     */
    fileValidation?: FileValidationConfig;
    /**
     * Callback invoked before sending a message. Allows processing attachments
     * and modifying the message content. The callback receives the original message
     * and current attachments, and should return the (possibly modified) message
     * to send.
     *
     * Use this to upload files, extract content, or enrich messages before sending.
     *
     * @param message - The original message content
     * @param attachments - Array of files attached to the message
     * @returns Promise with the processed message and optional metadata
     */
    onBeforeSend?: (message: string, attachments: File[]) => Promise<BeforeSendResult>;
}

export declare const AiChatTextarea: ({ submitLabel, inProgress, onSend: _onSend, onStop, }: ChatTextareaProps) => JSX_2.Element;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AiPromotionChat: () => JSX_2.Element | null;

export declare const AiPromotionChatProvider: ({ enabled, greeting, title, description, benefits, actions, onShow, onHide, children, }: AiPromotionChatProviderProps) => JSX_2.Element;

export declare type AiPromotionChatProviderProps = {
    enabled?: boolean;
    greeting?: string;
    title?: string;
    description?: string;
    benefits?: {
        noBoldText: string;
        boldText: string;
    }[];
    actions?: ActionProps_2[];
    onShow?: () => void;
    onHide?: () => void;
    children: React.ReactNode;
};

declare type AiPromotionChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Set the amount of minutes after which the chat will be cleared automatically
     * Set `null` to disable auto-clearing
     *
     * @default 15
     */
    setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>;
    autoClearMinutes: number | null;
    /**
     * Clear/reset the chat conversation
     */
    clear: () => void;
    /* Excluded from this release type: setClearFunction */
} & Pick<AiPromotionChatState, "greeting" | "title" | "description" | "benefits" | "actions" | "onShow" | "onHide">;

declare interface AiPromotionChatState {
    enabled: boolean;
    greeting?: string;
    title?: string;
    description?: string;
    benefits?: {
        noBoldText: string;
        boldText: string;
    }[];
    actions?: ActionProps_2[];
    onShow?: () => void;
    onHide?: () => void;
}

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "warning" | "positive" | "destructive" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

declare type AlertAvatarProps = VariantProps<typeof alertAvatarVariants> & {
    type: (typeof alertAvatarTypes)[number];
    size?: (typeof alertAvatarSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

declare const alertAvatarSizes: readonly ["sm", "md", "lg"];

declare const alertAvatarTypes: readonly ["critical", "warning", "info", "positive"];

declare const alertAvatarVariants: (props?: ({
    type?: "info" | "critical" | "warning" | "positive" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare interface AlertProps extends VariantProps<typeof alertVariants> {
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    link?: {
        label: string;
        href: string;
    };
    icon?: IconType;
    variant: AlertVariant;
}

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare type AlertVariant = "info" | "warning" | "critical" | "neutral" | "positive";

declare const alertVariants: (props?: ({
    variant?: "info" | "critical" | "warning" | "positive" | "neutral" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function ApplicationFrame({ children, sidebar, banner, ai, aiPromotion, }: ApplicationFrameProps): JSX_2.Element;

export declare interface ApplicationFrameProps {
    ai?: Omit<AiChatProviderProps, "children">;
    aiPromotion?: Omit<AiPromotionChatProviderProps, "children">;
    banner?: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

declare const ApprovalStep: FC<ApprovalStepProps>;

declare type ApprovalStepProps = {
    title: string;
    approvalsRequired?: number;
    status: Status;
    approvers: Approver[];
};

declare type Approver = {
    firstName: string;
    lastName: string;
    avatar?: string;
    status: Status;
};

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | undefined;
gap?: "0" | "1" | "2" | "3" | "4" | "lg" | "md" | "sm" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "px" | "xl" | "0.5" | "1.5" | "2.5" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

declare type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: Exclude<BadgeProps["type"], undefined>;
    icon: BadgeProps["icon"];
}) & {
    tooltip?: string;
};

declare const avatarEmojiSizes: readonly ["sm", "md", "lg", "xl"];

declare type AvatarFileSize = (typeof avatarFileSizes)[number];

declare const avatarFileSizes: readonly ["xs", "sm", "md", "lg"];

declare const avatarIconSizes: readonly ["sm", "md", "lg"];

declare type AvatarSize = (typeof avatarSizes)[number];

declare const avatarSizes: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];

declare type AvatarVariant = DistributiveOmit<({
    type: "person";
} & F0AvatarPersonProps) | ({
    type: "emoji";
} & F0AvatarEmojiProps) | ({
    type: "team";
} & F0AvatarTeamProps) | ({
    type: "company";
} & F0AvatarCompanyProps) | ({
    type: "file";
} & F0AvatarFileProps) | ({
    type: "flag";
} & F0AvatarFlagProps) | ({
    type: "icon";
} & F0AvatarIconProps), "size">;

declare type AvatarVariant_2 = ({
    type: "person";
} & Omit<F0AvatarPersonProps, "size">) | ({
    type: "team";
} & Omit<F0AvatarTeamProps, "size">) | ({
    type: "company";
} & Omit<F0AvatarCompanyProps, "size">) | ({
    type: "file";
} & Omit<F0AvatarFileProps, "size">) | ({
    type: "flag";
} & Omit<F0AvatarFlagProps, "size">) | ({
    type: "emoji";
} & Omit<F0AvatarEmojiProps, "size">) | ({
    type: "icon";
} & Omit<F0AvatarIconProps, "size">);

export declare const Badge: ({ type, size, icon }: BadgeProps) => JSX_2.Element;

export declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    type?: VariantProps<typeof badgeVariants>["type"];
    size?: keyof typeof iconSizes;
}

declare const badgeVariants: (props?: ({
    type?: "critical" | "warning" | "positive" | "neutral" | "highlight" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare type BannerAction = {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline" | "ghost";
    icon?: IconType;
};

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const BaseActivityItemList: ({ items, loadingMoreItems, onClickItem, onEndReached, onEndReachedItemsThreshold, }: ActivityItemListProps) => default_2.JSX.Element;

declare const BaseAvatar: ForwardRefExoticComponent<BaseAvatarProps & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = {
    /**
     * The type of the avatar.
     */
    type: InternalAvatarProps["type"];
    /**
     * The name of the avatar.
     */
    name: string | string[];
    /**
     * The source of the avatar's image.
     */
    src?: string;
    /**
     * This is a workaround until we implement the ability to deal with images
     */
    flag?: ReactElement;
    /**
     * Optional icon to display on the avatar. Will override the name or image if provided.
     */
    icon?: {
        icon: IconType;
        color?: F0IconProps["color"];
    };
    /**
     * The color of the avatar.
     * @default "random"
     */
    color?: InternalAvatarProps["color"] | "random";
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Partial<Pick<InternalAvatarProps, "aria-label" | "aria-labelledby">> & ({
    size: AvatarSize;
} | {
    /**
     * @deprecated Use AvatarSize instead (xs, sm, md, lg, xl, 2xl)
     */
    size: InternalAvatarProps["size"];
});

declare type BaseAvatarProps_2 = ComponentProps<typeof BaseAvatar>;

export declare const BaseBanner: ForwardRefExoticComponent<BaseBannerProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
};

export declare type BaseBannerProps = {
    title: string;
    subtitle?: string;
    mediaUrl: string;
    primaryAction?: BannerAction;
    secondaryAction?: BannerAction;
    onClose?: () => void;
    isLoading?: boolean;
    children?: React.ReactNode;
    variant?: "default" | "full-width";
};

export declare const BaseCelebration: ({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element;

declare type BaseColor = keyof typeof baseColors;

export declare const BaseCommunityPost: ({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noReactionsButton, }: CommunityPostProps) => JSX_2.Element;

/**
 * Base data adapter configuration for non-paginated collections
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type BaseDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends BaseFetchOptions<Filters>, FetchReturn = BaseResponse<R>> = {
    /** Indicates this adapter doesn't use pagination */
    paginationType?: never | undefined;
    /**
     * Function to fetch data based on filter options
     * @param options - The filter options to apply when fetching data
     * @returns Array of records, promise of records, or observable of records
     */
    fetchData: (options: Options) => FetchReturn | Promise<FetchReturn> | Observable<PromiseState<FetchReturn>>;
};

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export declare type BaseFetchOptions<Filters extends FiltersDefinition> = {
    /** Currently applied filters */
    filters: FiltersState<Filters>;
    sortings: SortingsStateMultiple;
    search?: string;
};

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
declare type BaseFilterDefinition<T extends FilterTypeKey> = {
    /** Human-readable label for the filter */
    label: string;
    /** The type of filter */
    type: T;
    /**
     * Whether to hide the selector for this filter
     */
    hideSelector?: boolean;
};

declare function BaseHeader({ title, avatar, deactivated, description, primaryAction, secondaryActions, otherActions, status, metadata, }: BaseHeaderProps_2): JSX_2.Element;

declare type BaseHeaderProps = ComponentProps<typeof BaseHeader>;

declare interface BaseHeaderProps_2 {
    title: string;
    deactivated?: boolean;
    avatar?: {
        type: "generic";
        name: string;
        src?: string;
    } | AvatarVariant;
    description?: string;
    primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>;
    secondaryActions?: HeaderSecondaryAction[];
    otherActions?: (DropdownItem & {
        isVisible?: boolean;
    })[];
    status?: {
        label: string;
        text: string;
        variant: StatusVariant;
        actions?: MetadataAction[];
    };
    metadata?: MetadataProps["items"];
}

/**
 * Represents a base structure for paginated API responses, providing
 * details about the records on the current page and pagination metadata.
 *
 * @template R The type of each record in the paginated response.
 *
 * @property {number} total The total number of records available.
 * @property {number} perPage The number of records displayed per page.
 */
export declare type BasePaginatedResponse<R> = BaseResponse<R> & {
    /** Total number of records available */
    total: number;
    /** Number of records per page */
    perPage: number;
};

export declare type BaseQuestionOnChangeParams = {
    id: string;
    title?: string;
    description?: string;
    required?: boolean;
};

declare type BaseQuestionProps = {
    id: string;
    title: string;
    description?: string;
    type: QuestionType;
    children: React.ReactNode;
    required?: boolean;
    locked?: boolean;
};

declare type BaseQuestionPropsForOtherQuestionComponents = Omit<BaseQuestionProps, "children" | "onChange">;

/**
 * Base response type for collection data
 * @template R - The type of records in the collection
 *
 * @property {R[]} records The list of records for the current page.
 * @property {TRecord} [summaries] Optional summaries data for the collection.
 */
export declare type BaseResponse<R> = {
    records: R[];
    summaries?: R;
};

export declare const BaseTabs: React.FC<TabsProps>;

declare interface BaseTOCItem {
    id: string;
    label: string;
    onClick?: (id: string) => void;
    icon?: IconType;
    disabled?: boolean;
    otherActions?: TOCItemAction[];
}

/**
 * Result from the onBeforeSend callback
 */
declare type BeforeSendResult = {
    /** The message to send (possibly modified) */
    message: string;
    /** Optional metadata to attach to the message */
    metadata?: Record<string, unknown>;
};

declare type BreadcrumbBaseItemType = NavigationItem & {
    id: string;
    loading?: boolean;
    label: string;
};

export declare type BreadcrumbItemType = BreadcrumbLoadingItemType | BreadcrumbNavItemType | BreadcrumbSelectItemType;

export declare type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
    loading: true;
};

export declare type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
    module?: ModuleId;
};

/**
 * Responsive breadcrumb navigation component that automatically collapses items when space is limited.
 *
 * Features:
 * - Responsive layout that adjusts to container width
 * - Maintains first and last items visible
 * - Collapses middle items into a dropdown when needed
 * - Supports loading states
 * - Animated transitions
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "home", label: "Home", href: "/" },
 *     { id: "section", label: "Section", href: "/section" },
 *     { id: "page", label: "Current Page" }
 *   ]}
 * />
 * ```
 */
export declare function Breadcrumbs({ breadcrumbs, append }: BreadcrumbsProps): JSX_2.Element;

export declare function BreadcrumbSelect<T extends string, R = unknown>({ ...props }: BreadcrumbSelectProps<T, R>): JSX_2.Element;

export declare type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
    type: "select";
    searchbox?: boolean;
    externalSearch?: boolean;
    onChange: BreadcrumbSelectProps<string, RecordType>["onChange"];
    value?: string;
    defaultItem?: F0SelectItemObject<string, RecordType>;
} & ({
    source: DataSourceDefinition<RecordType, FiltersDefinition, SortingsDefinition, GroupingDefinition<RecordType>>;
    mapOptions: (item: RecordType) => F0SelectItemProps<string>;
    options?: never;
} | {
    source?: never;
    mapOptions?: never;
    options: F0SelectItemProps<string, RecordType>[];
});

export declare type BreadcrumbSelectProps<T extends string, R = unknown> = F0SelectProps<T, R> & {
    multiple?: false;
};

export declare interface BreadcrumbsProps {
    /** Array of breadcrumb items to display */
    breadcrumbs: BreadcrumbItemType[];
    append?: ReactNode;
}

export declare interface BreadcrumbState {
    visibleCount: number;
    headItem: BreadcrumbItemType | null;
    tailItems: BreadcrumbItemType[];
    collapsedItems: BreadcrumbItemType[];
    isOnly: boolean;
    minWidth: number | undefined;
}

declare interface BreakType {
    id: string;
    name: string;
    duration?: string;
    description?: string;
    isPaid: boolean;
}

/**
 * Represents a bulk action that can be performed on a collection.
 */
export declare type BulkAction = string;

/**
 * Represents a bulk action definition.
 */
export declare type BulkActionDefinition = {
    label: string;
    icon?: IconType;
    id: string;
    keepSelection?: boolean;
    critical?: boolean;
    description?: string;
    disabled?: boolean;
};

export declare type BulkActionsDefinition<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]) => {
    primary?: (BulkActionDefinition | {
        type: "separator";
    })[];
    secondary?: (BulkActionDefinition | {
        type: "separator";
    })[];
} | {
    warningMessage: string;
};

export declare interface ButtonConfig {
    key: string;
    icon: IconType;
    active: (editor: Editor) => boolean;
    onClick: (editor: Editor) => void;
    tooltip: {
        label: string;
        shortcut: string[];
    };
}

declare type ButtonDropdownItem<T = string> = {
    /**
     * The value of the item.
     */
    value: T;
    /**
     * The label of the item.
     */
    label: string;
    /**
     * The icon of the item.
     */
    icon?: IconType;
    /**
     * Whether the item is critical.
     * @default false
     */
    critical?: boolean;
    /**
     * The description of the item.
     */
    description?: string;
};

declare type ButtonInternalProps = Pick<ActionProps, "size" | "disabled" | "className" | "pressed" | "compact" | "tooltip" | "fontSize"> & DataAttributes & {
    /**
     * The aria-label of the button if not provided title or label will be used.
     */
    "aria-label"?: string;
    /**
     * The variant of the button.
     */
    variant?: ActionButtonVariant;
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<unknown>;
    /**
     * The title of the button.
     */
    title?: string;
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string;
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean;
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType;
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string;
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean;
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: ButtonSize;
    /**
     * @private
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode;
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean;
    /**
     * @private
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean;
    /**
     * @private
     * If true, the button will not automatically add a tooltip based on the hideLabel and label properties.
     */
    noAutoTooltip?: boolean;
    /**
     * @private
     * If true, the button will not automatically add a title based label
     */
    noTitle?: boolean;
    /**
     * @private
     * If true, the button will rotate the icon when the button is hovered.
     */
    iconRotate?: boolean;
    /**
     * @private
     * The style of the button.
     */
    style?: React.CSSProperties;
} & ({
    /**
     * The URL to navigate to when the button is clicked.
     */
    href: string;
    /**
     * The target to navigate to when the button is clicked.
     */
    target?: NavTarget;
    type?: never;
} | {
    href?: never;
    target?: never;
    type?: ButtonType;
});

declare type ButtonSize = (typeof buttonSizes)[number];

declare const buttonSizes: readonly ["sm", "md", "lg"];

declare type ButtonType = (typeof buttonTypes)[number];

declare const buttonTypes: readonly ["button", "submit", "reset"];

declare type ButtonVariant = Exclude<(typeof actionButtonVariants)[number], "ai">;

export declare type CalendarDate = {
    day: number;
    month: number;
    year: number;
};

export declare const CalendarEvent: ForwardRefExoticComponent<CalendarEventProps & RefAttributes<HTMLDivElement>>;

export declare const CalendarEventList: FC<CalendarEventListProps>;

export declare interface CalendarEventListProps {
    events: CalendarEventProps[];
    gap?: number;
    showAllItems?: boolean;
    minSize?: number;
}

export declare interface CalendarEventProps {
    label?: string;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    isPending: boolean;
    leftTags?: Tag[];
    rightTags?: Tag[];
    fromDate?: Date;
    toDate?: Date;
    noBackground?: boolean;
}

export declare type CalendarMode = "single" | "range";

export declare type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear";

declare type CalloutAction = {
    label: string;
    onClick: () => void;
    icon?: IconType;
};

declare interface CalloutInternalProps {
    title: string;
    onClose?: () => void;
    children: React.ReactNode;
    actions?: CalloutAction[];
    variant: CalloutVariant;
}

declare interface CalloutSkeletonProps {
    compact?: boolean;
    variant?: CalloutVariant;
}

declare type CalloutVariant = (typeof variants)[number];

declare type CardAvatarVariant = AvatarVariant | {
    type: "emoji";
    emoji: string;
} | {
    type: "file";
    file: File;
} | {
    type: "icon";
    icon: IconType;
};

/**
 * Group Cards: Renders
 */
declare type CardCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, CardVisualizationOptions<Record, Filters, Sortings>>;

declare type CardImageFit = (typeof cardImageFits)[number];

declare const cardImageFits: readonly ["contain", "cover", "fit-width", "fit-height", "scale-down"];

declare type CardImageSize = (typeof cardImageSizes)[number];

declare const cardImageSizes: readonly ["xs", "sm", "md", "lg", "xl"];

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
declare type CardMetadataProperty = {
    [K in CardPropertyType]: {
        type: K;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[CardPropertyType];

declare type CardPropertyDefinition<T> = PropertyDefinition_2<T> & {
    icon?: IconType;
    tooltip?: string;
};

declare const cardPropertyRenderers: {
    readonly text: (args: TextCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly number: (args: NumberCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly date: (args: DateCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly amount: (args: AmountCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly person: (args: PersonCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly company: (args: CompanyCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly team: (args: TeamCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly status: (args: StatusCellValue_2) => default_2.JSX.Element;
    readonly tag: (args: TagCellValue_2) => default_2.JSX.Element;
    readonly avatarList: (args: AvatarListCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly tagList: (args: TagListCellValue_2) => default_2.JSX.Element;
    readonly alertTag: (args: AlertTagCellValue_2) => default_2.JSX.Element;
    readonly dotTag: (args: DotTagCellValue_2) => default_2.JSX.Element;
    readonly file: (args: FileCellValue_2) => default_2.JSX.Element;
    readonly folder: (args: FolderCellValue_2) => default_2.JSX.Element;
    readonly progressBar: (args: ProgressBarCellValue_2, _meta: ValueDisplayRendererContext_2) => default_2.JSX.Element | null;
};

declare type CardPropertyType = keyof typeof cardPropertyRenderers;

declare type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
    description?: (record: T) => string;
    avatar?: (record: T) => CardAvatarVariant;
    image?: (record: T) => string;
    imageFit?: CardImageFit;
    imageSize?: CardImageSize;
    blurredBackground?: boolean;
    compact?: boolean;
};

export declare const Carousel: ({ children, columns, showArrows, showDots, autoplay, delay, showPeek, doubleColumns, }: CarouselProps) => default_2.JSX.Element;

declare interface CarouselBreakpoints {
    default?: ColumnNumber;
    xs?: ColumnNumber;
    sm?: ColumnNumber;
    md?: ColumnNumber;
    lg?: ColumnNumber;
    xl?: ColumnNumber;
}

declare interface CarouselProps {
    children: default_2.ReactNode;
    showArrows?: boolean;
    showDots?: boolean;
    autoplay?: boolean;
    delay?: number;
    columns?: CarouselBreakpoints;
    showPeek?: boolean;
    doubleColumns?: {
        index: number;
        sizes: (keyof CarouselBreakpoints)[];
    }[];
}

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
    hideTooltip?: boolean;
}

export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, hideTooltip, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
    hideTooltip?: boolean;
}

export declare const Celebration: (({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element) & {
    Skeleton: () => JSX_2.Element;
};

export declare type CelebrationProps = {
    link: string;
    firstName: string;
    lastName: string;
    src?: string;
    onClick?: () => void;
    canReact?: boolean;
    lastEmojiReaction?: string;
    onReactionSelect?: (emoji: string) => void;
    type?: "birthday" | "anniversary" | "first-day";
    typeLabel: string;
    date: Date;
};

export declare const CelebrationSkeleton: () => JSX_2.Element;

declare type ChartConfig = Record<string, ChartConfig_2[keyof ChartConfig_2]>;

declare type ChartConfig_2 = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare interface ChartContainerComponentProps extends React_2.ComponentProps<"div">, VariantProps<typeof variants_2> {
    config: ChartConfig_2;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}

declare type ChartItem<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

export declare const ChartWidgetEmptyState: ForwardRefExoticComponent<Props_4 & RefAttributes<HTMLDivElement>>;

declare type ChatTextareaProps = InputProps_2 & {
    submitLabel?: string;
};

export declare type ChatWidgetEmptyStateProps = Props_4;

declare type ChildrenPaginationInfo = {
    total: number;
    perPage: number;
    currentPage: number;
    pagesCount: number;
    hasMore: boolean;
};

declare type ChildrenResponse<R extends RecordType> = NestedResponseWithType<R>;

declare type ChipLabel = {
    label: string;
} & ({
    icon: IconType;
    avatar?: never;
} | {
    icon?: never;
    avatar: AvatarVariant_2;
} | {
    icon?: never;
    avatar?: never;
});

export declare function ClockInControls({ trackedMinutes, remainingMinutes, data, labels, locationId, locations, canShowLocation, locationSelectorDisabled, onClockIn, onClockOut, onBreak, breakTypes, onChangeBreakTypeId, canShowBreakButton, canSeeGraph, canSeeRemainingTime, onChangeLocationId, canShowProject, projectSelectorElement, breakTypeName, }: ClockInControlsProps): JSX_2.Element;

export declare interface ClockInControlsProps {
    /** Optional remaining time in minutes */
    remainingMinutes?: number;
    /** Clock in entries data */
    data: ClockInGraphProps["data"];
    /** Tracked minutes */
    trackedMinutes: number;
    /** Labels for all text content */
    labels: {
        clockedOut: string;
        clockedIn: string;
        onBreak: string;
        clockIn: string;
        clockOut: string;
        break: string;
        resume: string;
        remainingTime: string;
        overtime: string;
        selectLocation: string;
        selectProject: string;
        paid: string;
        unpaid: string;
    };
    locationId?: string;
    onChangeLocationId: Dispatch<string>;
    locations: {
        id: string;
        name: string;
        icon: IconType;
    }[];
    breakTypes?: BreakType[];
    onChangeBreakTypeId?: Dispatch<string>;
    canShowLocation?: boolean;
    locationSelectorDisabled?: boolean;
    canShowBreakButton?: boolean;
    canSeeGraph?: boolean;
    canSeeRemainingTime?: boolean;
    /** Callback when Clock In button is clicked */
    onClockIn?: () => void;
    /** Callback when Clock Out button is clicked */
    onClockOut?: () => void;
    /** Callback when Break button is clicked */
    onBreak?: (breakTypeId?: string) => void;
    canShowProject?: boolean;
    projectSelectorElement?: React.ReactNode;
    breakTypeName?: string;
}

declare interface ClockInGraphProps {
    trackedMinutes?: number;
    data?: {
        from: Date;
        to: Date;
        variant: ClockInStatus;
    }[];
    remainingMinutes?: number;
}

declare type ClockInStatus = "clocked-in" | "break" | "clocked-out";

export declare const CoCreationForm: ({ elements: elementsProp, isEditMode, onChange, disallowOptionalQuestions, allowedQuestionTypes, applyingChanges, }: CoCreationFormProps) => JSX_2.Element;

export declare type CoCreationFormCallbacks = {
    onQuestionChange?: (params: OnChangeQuestionParams) => void;
    onSectionChange?: (params: OnChangeSectionParams) => void;
    onAddNewElement?: (params: OnAddNewElementParams) => void;
    onDuplicateElement?: (params: OnDuplicateElementParams) => void;
};

export declare type CoCreationFormElement = {
    type: "section";
    section: SectionElement;
} | {
    type: "question";
    question: QuestionElement;
};

export declare type CoCreationFormProps = {
    elements: CoCreationFormElement[];
    onChange: (elements: CoCreationFormElement[]) => void;
    isEditMode?: boolean;
    disallowOptionalQuestions?: boolean;
    allowedQuestionTypes?: QuestionType[];
    applyingChanges?: boolean;
};

declare type ColId = string;

export declare type CollapsibleMenuVariant = "dark" | "light";

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export declare type CollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>, VisualizationOptions extends object> = {
    /** The data source configuration and state */
    source: DataCollectionSource<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    /** Function to handle item selection */
    onSelectItems: OnSelectItemsCallback<Record, Filters>;
    /** Function to handle data load */
    onLoadData: OnLoadDataCallback<Record, Filters>;
    onLoadError: OnLoadErrorCallback;
    /**
     * @deprecated This will be removed in the next major version
     * Temporary prop to force the full width of the data collection (removes the X padding)
     */
    tmpFullWidth?: boolean;
} & VisualizationOptions;

declare type CollectionVisualizations<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    table: VisualizacionTypeDefinition<TableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, TableVisualizationSettings>;
    list: VisualizacionTypeDefinition<ListCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    card: VisualizacionTypeDefinition<CardCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    kanban: VisualizacionTypeDefinition<KanbanCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
};

declare const collectionVisualizations: CollectionVisualizations<RecordType, FiltersDefinition, SortingsDefinition, SummariesDefinition, ItemActionsDefinition<RecordType>, NavigationFiltersDefinition, GroupingDefinition<RecordType>>;

declare type ColumnNumber = 1 | 2 | 3 | 4 | 6;

declare type ColumnWidth = keyof typeof columnWidths | number;

declare const columnWidths: {
    readonly auto: undefined;
    readonly fit: 1;
};

export declare const CommunityPost: (({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noReactionsButton, }: CommunityPostProps) => JSX_2.Element) & {
    Skeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;
};

export declare type CommunityPostProps = {
    id: string;
    author?: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        url?: string;
    };
    group: {
        title: string;
        onClick: () => void;
    };
    createdAt: Date;
    title: string;
    description?: PostDescriptionProps["content"];
    mediaUrl?: string;
    event?: PostEventProps;
    counters: {
        views?: string;
        comments: string;
    };
    reactions?: ReactionsProps;
    inLabel: string;
    comment: {
        label: string;
        onClick: () => void;
    };
    noVideoPreload?: boolean;
    onClick: (id: string) => void;
    noReactionsButton?: boolean;
    dropdownItems?: DropdownItem[];
};

export declare const CommunityPostSkeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;

export declare type CommunityPostSkeletonProps = {
    withEvent?: boolean;
    withImage?: boolean;
};

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

declare type CompanyAvatarVariant = Extract<AvatarVariant, {
    type: "company";
}>;

declare const CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;

declare type CompanyItemProps = {
    name: string;
    avatarUrl?: URL_2;
    action?: ActionType_3;
};

export declare function CompanySelector({ companies, selected, onChange, isLoading, withNotification, additionalOptions, }: CompanySelectorProps): JSX_2.Element;

export declare type CompanySelectorProps = {
    companies: Company[];
    selected?: string;
    onChange: (value: string) => void;
    isLoading?: boolean;
    withNotification?: boolean;
    additionalOptions?: {
        label: string;
        value: string;
        icon?: IconType;
        description?: string;
        onClick?: () => void;
    }[];
};

declare type CompareToDef = {
    label: string;
    value: {
        delta: number;
        units: GranularityDefinitionKey;
    } | ((value: DateRangeComplete) => DateRangeComplete | DateRangeComplete[]);
};

declare type CompareToDefKey = string;

declare type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
});

declare type CopyActionType = {
    type: "copy";
    text?: string;
};

export declare function Counter({ size, type, value, maxValue }: CounterProps): JSX_2.Element;

declare type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterVariants>;

declare const counterVariants: (props?: ({
    size?: "md" | "sm" | undefined;
    type?: "bold" | "default" | "selected" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type CountryCode = keyof TranslationsType["countries"];

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export declare type CurrentFilters<F extends FilterOptions<string>> = F extends {
    fields: Record<infer K extends string, FilterDefinition>;
} ? {
    [Key in K]?: FilterValue<F["fields"][Key]>;
} : Record<string, never>;

export declare interface CurrentVersion {
    title: string;
    onClick?: () => void;
}

declare type CustomEmptyStates = Partial<Record<EmptyStateType, Partial<EmptyState>>>;

export declare type CustomVisualizationProps<Source extends {
    dataAdapter: DataCollectionDataAdapter<any, any, any>;
}> = {
    onSelectItems: OnSelectItemsCallback<InferRecord<Source>, InferFilters<Source>>;
    onLoadData: OnLoadDataCallback<InferRecord<Source>, InferFilters<Source>>;
    onLoadError: OnLoadErrorCallback;
    source: Source;
};

export declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type DashboardProps = {
    widgetWidth?: WidgetWidth;
    children?: ReactNode[];
};

declare type DashboardProps_2 = {
    children: ReactNode[];
};

declare type Data<R extends RecordType> = {
    records: WithGroupId<R>[];
    type: "grouped" | "flat";
    groups: GroupRecord<R>[];
};

/**
 * Combined type for all possible data adapter configurations
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type DataAdapter<R extends RecordType, Filters extends FiltersDefinition> = BaseDataAdapter<R, Filters, BaseFetchOptions<Filters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, PaginatedFetchOptions<Filters>, PaginatedResponse<R>>;

declare type DataAttributes_2 = {
    [key: `data-${string}`]: string | undefined;
};

export declare type DataCollectionBaseFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = BaseFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

/**
 * Data collection data adapter
 */
export declare type DataCollectionDataAdapter<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition> = BaseDataAdapter<R, Filters, DataCollectionBaseFetchOptions<Filters, NavigationFilters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, DataCollectionPaginatedFetchOptions<Filters, NavigationFilters>, PaginatedResponse<R>>;

/**
 * Extended base fetch options for data collection
 */
declare type DataCollectionExtendFetchOptions<NavigationFilters extends NavigationFiltersDefinition> = {
    navigationFilters: NavigationFiltersState<NavigationFilters>;
};

/**
 * Extended base fetch options for data collection
 */
export declare type DataCollectionPaginatedFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = PaginatedFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

declare type DataCollectionSettings = {
    visualization: VisualizationSettings;
};

declare interface DataCollectionSettingsContextType {
    setSettings: default_2.Dispatch<default_2.SetStateAction<DataCollectionSettings>>;
    settings: DataCollectionSettings;
    setVisualizationSettings: (key: keyof VisualizationSettings, settings: VisualizationSettings[keyof VisualizationSettings] | ((prev: VisualizationSettings[keyof VisualizationSettings]) => VisualizationSettings[keyof VisualizationSettings])) => void;
}

/**
 * Data collection source
 * Extends the base data source with data collection specific elements / features
 */
export declare type DataCollectionSource<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = DataSource<R, Filters, Sortings, Grouping> & DataCollectionSourceDefinition<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    currentNavigationFilters: NavigationFiltersState<NavigationFilters>;
    setCurrentNavigationFilters: React.Dispatch<React.SetStateAction<NavigationFiltersState<NavigationFilters>>>;
    /** Current summaries data */
    currentSummaries?: R;
    /** Function to update the current summaries data */
    setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>;
};

/**
 * Data collection source definition
 * Extends the base data source definition with data collection specific elements / features
 */
export declare type DataCollectionSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = Omit<DataSourceDefinition<R, Filters, Sortings, Grouping>, "dataAdapter"> & {
    /**
     * Data Collection specific datasource elements / features
     */
    /** Navigation filters */
    navigationFilters?: NavigationFilters;
    currentNavigationFilters?: NavigationFiltersState<NavigationFilters>;
    /** URL for a single item in the collection */
    itemUrl?: (item: R) => string | undefined;
    /** Click handler for a single item in the collection */
    itemOnClick?: (item: R) => () => void;
    /** Available actions that can be performed on records */
    itemActions?: ItemActions;
    /** Available primary actions that can be performed on the collection */
    primaryActions?: PrimaryActionsDefinitionFn;
    /** Available secondary actions that can be performed on the collection */
    secondaryActions?: SecondaryActionsDefinition;
    /** Available summaries fields. If not provided, summaries is not allowed. */
    summaries?: Summaries & {
        label?: string;
    };
    dataAdapter: DataCollectionDataAdapter<R, Filters, NavigationFilters>;
    /** Bulk actions that can be performed on the collection */
    bulkActions?: BulkActionsDefinition<R, Filters>;
    /** Total items summary that can be displayed on the collection
     * If true, the total items summary will be displayed on the collection
     * If a function is provided, the total items summary will be displayed on the collection
     */
    totalItemSummary?: boolean | ((totalItems: number) => string | null);
    /** Item filter that can be used to filter the items before they are displayed */
    itemPreFilter?: (item: R) => boolean;
    /** Lanes configuration */
    lanes?: ReadonlyArray<Lane<Filters>>;
};

/**
 * The status of the data collection
 */
declare type DataCollectionStatus<CurrentFiltersState extends FiltersState<FiltersDefinition>> = {
    grouping?: GroupingState<RecordType, GroupingDefinition<RecordType>>;
    sortings?: SortingsState<SortingsDefinition>;
    filters?: CurrentFiltersState;
    search?: string | undefined;
    navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>;
    visualization?: number;
};

declare type DataCollectionStatusComplete<CurrentFiltersState extends FiltersState<FiltersDefinition>> = DataCollectionStatus<CurrentFiltersState> & {
    settings?: DataCollectionSettings;
};

declare type DataCollectionStorageFeature = (typeof dataCollectionStorageFeatures)[number];

/**
 * The available features of the data collection status storage
 */
declare const dataCollectionStorageFeatures: readonly ["filters", "navigationFilters", "sortings", "grouping", "visualization", "search"];

declare type DataCollectionStorageFeaturesDefinition = ("*" | `all` | `!${DataCollectionStorageFeature}` | `${DataCollectionStorageFeature}`)[];

/**
 * Represents an error that occurred during data fetching
 */
declare interface DataError {
    message: string;
    cause?: unknown;
}

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
    DotTagItem: ForwardRefExoticComponent<Props_3 & RefAttributes<HTMLLIElement>>;
};

declare type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
    isHorizontal?: boolean;
};

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export declare type DataSource<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>> = DataSourceDefinition<R, Filters, Sortings, Grouping> & {
    /** Current state of applied filters */
    currentFilters: FiltersState<Filters>;
    /** Function to update the current filters state */
    setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /***** SORTINGS ***************************************************/
    /** Current state of applied sortings */
    currentSortings: SortingsState<Sortings>;
    /** Function to update the current sortings state */
    setCurrentSortings: React.Dispatch<React.SetStateAction<SortingsState<Sortings>>>;
    /*******************************************************/
    /***** SEARCH ***************************************************/
    currentSearch: undefined | string;
    debouncedCurrentSearch: undefined | string;
    setCurrentSearch: (search: string | undefined) => void;
    /*******************************************************/
    /***** LOADING ***************************************************/
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    /*******************************************************/
    /***** GROUPING ***************************************************/
    /** Current state of applied grouping */
    currentGrouping?: Grouping["mandatory"] extends true ? Exclude<GroupingState<R, Grouping>, undefined> : GroupingState<R, Grouping>;
    /** Function to update the current grouping state */
    setCurrentGrouping: React.Dispatch<React.SetStateAction<GroupingState<R, Grouping>>>;
    /*******************************************************/
    /** Function to provide an id for a record, necessary for append mode */
    idProvider?: <Item extends R>(item: Item, index?: number) => string | number | symbol;
    /** Item filter that can be used to filter the items before they are displayed */
    itemPreFilter?: (item: R) => boolean;
};

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template NavigationFilters - The available navigation filters for the collection
 * @template Sortings - The available sortings for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template PrimaryActions - The available primary actions that can be performed on the collection
 * @template SecondaryActions - The available actions that can be performed on the collection
 * @template OtherActions - The available actions that can be performed on the collection
 * @template Summaries - The available summaries for the collection
 */
export declare type DataSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = {
    /***** FILTERS ***************************************************/
    /** Available filter configurations */
    filters?: Filters;
    /** Default filters state (this is the state that the source will back on reset)*/
    defaultFilters?: FiltersState<Filters>;
    /** Current state of applied filters */
    currentFilters?: FiltersState<Filters>;
    /** Predefined filter configurations that can be applied */
    presets?: PresetsDefinition<Filters>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /*******************************************************/
    /***** SEARCH ***************************************************/
    /** Search configuration */
    search?: SearchOptions;
    /*******************************************************/
    /***** SORTINGS ***************************************************/
    /** Available sorting fields. If not provided, sorting is not allowed. */
    sortings?: Sortings;
    /** Default sorting state (this is the state that the source will back on reset)*/
    defaultSortings?: SortingsState<Sortings>;
    /** Current state of applied sortings */
    currentSortings?: SortingsState<Sortings>;
    /*******************************************************/
    /** Data adapter responsible for fetching and managing data */
    dataAdapter: DataAdapter<R, Filters>;
    /** Selectable items value under the checkbox column (undefined if not selectable) */
    selectable?: (item: R) => string | number | undefined;
    /** Default selected items */
    defaultSelectedItems?: SelectedItemsState<R>;
    /***** GROUPING ***************************************************/
    /** Grouping configuration */
    grouping?: Grouping;
    /** Default grouping state (this is the state that the source will back on reset)*/
    defaultGrouping?: GroupingState<R, Grouping>;
    /** Current state of applied grouping */
    currentGrouping?: GroupingState<R, Grouping>;
    /*******************************************************/
    /***** NESTED RECORDS ***************************************************/
    fetchChildren?: ({ item, filters, pagination, sortings, }: {
        item: R;
        filters?: FiltersState<Filters>;
        pagination?: ChildrenPaginationInfo;
        sortings?: SortingsState<Sortings>;
    }) => Promise<ChildrenResponse<R>>;
    /** Function to determine if an item has children */
    itemsWithChildren?: (item: R) => boolean;
    /** Function to get the number of children for an item */
    childrenCount?: ({ item, pagination, }: {
        item: R;
        pagination?: ChildrenPaginationInfo;
    }) => number | undefined;
};

export declare type DateFilterDefinition = BaseFilterDefinition<"date"> & {
    options?: DateFilterOptions_2;
};

declare type DateFilterOptions_2 = {
    minDate?: Date;
    maxDate?: Date;
    mode?: CalendarMode;
    defaultSelected?: Date | DateRange | null;
    view?: CalendarView;
};

export declare type DateNavigationOptions = {
    min?: Date;
    max?: Date;
};

declare type DateNavigationOptions_2 = {
    granularity?: GranularityDefinitionKey[] | GranularityDefinitionKey;
    defaultGranularity?: GranularityDefinitionKey;
    min?: Date;
    max?: Date;
    presets?: DatePreset[];
    hideGoToCurrent?: boolean;
};

declare type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<Date | DateRange | DateValue> & {
    type: "date-navigator";
} & DateNavigationOptions_2;

declare type DatePickerCompareTo = Record<GranularityDefinitionKey, CompareToDef[]>;

declare interface DatePickerPopupProps {
    onSelect?: (value: DatePickerValue | undefined) => void;
    value?: DatePickerValue;
    defaultValue?: DatePickerValue;
    presets?: DatePreset[];
    granularities?: GranularityDefinitionKey[];
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    hideGoToCurrent?: boolean;
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    compareTo?: DatePickerCompareTo;
    defaultCompareTo?: CompareToDefKey;
    hideCalendarInput?: boolean;
    asChild?: boolean;
    onCompareToChange?: (compareTo: DateRangeComplete | DateRangeComplete[] | undefined) => void;
}

export declare type DatePickerValue = {
    value: DateRangeComplete | undefined;
    granularity: GranularityDefinitionKey;
};

export declare interface DatePreset {
    label: string;
    granularity: GranularityDefinitionKey;
    value: DateRange | (() => DateRange);
}

declare type DateQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: Date | null;
};

export declare type DateRange = {
    from: Date;
    to?: Date;
};

export declare type DateRangeComplete = Required<DateRange>;

export declare type DateRangeError = {
    from: boolean;
    to: boolean;
};

export declare type DateRangeString = {
    from: string;
    to?: string;
};

export declare type DateStringFormat = "default" | "long";

declare type DateValue = {
    value: DateRangeComplete;
    valueString: string;
    granularity: GranularityDefinitionKey;
};

export declare function DaytimePage({ children, header, period, embedded, }: DaytimePageProps): JSX_2.Element;

export declare namespace DaytimePage {
    var displayName: string;
}

export declare interface DaytimePageProps extends VariantProps<typeof daytimePageVariants> {
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
}

declare const daytimePageVariants: (props?: ({
    period?: "evening" | "morning" | "afternoon" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare const defaultTranslations: {
    readonly countries: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bm: string;
        bo: string;
        br: string;
        bt: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gq: string;
        gr: string;
        gt: string;
        gu: string;
        gw: string;
        hk: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
    };
    readonly approvals: {
        readonly history: "Approval history";
        readonly statuses: {
            readonly waiting: "Waiting";
            readonly pending: "Pending";
            readonly approved: "Approved";
            readonly rejected: "Rejected";
        };
        readonly requiredNumbers: {
            readonly one: "One approval required";
            readonly other: "{{count}} approvals required";
        };
    };
    readonly navigation: {
        readonly sidebar: {
            readonly label: "Main navigation";
            readonly companySelector: {
                readonly label: "Select a company";
                readonly placeholder: "Select a company";
            };
        };
        readonly previous: "Previous";
        readonly next: "Next";
    };
    readonly inputs: {
        readonly password: {
            readonly show: "Show password";
            readonly hide: "Hide password";
        };
    };
    readonly actions: {
        readonly add: "Add";
        readonly edit: "Edit";
        readonly save: "Save";
        readonly send: "Send";
        readonly cancel: "Cancel";
        readonly copy: "Copy";
        readonly close: "Close";
        readonly showAll: "Show all";
        readonly showLess: "Show less";
        readonly skipToContent: "Skip to content";
        readonly view: "View";
        readonly unselect: "Unselect";
        readonly search: "Search";
        readonly clear: "Clear";
        readonly more: "More";
        readonly moveUp: "Move up";
        readonly moveDown: "Move down";
        readonly thumbsUp: "Like";
        readonly thumbsDown: "Dislike";
        readonly other: "Other actions";
        readonly toggle: "Toggle";
        readonly toggleDropdownMenu: "Toggle dropdown menu";
        readonly selectAll: "Select all";
    };
    readonly status: {
        readonly selected: {
            readonly singular: "Selected";
            readonly plural: "Selected";
            readonly all: "All selected";
        };
    };
    readonly syncStatus: {
        readonly synced: "Sync completed successfully.";
        readonly syncing: "Sync in progress.";
        readonly pending: "Not yet started.";
        readonly partiallySynced: "All aggregated data was synced but at least 1 failed.";
        readonly outdated: "Data might need to be synced again.";
        readonly failed: "Sync failed.";
    };
    readonly filters: {
        readonly searchPlaceholder: "Search filters...";
        readonly inFilter: {
            readonly searchPlaceholder: "Search options...";
        };
        readonly activeFilters: "Active filters: {{filters}}";
        readonly filteringBy: "Filtering by {{label}}";
        readonly availableFilters: "Available filters";
        readonly label: "Filters";
        readonly applyFilters: "Apply filters";
        readonly applySelection: "Apply selection";
        readonly cancel: "Cancel";
        readonly failedToLoadOptions: "Failed to load options";
        readonly retry: "Retry";
        readonly number: {
            readonly value: "Value";
            readonly equal: "Equal to";
            readonly equalTo: "Equal to {{value}}";
            readonly lessOrEqual: "Less or equal to";
            readonly lessThan: "Less than";
            readonly greaterOrEqual: "Greater or equal to";
            readonly greaterThan: "Greater than";
            readonly equalShort: "= {{value}}";
            readonly greaterThanOrEqualShort: ">= {{value}}";
            readonly greaterThanShort: "> {{value}}";
            readonly lessThanOrEqualShort: "<= {{value}}";
            readonly lessThanShort: "< {{value}}";
            readonly rangeTitle: "Use range";
            readonly range: "{{minStrict}} {{min}} and {{maxStrict}} {{max}}";
        };
        readonly search: {
            readonly relaxed: "Relaxed";
            readonly strict: "Strict";
        };
        readonly selectAll: "Select all";
        readonly clear: "Clear";
    };
    readonly toc: {
        readonly search: "Search...";
    };
    readonly collections: {
        readonly sorting: {
            readonly noSorting: "No sorting";
            readonly toggleDirection: "Toggle sorting direction";
            readonly sortBy: "Sort by";
        };
        readonly grouping: {
            readonly noGrouping: "No grouping";
            readonly groupBy: "Group by";
            readonly toggleDirection: "Toggle direction";
        };
        readonly actions: {
            readonly actions: "Actions";
        };
        readonly visualizations: {
            readonly table: "Table view";
            readonly card: "Card view";
            readonly list: "List view";
            readonly kanban: "Kanban view";
            readonly pagination: {
                readonly of: "of";
            };
            readonly settings: "{{visualizationName}} settings";
            readonly reset: "Reset to default";
        };
        readonly table: {
            readonly settings: {
                readonly showAllColumns: "Show all";
                readonly hideAllColumns: "Hide all";
            };
        };
        readonly itemsCount: "items";
        readonly emptyStates: {
            readonly noData: {
                readonly title: "No data";
                readonly description: "No data available";
            };
            readonly noResults: {
                readonly title: "No results";
                readonly description: "No results found try another search or clear the filters";
                readonly clearFilters: "Clear filters";
            };
            readonly error: {
                readonly title: "Error";
                readonly description: "An error occurred while loading the data";
                readonly retry: "Retry";
            };
        };
        readonly summaries: {
            readonly types: {
                readonly sum: "sum";
            };
        };
    };
    readonly shortcut: "Shortcut";
    readonly date: {
        readonly from: "From";
        readonly to: "To";
        readonly none: "None";
        readonly date: "Date";
        readonly custom: "Custom period";
        readonly selectDate: "Select Date";
        readonly compareTo: "Compare to";
        readonly presets: {
            readonly last7Days: "Last 7 days";
            readonly last30Days: "Last 30 days";
            readonly last3Months: "Last 3 months";
            readonly last6Months: "Last 6 months";
            readonly lastYear: "Last year";
            readonly last3Years: "Last 3 years";
            readonly last100Years: "Last 100 years";
        };
        readonly range: "Range";
        readonly selectedBy: "Selected by";
        readonly groups: {
            readonly today: "Today";
            readonly yesterday: "Yesterday";
            readonly lastWeek: "Last week";
            readonly lastMonth: "Last month";
            readonly other: "Other";
        };
        readonly granularities: {
            readonly day: {
                readonly currentDate: "Today";
                readonly label: "Day";
            };
            readonly week: {
                readonly currentDate: "This week";
                readonly label: "Week";
                readonly long: "Week of {{day}} {{month}} {{year}}";
                readonly longSingular: "Week of {{date}}";
                readonly longPlural: "Weeks of {{date}}";
            };
            readonly month: {
                readonly currentDate: "This month";
                readonly label: "Month";
            };
            readonly quarter: {
                readonly currentDate: "This quarter";
                readonly label: "Quarter";
            };
            readonly halfyear: {
                readonly currentDate: "This half year";
                readonly label: "Half year";
            };
            readonly year: {
                readonly currentDate: "This year";
                readonly label: "Year";
            };
            readonly range: {
                readonly currentDate: "Today";
                readonly label: "Range";
            };
        };
        readonly month: {
            readonly january: "January";
            readonly february: "February";
            readonly march: "March";
            readonly april: "April";
            readonly may: "May";
            readonly june: "June";
            readonly july: "July";
            readonly august: "August";
            readonly september: "September";
            readonly october: "October";
            readonly november: "November";
            readonly december: "December";
        };
    };
    readonly favorites: {
        readonly favorites: "Favorites";
        readonly remove: "Remove favorite";
    };
    readonly notifications: "Notifications";
    readonly ai: {
        readonly openChat: "Open Chat with One AI";
        readonly closeChat: "Close Chat with One AI";
        readonly startNewChat: "Start new chat";
        readonly scrollToBottom: "Scroll to bottom";
        readonly welcome: "Ask or create with One";
        readonly defaultInitialMessage: "How can I help you today?";
        readonly inputPlaceholder: "Ask about time, people, or company info…";
        readonly stopAnswerGeneration: "Stop generating";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reflection";
        readonly resourcesGroupTitle: "Resources";
        readonly thinking: "Thinking...";
        readonly exportTable: "Download table";
        readonly generatedTableFilename: "OneGeneratedTable";
        readonly removeFile: "Remove file";
        readonly attachFiles: "Attach files";
        readonly dropZoneTitle: "Drop files here";
        readonly dropZoneDescription: "Release to attach files to your message";
        readonly fileTooLarge: "The file '{fileName}' is too large. Maximum size is {maxSize}MB.";
        readonly filesTooLarge: "{count} files exceed the maximum size of {maxSize}MB and were not added.";
        readonly feedbackModal: {
            readonly positive: {
                readonly title: "What did you like about this response?";
                readonly label: "Your feedback helps us make Factorial AI better";
                readonly placeholder: "Share what worked well";
            };
            readonly negative: {
                readonly title: "What could have been better?";
                readonly label: "Your feedback helps us improve future answers";
                readonly placeholder: "Share what didn’t work";
            };
        };
        readonly ask: "Ask One";
    };
    readonly select: {
        readonly noResults: "No results found";
        readonly loadingMore: "Loading...";
    };
    readonly numberInput: {
        readonly between: "It should be between {{min}} and {{max}}";
        readonly greaterThan: "It should be greater than {{min}}";
        readonly lessThan: "It should be less than {{max}}";
    };
    readonly coCreationForm: {
        readonly actions: {
            readonly actions: "Actions";
            readonly duplicateQuestion: "Duplicate question";
            readonly deleteQuestion: "Delete question";
            readonly duplicateSection: "Duplicate section";
            readonly deleteSection: "Delete section";
        };
        readonly questionTypes: {
            readonly section: "Section";
            readonly rating: "Rating";
            readonly multipleChoice: "Multiple choice";
            readonly singleChoice: "Single choice";
            readonly text: "Text";
            readonly longText: "Long text";
            readonly numeric: "Numeric";
            readonly link: "Link";
            readonly date: "Date";
        };
        readonly selectQuestion: {
            readonly addOption: "Add option";
            readonly newOption: "New option {{number}}";
            readonly markAsCorrect: "Mark as correct";
            readonly remove: "Remove";
            readonly correct: "Correct";
            readonly optionPlaceholder: "Type anything you want here...";
        };
        readonly answer: {
            readonly label: "Answer";
            readonly placeholder: "Respondent's answer";
        };
        readonly labels: {
            readonly applyingChanges: "Applying changes";
            readonly endOfSection: "End of section";
            readonly title: "Title";
            readonly titlePlaceholder: "Question title";
            readonly description: "Description";
            readonly questionDescriptionPlaceholder: "Describe the question in a few words";
            readonly sectionDescriptionPlaceholder: "Describe the section in a few words";
            readonly required: "Required";
            readonly questionType: "Question type";
            readonly questionOptions: "Question options";
            readonly actions: "Actions";
            readonly sectionTitlePlaceholder: "Section title";
        };
    };
};

export declare const DetailsItem: ForwardRefExoticComponent<DetailsItemType & RefAttributes<HTMLDivElement>>;

export declare const DetailsItemsList: default_2.ForwardRefExoticComponent<DetailsItemsListProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface DetailsItemsListProps {
    title?: string;
    tableView?: boolean;
    details: DetailsItemType[];
}

export declare interface DetailsItemType {
    title: string;
    content: Content | Content[];
    isHorizontal?: boolean;
    spacingAtTheBottom?: boolean;
}

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header: {
type: AlertAvatarProps_2["type"];
title: string;
description: string;
};
actions?: {
primary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<unknown>) | undefined;
icon?: IconType_2 | undefined;
disabled?: boolean | undefined;
} & {
variant?: "default" | "critical" | "neutral";
};
secondary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<unknown>) | undefined;
icon?: IconType_2 | undefined;
disabled?: boolean | undefined;
};
};
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Remove a property from a union of objects.
 * @example
 * type Person = {
 *   name: string
 *   age: number
 * } | {
 *   name: string
 *   height: number
 * }
 *
 * type PersonWithoutName = DistributiveOmit<Person, "name">
 * // { age: number } | { height: number }
 */
declare type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export declare const Dropdown: (props: DropdownProps) => JSX_2.Element;

declare type DropdownInternalProps = {
    items: DropdownItem[];
    icon?: IconType;
    size?: F0ButtonProps["size"];
    children?: default_2.ReactNode;
    align?: "start" | "end" | "center";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    label?: string;
} & DataAttributes_2;

export declare type DropdownItem = DropdownItemObject | DropdownItemSeparator | DropdownItemLabel;

export declare type DropdownItemLabel = {
    type: "label";
    text: string;
};

export declare type DropdownItemObject = Pick<NavigationItem, "label" | "href"> & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownItemSeparator = {
    type: "separator";
};

export declare type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">;

declare const DropdownMenu: React_2.FC<DropdownMenuPrimitive.DropdownMenuProps>;

declare const DropdownMenuItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

declare type DropdownProps = Omit<DropdownInternalProps, (typeof privateProps_4)[number]> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export declare type editorStateType = {
    html: string;
    json: JSONContent | null;
};

export declare type ElementType = QuestionType | "section";

declare type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL_2;
    action?: ActionType_3;
};

declare type EmptyState = {
    emoji?: string;
    title: string;
    description?: string;
    actions?: ActionProps_3[];
};

declare const emptyStatesTypes: readonly ["no-data", "no-results", "error"];

declare type EmptyStateType = (typeof emptyStatesTypes)[number];

export declare type enhanceConfig = {
    onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>;
    enhancementOptions?: EnhancementOption[];
    enhanceLabels: enhanceLabelsType;
};

export declare type enhancedTextResponse = {
    success: boolean;
    text: string;
    error?: string;
};

export declare type enhanceLabelsType = {
    defaultError: string;
    enhanceButtonLabel: string;
    acceptChangesButtonLabel: string;
    rejectChangesButtonLabel: string;
    repeatButtonLabel: string;
    customPromptPlaceholder: string;
    loadingEnhanceLabel: string;
};

export declare type EnhancementOption = {
    id: string;
    label: string;
    subOptions?: EnhancementOption[];
};

export declare type enhanceTextParams = {
    text: string;
    selectedIntent?: string;
    customIntent?: string;
    context?: string;
};

export declare type EntityId = number | string;

export declare const EntitySelect: <T>(props: EntitySelectProps<T> & {
    children?: React.ReactNode;
}) => JSX_2.Element;

declare interface EntitySelectCommonProps<T> extends Omit<PopoverProps, "children" | "modal">, Pick<InputFieldProps<string>, "label" | "labelIcon" | "icon" | "error" | "status" | "hint" | "hideLabel" | "maxLength" | "disabled" | "placeholder" | "loading" | "required" | "readonly" | "append" | "size"> {
    entities: EntitySelectEntity[];
    groups: EntitySelectNamedGroup[];
    selectedGroup: string;
    selectedItemsCopy: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    onItemExpandedChange: (id: EntityId, expanded: boolean) => void;
    onGroupChange: (value: string | null) => void;
    disabled?: boolean;
    zIndex?: number;
    loading?: boolean;
    searchPlaceholder?: string;
    selectAllLabel?: string;
    clearLabel?: string;
    selectedLabel?: string;
    selectedEntities?: EntitySelectEntity[];
    alwaysOpen?: boolean;
    defaultOpen?: boolean;
    width?: number;
    hiddenAvatar?: boolean;
    applySearchToGroup?: boolean;
    onCreate?: (partialName: string) => void;
    onCreateLabel?: string;
    actions?: Action[];
    value?: T;
}

export declare type EntitySelectEntity = {
    id: EntityId;
    name: string;
    avatar?: string;
    expanded?: boolean;
    searchKeys?: string[];
    deactivated?: boolean;
    subItems?: EntitySelectSubEntity[];
};

export declare interface EntitySelectMultipleProps<T> extends EntitySelectCommonProps<T> {
    onSelect: (entities: EntitySelectEntity[]) => void;
    singleSelector: false | undefined;
}

export declare type EntitySelectNamedGroup = {
    value: string;
    label: string;
    groupType?: "avatar" | "team";
};

export declare type EntitySelectProps<T> = EntitySelectSingleProps<T> | EntitySelectMultipleProps<T>;

export declare interface EntitySelectSingleProps<T> extends EntitySelectCommonProps<T> {
    onSelect: (entity: EntitySelectEntity | null) => void;
    singleSelector: true;
}

export declare type EntitySelectSubEntity = {
    subId: EntityId;
    subName: string;
    subAvatar?: string;
    subSearchKeys?: string[];
};

declare type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? [...Acc, N][number] : Enumerate<N, [...Acc, Acc["length"]]>;

export declare type errorConfig = {
    onClose?: () => void;
    closeErrorButtonLabel?: string;
};

declare interface ErrorMessageProps {
    title: string;
    description: string;
}

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export declare type ExtractPropertyKeys<RecordType> = keyof RecordType;

declare type ExtractVisualizationSettings<T> = T extends {
    settings: {
        default: infer S;
    };
} ? S : never;

export declare const F0ActionBar: ({ isOpen, secondaryActions, label, ...props }: F0ActionBarProps) => JSX_2.Element;

declare interface F0ActionBarProps {
    /**
     * Whether the action bar is open
     */
    isOpen: boolean;
    /**
     * The primary action
     */
    primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup;
    /**
     * The secondary actions
     */
    secondaryActions?: ActionBarItem[];
    /**
     * The label of the action bar
     */
    label?: string;
}

export declare const F0AiBanner: ForwardRefExoticComponent<AiBannerInternalProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact }: AiBannerSkeletonProps) => JSX_2.Element;
};

export declare type F0AiBannerProps = AiBannerInternalProps;

declare const F0AvatarAlert: ({ type, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: AlertAvatarProps) => JSX_2.Element;

declare type F0AvatarCompanyProps = {
    name: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarEmojiProps = {
    emoji: string;
    size?: (typeof avatarEmojiSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

declare type F0AvatarFileProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarFlagProps = {
    flag: CountryCode | (string & {});
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarIconProps = {
    icon: IconType;
    size?: (typeof avatarIconSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

/**
 * Module avatar
 * @description A component that displays a module avatar
 * @experimental
 * @returns
 */
export declare function F0AvatarModule({ size, module, ...props }: F0AvatarModuleProps): JSX_2.Element;

export declare type F0AvatarModuleProps = VariantProps<typeof moduleAvatarVariants> & {
    module: ModuleId;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarPersonProps = {
    /**
     * The first name of the person.
     */
    firstName: string;
    /**
     * The last name of the person.
     */
    lastName: string;
    /**
     * The source of the person's image.
     */
    src?: string;
    /**
     * The size of the avatar.
     */
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
    /**
     * Whether the person is deactivated. If true, the avatar will display an icon instead of the person's name or picture.
     */
    deactivated?: boolean;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare const F0AvatarPulse: {
    ({ firstName, lastName, src, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, pulse, onPulseClick, }: F0AvatarPulseProps): JSX_2.Element;
    displayName: string;
};

declare type F0AvatarPulseProps = {
    /**
     * The first name of the person.
     */
    firstName: string;
    /**
     * The last name of the person.
     */
    lastName: string;
    /**
     * The source of the person's image.
     */
    src?: string;
    /**
     * The pulse to display on the avatar.
     */
    pulse?: Pulse;
    /**
     * The callback to be called when the pulse is clicked.
     */
    onPulseClick: () => void;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type F0AvatarTeamProps = {
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The source of the team's image.
     */
    src?: string;
    /**
     * The size of the avatar.
     */
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number] | "variant"> & {
    variant?: Exclude<ButtonInternalProps["variant"], "ai">;
};

export declare const F0Callout: ForwardRefExoticComponent<CalloutInternalProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact, variant }: CalloutSkeletonProps) => JSX_2.Element;
};

export declare type F0CalloutProps = CalloutInternalProps;

export declare function F0CollapsibleMenu({ title, items, className, activeItem, collapsible, showChildrenCounter, barsAlign, size, popupAlign, variant, }: F0CollapsibleMenuProps): JSX_2.Element;

export declare interface F0CollapsibleMenuProps extends Omit<TOCProps, "sortable" | "onReorder" | "showSearchBox" | "title" | "hideChildrenCounter"> {
    /** Optional title displayed at the top of the menu popup */
    title?: string;
    /** Alignment of the collapsed bars (left or right) */
    barsAlign?: "left" | "right";
    /** Whether sections can be collapsed/expanded */
    collapsible?: boolean;
    /** Show the count of children items next to parent items */
    showChildrenCounter?: boolean;
    /** Maximum height of the popup: sm (max 240px), md (max 400px), lg (max 600px). Content auto-adjusts within limit. */
    size?: PopupSize;
    /** Alignment of the popup content */
    popupAlign?: "center" | "start" | "end";
    /** Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds */
    variant?: CollapsibleMenuVariant;
}

declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

/**
 * Base props shared across all F0Select variants
 */
declare type F0SelectBaseProps<T extends string, R = unknown> = {
    onChangeSelectedOption?: (option: F0SelectItemObject<T, ResolvedRecordType<R>> | undefined, checked: boolean) => void;
    children?: React.ReactNode;
    open?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    onSearchChange?: (value: string) => void;
    searchValue?: string;
    onOpenChange?: (open: boolean) => void;
    searchEmptyMessage?: string;
    className?: string;
    selectContentClassName?: string;
    actions?: Action[];
    /** Container element to render the portal content into */
    portalContainer?: HTMLElement | null;
    /**
     * When true, renders the select as a static list without the input trigger.
     * Only displays the dropdown content with max height, border and scroll.
     */
    asList?: boolean;
};

declare type F0SelectItemObject<T, R = unknown> = {
    type?: "item";
    value: T;
    label: string;
    description?: string;
    avatar?: AvatarVariant;
    tag?: string;
    icon?: IconType;
    item?: R;
    disabled?: boolean;
};
export { F0SelectItemObject }
export { F0SelectItemObject as SelectItemObject }

declare type F0SelectItemProps<T, R = unknown> = F0SelectItemObject<T, R> | {
    type: "separator";
};
export { F0SelectItemProps }
export { F0SelectItemProps as SelectItemProps }

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted value
 * @template R - The type of the record/item data (used with data source)
 */
declare type F0SelectProps<T extends string, R = unknown> = F0SelectBaseProps<T, R> & // Single select not clearable
({
    clearable?: false;
    multiple?: false;
    value?: T;
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>;
    onChange?: (value: T, originalItem?: ResolvedRecordType<R> | undefined, option?: F0SelectItemObject<T, ResolvedRecordType<R>>) => void;
    /** Callback for selection changes - provides full selection state for advanced use cases (e.g., "Select All" with exclusions) */
    onSelectItems?: never;
} | {
    clearable: true;
    multiple?: false;
    value?: T;
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>;
    onChange?: (value: T, originalItem?: ResolvedRecordType<R> | undefined, option?: F0SelectItemObject<T, ResolvedRecordType<R>>) => void;
    onSelectItems?: never;
} | {
    multiple: true;
    clearable?: boolean;
    value?: T[];
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>[];
    onChange?: (value: T[], originalItems: ResolvedRecordType<R>[], options: F0SelectItemObject<T, ResolvedRecordType<R>>[]) => void;
    /**
     * Callback for selection changes - provides full selection state including:
     * - `status.allSelected`: true if "Select All" was used, "indeterminate" if some items deselected after Select All
     * - `status.items`: Map of all items with their checked state
     * - `filters`: Current applied filters
     * - `selectedCount`: Total number of selected items
     *
     * Use this for "chunked" selection mode where you need to track:
     * - When allSelected is true/indeterminate: excluded items are those with checked=false
     * - When allSelected is false: included items are those with checked=true
     */
    onSelectItems?: OnSelectItemsCallback<ResolvedRecordType<R>, FiltersDefinition>;
    /**
     * Disables the "Select All" functionality, forcing manual selection of items one by one.
     * When enabled, the allSelected state will always be false and users must select items individually.
     */
    disableSelectAll?: boolean;
}) & ({
    source: DataSourceDefinition<ResolvedRecordType<R>, FiltersDefinition, SortingsDefinition, GroupingDefinition<ResolvedRecordType<R>>>;
    mapOptions: (item: ResolvedRecordType<R>) => F0SelectItemProps<T, ResolvedRecordType<R>>;
    options?: never;
} | {
    source?: never;
    mapOptions?: never;
    searchFn?: (option: F0SelectItemProps<T, unknown>, search?: string) => boolean | undefined;
    options: F0SelectItemProps<T, unknown>[];
}) & Pick<InputFieldProps<T>, "required" | "loading" | "hideLabel" | "labelIcon" | "size" | "label" | "icon" | "placeholder" | "disabled" | "name" | "error" | "status" | "hint">;
export { F0SelectProps }
export { F0SelectProps as SelectProps }

export declare function F0TableOfContent(props: TOCProps): JSX_2.Element;

declare const F0TagAlert: ForwardRefExoticComponent<Props_7 & RefAttributes<HTMLDivElement>>;

declare const F0TagRaw: ForwardRefExoticComponent<F0TagRawProps & RefAttributes<HTMLDivElement>>;

declare type F0TagRawProps = {
    /**
     * The label to display in the tag or used for accessible text
     */
    text: string;
    /**
     * Additional accessible text to display in the tag
     */
    additionalAccessibleText?: string;
} & ({
    icon: IconType;
    onlyIcon: true;
} | {
    icon?: IconType;
    onlyIcon?: boolean;
});

export declare function F0VersionHistory({ title, versions, currentVersion, activeVersionId, }: F0VersionHistoryProps): JSX_2.Element;

export declare interface F0VersionHistoryProps {
    title: string;
    versions: Version[];
    currentVersion?: CurrentVersion;
    activeVersionId?: string | "current";
}

export declare const F1SearchBox: ForwardRefExoticComponent<    {
value?: string;
threshold?: number;
debounceTime?: number;
autoFocus?: boolean;
} & Pick<InputFieldProps<string>, "onChange" | "name" | "onFocus" | "onBlur" | "size" | "loading" | "disabled" | "placeholder" | "clearable"> & RefAttributes<HTMLInputElement>>;

declare type FavoriteMenuItem = ({
    type: "icon";
    icon: IconType;
} | {
    type: "avatar";
    avatar?: AvatarVariant;
}) & {
    tooltip?: string;
} & NavigationItem;

export declare const FILE_TYPES: {
    readonly PDF: "pdf";
    readonly IMAGE: "image";
    readonly DOC: "doc";
    readonly EXCEL: "excel";
    readonly PPT: "ppt";
    readonly TXT: "txt";
    readonly VIDEO: "video";
    readonly AUDIO: "audio";
    readonly ARCHIVE: "archive";
    readonly CSV: "csv";
    readonly HTML: "html";
    readonly MARKDOWN: "markdown";
};

export declare type FileAction = {
    icon?: IconType;
    label: string;
    onClick: () => void;
    critical?: boolean;
};

declare type FileDef = {
    name: string;
    type: string;
};

export declare const FileItem: ForwardRefExoticComponent<FileItemProps & RefAttributes<HTMLDivElement>>;

declare interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
    file: File;
    actions?: FileAction[];
    disabled?: boolean;
    size?: "sm" | "md";
}

declare type FileRejectionReason = "size" | "type" | "custom";

export declare type filesConfig = {
    onFiles: (files: File[]) => void;
    multipleFiles: boolean;
    maxFileSize?: number;
    acceptedFileType?: FileType[];
};

export declare type FileType = (typeof FILE_TYPES)[keyof typeof FILE_TYPES];

export declare type FileValidationConfig = {
    /**
     * Maximum file size in bytes. Files exceeding this will be rejected with reason "size"
     */
    maxFileSize?: number;
    /**
     * Accepted MIME types (e.g., ["image/png", "application/pdf"])
     */
    acceptedTypes?: string[];
    /**
     * Accepted file extensions (e.g., [".png", ".pdf"])
     */
    acceptedExtensions?: string[];
    /**
     * Custom validation function. Return { valid: true } or { valid: false, message: "reason" }
     */
    validate?: (file: File) => {
        valid: true;
    } | {
        valid: false;
        message: string;
    };
};

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export declare const filterActions: (groups: SecondaryActionGroup[]) => SecondaryActionGroup[];

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export declare type FilterDefinition = FilterDefinitionsByType[keyof FilterDefinitionsByType];

/**
 * All the available filter types
 */
declare type FilterDefinitionsByType<T = unknown, R extends RecordType = RecordType> = {
    in: InFilterDefinition<T, R>;
    search: SearchFilterDefinition;
    date: DateFilterDefinition;
    number: NumberFilterDefinition;
};

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export declare const filterItemActions: <T extends RecordType>(actions: ItemActionsDefinition<T> | undefined, item: T) => ActionDefinition[];

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export declare type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>;

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

export declare type FiltersMode = "default" | "compact" | "simple";

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export declare type FiltersState<Definition extends Record<string, FilterDefinition>> = {
    [K in keyof Definition]?: FilterValue<Definition[K]>;
};

declare type FilterTypeContext<Options extends object = never> = {
    schema: FilterTypeSchema<Options>;
    i18n: I18nContextType;
};

declare type FilterTypeDefinition<Value = unknown, Options extends object = never, EmptyValue = Value, OptionalOptions extends boolean = false> = {
    emptyValue: EmptyValue;
    /** Check if the value is empty */
    isEmpty: (value: Value | undefined, context: FilterTypeContext<Options>) => boolean;
    /** Render the filter form */
    render: <Schema extends FilterTypeSchema<Options, OptionalOptions>>(props: {
        schema: Schema;
        value: Value;
        onChange: (value: Value) => void;
        isCompactMode?: boolean;
    }) => React.ReactNode;
    /**
     * The value label to display in the filter chips
     */
    chipLabel: (value: Value, context: FilterTypeContext<Options>) => string | ChipLabel | Promise<string | ChipLabel>;
    /**
     * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
     */
    defaultOptions?: Options;
    /**
     * The height of the filter form container in pixels
     */
    formHeight?: number;
};

declare type FilterTypeKey = keyof typeof filterTypes;

declare const filterTypes: {
    readonly in: FilterTypeDefinition<string[], InFilterOptions<string>>;
    readonly search: FilterTypeDefinition<string | {
        value: string;
        strict: boolean;
    }, SearchFilterOptions, string | {
        value: string;
        strict: boolean;
    }, true>;
    readonly date: FilterTypeDefinition<Date | DateRange | undefined, DateFilterOptions>;
    readonly number: FilterTypeDefinition<NumberFilterValue, NumberFilterOptions>;
};

declare type FilterTypeSchema<Options extends object = never, OptionalOptions extends boolean = false> = OptionalOptions extends true ? FilterTypeSchemaOptionalOptions<Options> : FilterTypeSchemaRequiredOptions<Options>;

declare type FilterTypeSchemaOptionalOptions<Options extends object = never> = {
    label: string;
    options?: Options extends never ? never : Options;
};

declare type FilterTypeSchemaRequiredOptions<Options extends object = never> = {
    label: string;
    options: Options extends never ? never : Options;
};

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : T extends NumberFilterDefinition ? NumberFilterValue | undefined : never;

/**
 * Extracts the value type for a specific filter key from a FiltersDefinition.
 * This helper type allows for type-safe access to filter values when you know the specific filter key.
 *
 * @example
 * ```ts
 * type MyFilters = {
 *   department: InFilterDefinition<string>
 *   search: SearchFilterDefinition
 * }
 *
 * type DepartmentValue = FilterValueByKey<MyFilters, 'department'> // string[]
 * type SearchValue = FilterValueByKey<MyFilters, 'search'> // string
 * ```
 *
 * @template Definition - The FiltersDefinition type
 * @template Key - The specific filter key to extract the value type for
 */
export declare type FilterValueByKey<Definition extends Record<string, FilterDefinition>, Key extends keyof Definition> = FilterValue<Definition[Key]>;

export declare type FlattenedItem = {
    parent: EntitySelectEntity | null;
    subItem: EntitySelectSubEntity & {
        expanded?: boolean;
        subItems?: EntitySelectSubEntity[];
    };
};

declare type FontSize = (typeof fontSizes)[number];

declare const fontSizes: readonly ["sm", "md", "lg"];

export declare function Form<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ onSubmit, children, ...form }: {
    children: React.ReactNode;
} & FormType<Schema, FormData>): JSX_2.Element;

export declare function FormActions<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ submitLabel, form, }: {
    submitLabel: string;
    form: FormType<Schema, FormData>;
}): JSX_2.Element;

declare type FormError<Fields extends FieldValues> = {
    success: false;
    rootMessage?: string;
    errors: Partial<Record<Path<Fields>, string>>;
};

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ label, description, children, ...props }: FormFieldProps<TFieldValues, TName> & {
    children: (field: ControllerRenderProps<TFieldValues>) => JSX.Element;
}) => JSX_2.Element;

export declare type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control"> & {
    label: string;
    description?: string;
};

declare type FormType<T extends SchemaType, FormType extends InferSchema<T>> = UseFormReturn<FormType, unknown, undefined> & {
    onSubmit: ReturnType<UseFormHandleSubmit<FormType>>;
};

declare interface FrameContextType {
    isSmallScreen: boolean;
    isLastToggleInvokedByUser: boolean;
    sidebarState: SidebarState;
    prevSidebarState: SidebarState | null;
    toggleSidebar: (callData?: {
        isInvokedByUser: boolean;
    }) => void;
    setForceFloat: (force: boolean) => void;
}

export declare const getGranularityDefinition: (granularityKey: GranularityDefinitionKey) => GranularityDefinition;

export declare const getGranularitySimpleDefinition: (granularityKey: GranularityDefinitionKey) => GranularityDefinitionSimple;

/**
 * Get the primaryActionsItems from the primaryActionsDefinition or the actions property
 */
export declare const getPrimaryActions: (primaryActions: PrimaryActionsDefinitionFn | undefined) => PrimaryActionItemDefinition[];

/**
 * Get the secondaryActionsItems from the secondaryActionsDefinition or the actions property
 */
export declare const getSecondaryActions: (secondaryActions: SecondaryActionsDefinition | undefined) => SecondaryActionGroup[];

export declare interface GranularityDefinition {
    calendarMode?: CalendarMode;
    calendarView: CalendarView;
    label: (viewDate: Date, i18n: TranslationsType) => ReactNode;
    toRangeString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => DateRangeString;
    toRange: <T extends Date | DateRange | undefined | null>(date: T) => T extends Date | DateRange ? DateRangeComplete : T;
    toString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => string;
    toStringMaxWidth: () => number;
    fromString: (dateStr: string | DateRangeString, i18n: TranslationsType) => DateRange | null;
    navigateUIView: (viewDate: Date, direction: -1 | 1) => Date;
    navigate: (date: Date, direction: -1 | 1) => Date;
    getViewDateFromDate: (date: Date) => Date;
    render: (renderProps: {
        mode: CalendarMode;
        selected: Date | DateRange | null;
        onSelect: (date: Date | DateRange | null) => void;
        month: Date;
        onMonthChange: (date: Date) => void;
        motionDirection: number;
        minDate?: Date;
        maxDate?: Date;
        setViewDate: (date: Date) => void;
        viewDate: Date;
        compact?: boolean;
    }) => ReactNode;
    add: (date: DateRangeComplete, delta: number) => DateRangeComplete;
    getPrevNext(date: DateRange, options: DateNavigationOptions): PrevNextDateNavigation;
}

export declare type GranularityDefinitionKey = keyof typeof granularityDefinitions;

export declare const granularityDefinitions: Record<string, GranularityDefinition>;

export declare type GranularityDefinitionSimple = Pick<GranularityDefinition, "toRangeString" | "toString">;

/**
 * Symbol used to identify the groupId in the data
 */
declare const GROUP_ID_SYMBOL: unique symbol;

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
export declare type GroupingDefinition<R extends RecordType> = {
    /** Whether grouping is mandatory or the user can chose not to group */
    mandatory?: boolean;
    hideSelector?: boolean;
    groupBy: {
        [K in RecordPaths<R>]?: {
            /** The label for the grouping */
            name: string;
            /** The item count for the grouping */
            label: (groupId: RecordPathValue<R, K>, filters: FiltersState<FiltersDefinition>) => string | Promise<string>;
            defaultDirection?: SortOrder;
            itemCount?: (groupId: RecordPathValue<R, K>, filters: FiltersState<FiltersDefinition>) => number | undefined | Promise<number | undefined>;
        };
    };
} & ({
    /** Whether the grouping is non collapsible */
    collapsible: true;
    /** The initial open groups */
    defaultOpenGroups?: boolean | string[];
} | {
    collapsible?: false;
    defaultOpenGroups?: never;
});

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export declare type GroupingState<R extends RecordType, Grouping extends GroupingDefinition<R>> = {
    field: keyof Grouping["groupBy"];
    order?: SortOrder;
} | undefined;

declare type GroupRecord<RecordType> = {
    key: string;
    label: string | Promise<string>;
    itemCount: number | undefined | Promise<number | undefined>;
    records: RecordType[];
};

declare type HeaderProps = {
    module: {
        id: ModuleId;
        name: string;
        href: string;
    };
    statusTag?: {
        text: string;
        variant: StatusVariant;
        tooltip?: string;
    };
    actions?: PageAction[];
    navigation?: NavigationProps;
    embedded?: boolean;
    breadcrumbs?: BreadcrumbsProps["breadcrumbs"];
    productUpdates?: {
        isVisible?: boolean;
    } & ProductUpdatesProp;
    favorites?: {
        isMarked: boolean;
        onChange: (newValue: boolean) => void;
        label: string;
    };
};

declare type HeaderSecondaryAction = SecondaryAction & {
    hideLabel?: boolean;
};

export declare type heightType = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "auto";

export declare const HighlightBanner: ({ title, subtitle, buttonLabel, onClick, }: HighlightBannerProps) => JSX_2.Element;

declare type HighlightBannerProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onClick?: () => void;
};

export declare const HILActionConfirmation: ({ text, confirmationText, onConfirm, cancelText, onCancel, }: HILActionConfirmationProps) => JSX_2.Element;

export declare type HILActionConfirmationProps = {
    text?: string;
    confirmationText: string;
    onConfirm: () => void;
    cancelText: string;
    onCancel: () => void;
};

declare type HTMLString = string;

declare type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare const iconVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type IdStructure = {
    id: string;
    children?: IdStructure[];
};

declare const Indicator: ForwardRefExoticComponent<IndicatorProps & RefAttributes<HTMLDivElement>>;

declare type IndicatorProps = {
    content: string;
    label: string;
    color?: string;
} & ({
    icon?: IconType;
} | {
    emoji?: string;
});

export declare const IndicatorsList: ForwardRefExoticComponent<IndicatorsListProps & RefAttributes<HTMLDivElement>>;

export declare interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}

declare type InferFilters<S> = S extends {
    dataAdapter: DataCollectionDataAdapter<any, infer F, any>;
} ? F : never;

/**
 * Returns the custom visualization props based on the data collection source.
 *
 * @template Source - The data collection source
 */
declare type InferRecord<S> = S extends {
    dataAdapter: DataCollectionDataAdapter<infer R, any, any>;
} ? R : never;

declare type InferSchema<T extends SchemaType> = z.infer<T>;

export declare type InFilterDefinition<T = string | number, R extends RecordType = RecordType> = BaseFilterDefinition<"in"> & {
    options: InFilterOptions_2<T, R>;
};

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
declare type InFilterOptionItem<T = unknown> = {
    /** The value used for filtering */
    value: T;
    /** Human-readable label for the option */
    label: string;
};

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
declare type InFilterOptions_2<T, _R extends RecordType = RecordType> = {
    cache?: boolean;
    /**
     * Optional function to resolve labels for specific values without fetching all options.
     * This is useful when you have a dynamic source and want to avoid fetching all options
     * just to display labels for selected values.
     * @param value - The value to get the label for
     * @returns The label for the value, or a promise that resolves to the label
     * @note The parameter type is `unknown` to allow compatibility when T is different types
     */
    getLabel?: (value: unknown) => string | Promise<string>;
} & ({
    options: Array<InFilterOptionItem<T>> | (() => Array<InFilterOptionItem<T>> | Promise<Array<InFilterOptionItem<T>>>);
} | {
    source: DataSourceDefinition<any, FiltersDefinition, SortingsDefinition, GroupingDefinition<any>>;
    mapOptions: (item: any) => InFilterOptionItem<T>;
});

/**
 * Represents a paginated response structure tailored for infinite scroll implementations.
 *
 * @template TRecord The type of the individual record contained in the paginated response.
 *
 * @extends BasePaginatedResponse
 *
 * @property {"infinite-scroll"} type Identifies the pagination type as "infinite-scroll".
 * @property {string | null} cursor The current position cursor used to fetch the next set of records.
 * @property {boolean} hasMore Indicates whether there are additional records available for loading.
 */
export declare type InfiniteScrollPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "infinite-scroll">;
    /**
     * Represents the current position cursor for pagination.
     * This is typically a string (often Base64-encoded) that represents
     * the position of the last item in the current result set.
     * Used to fetch the next page of results.
     */
    cursor: string | null;
    /**
     * A boolean flag indicating whether there are more items available for fetching.
     * Used to determine if additional requests should be made for pagination.
     */
    hasMore: boolean;
};

export declare const Input: <T extends string>(props: InputProps<T>) => JSX_2.Element;

declare const Input_2: React_2.ForwardRefExoticComponent<Omit<React_2.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> & Pick<InputFieldProps<string>, "label" | "onChange" | "role" | "onFocus" | "onBlur" | "status" | "size" | "icon" | "loading" | "disabled" | "maxLength" | "required" | "error" | "append" | "hideLabel" | "hint" | "labelIcon" | "onClickContent" | "readonly" | "clearable" | "autocomplete" | "onClear" | "isEmpty" | "emptyValue" | "hideMaxLength" | "appendTag" | "lengthProvider" | "buttonToggle"> & React_2.RefAttributes<HTMLInputElement>>;

declare const INPUTFIELD_SIZES: readonly ["sm", "md"];

declare type InputFieldProps<T> = {
    autoFocus?: boolean;
    label: string;
    placeholder?: string;
    labelIcon?: IconType;
    hideLabel?: boolean;
    hidePlaceholder?: boolean;
    name?: string;
    onClickPlaceholder?: () => void;
    onClickChildren?: () => void;
    onClickContent?: () => void;
    value?: T | undefined;
    onChange?: (value: T) => void;
    size?: InputFieldSize;
    error?: string | boolean;
    status?: InputFieldStatus;
    hint?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    role?: string;
    autocomplete?: AutoFill_2;
    inputRef?: React.Ref<unknown>;
    "aria-controls"?: AriaAttributes["aria-controls"];
    "aria-expanded"?: AriaAttributes["aria-expanded"];
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    canGrow?: boolean;
    children: React.ReactNode & {
        onFocus?: () => void;
        onBlur?: () => void;
        onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        onChange?: (value: T | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        value?: T;
    };
    icon?: IconType;
    isEmpty?: (value: T | undefined) => boolean;
    emptyValue?: T;
    maxLength?: number;
    hideMaxLength?: boolean;
    append?: React.ReactNode;
    appendTag?: string;
    lengthProvider?: (value: T | undefined) => number;
    loading?: boolean;
    avatar?: AvatarVariant;
    loadingIndicator?: {
        /**
         * If true, the loading spinner will be displayed over the content without affecting the layout
         */
        asOverlay?: boolean;
        /**
         * The offset of the loading spinner from the content
         */
        offset?: number;
    };
    /**
     * Renders a button toggle inside the input field
     */
    buttonToggle?: {
        label: string | [string, string];
        icon: IconType | [IconType, IconType];
        selected: boolean;
        disabled?: boolean;
        onChange: (selected: boolean) => void;
    };
};

declare type InputFieldSize = (typeof INPUTFIELD_SIZES)[number];

declare type InputFieldStatus = {
    type: Exclude<InputFieldStatusType, "error">;
    message: string;
} | {
    type: "error";
    message?: string;
};

declare const inputFieldStatus: readonly ["default", "warning", "info", "error"];

declare type InputFieldStatusType = (typeof inputFieldStatus)[number];

declare type InputInternalProps<T extends string> = Pick<ComponentProps<typeof Input_2>, "ref"> & Pick<InputFieldProps<T>, "autoFocus" | "required" | "disabled" | "size" | "onChange" | "value" | "placeholder" | "clearable" | "maxLength" | "label" | "labelIcon" | "icon" | "hideLabel" | "name" | "error" | "status" | "hint" | "autocomplete" | "buttonToggle" | "hideMaxLength"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
    onPressEnter?: () => void;
};

export declare type InputProps<T extends string> = Omit<InputInternalProps<T>, (typeof privateProps_2)[number]>;

declare const internalAvatarColors: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type InternalAvatarProps = React_2.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
};

declare const internalAvatarSizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare const internalAvatarTypes: readonly ["base", "rounded"];

export declare function Item({ item, counter, isActive, collapsible, isExpanded, onToggleExpanded, sortable, children, }: TOCItemProps): JSX_2.Element;

declare const Item_2: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;

export declare type ItemActionsDefinition<T extends RecordType> = (item: T) => ActionDefinition[] | undefined;

declare type ItemDefinition = {
    title: string;
    description?: string[];
    avatar?: AvatarVariant;
};

declare type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType_3;
};

declare type Items = typeof Item_2 | typeof PersonItem | typeof CompanyItem | typeof TeamItem;

export declare function ItemSectionHeader({ item, children, isActive, collapsible, isExpanded, onToggleExpanded, sortable, hideChildrenCounter, }: TOCItemSectionHeaderProps): JSX_2.Element;

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

declare type KanbanCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, KanbanVisualizationOptions<Record, Filters, Sortings>>;

declare type KanbanLaneDefinition = {
    id: string;
    title: string;
    variant?: Variant;
};

declare type KanbanOnCreate = (laneId: string) => void | Promise<void>;

declare type KanbanOnMove<TRecord extends RecordType> = (fromLaneId: string, toLaneId: string, sourceRecord: TRecord, destinyRecord: {
    record: TRecord;
    position: "above" | "below";
} | null) => Promise<TRecord>;

declare type KanbanVisualizationOptions<Record extends RecordType, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    lanes: ReadonlyArray<KanbanLaneDefinition>;
    title?: (record: Record) => string;
    description?: (record: Record) => string;
    avatar?: (record: Record) => CardAvatarVariant;
    metadata?: (record: Record) => ReadonlyArray<{
        icon: IconType;
        property: CardMetadataProperty;
    }>;
    onMove?: KanbanOnMove<Record>;
    onCreate?: KanbanOnCreate;
};

/**
 * Represents a single lane configuration with its own filters
 * @template Filters - The available filter configurations for this lane
 */
export declare type Lane<Filters extends FiltersDefinition> = {
    id: string;
    filters: FiltersState<Filters>;
};

export declare type lastIntentType = {
    selectedIntent?: string;
    customIntent?: string;
} | null;

declare type Level = (typeof levels)[number];

declare const levels: readonly ["info", "warning", "critical", "positive"];

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

declare type LinkQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: string | null;
};

/**
 * Group List: Renders the list for a group
 */
declare type ListCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, ListVisualizationOptions<Record, Filters, Sortings>>;

declare type ListPropertyDefinition<R, Sortings extends SortingsDefinition> = WithOptionalSorting_2<R, Sortings> & PropertyDefinition_2<R>;

declare type ListVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    itemDefinition: (record: R) => ItemDefinition;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
};

declare interface LiveCompanionLabels {
    deleteBlock: string;
    expand: string;
    collapse: string;
    oneTopicWithCommentary: string;
    multipleTopicsWithCommentary: string;
}

declare interface LoadingStateProps {
    label: string;
}

export declare const MAX_EXPANDED_ACTIONS = 2;

export declare type MentionedUser = {
    id: number;
    label: string;
    image_url?: string;
    href?: string;
};

export declare interface MentionItemComponentProps {
    item: MentionedUser;
    index: number;
    selected: boolean;
}

export declare interface MentionListRef {
    onKeyDown: (props: {
        event: KeyboardEvent;
    }) => boolean;
}

export declare interface MentionNodeAttrs {
    id: string;
    label: string;
    image_url?: string;
    href?: string;
}

export declare type MentionsConfig = {
    onMentionQueryStringChanged?: (queryString: string) => Promise<MentionedUser[]> | undefined;
    users: MentionedUser[];
};

export declare function Menu({ tree, onCollapse, onSort, onFavoritesChange, favorites, }: MenuProps): JSX_2.Element;

export declare interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
    isSortable?: boolean;
}

export declare interface MenuItem extends NavigationItem {
    icon: IconType;
    badge?: number;
}

export declare interface MenuProps {
    tree: MenuCategory[];
    favorites?: FavoriteMenuItem[];
    onCollapse?: (category: MenuCategory, isOpen: boolean) => void;
    onSort?: (categories: MenuCategory[]) => void;
    onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void;
}

export declare interface Message {
    userId: string;
    text: string;
    dateTime: string;
}

export declare const MessageSources: ({ sources }: MessageSourcesProps) => JSX_2.Element | null;

export declare type MessageSourcesProps = {
    sources: Source[];
};

declare type MetadataAction = {
    icon: IconType;
    label: string;
    onClick: () => void;
    type?: never;
};

declare type MetadataCopyAction = {
    icon?: never;
    label?: never;
    onClick?: never;
    copyValue?: string;
    type: "copy";
};

declare function MetadataItem({ item }: {
    item: MetadataItem;
}): JSX_2.Element;

declare interface MetadataItem {
    label: string;
    value: MetadataItemValue;
    actions?: (MetadataAction | MetadataCopyAction)[];
    hideLabel?: boolean;
    /**
     * Optional info text. When provided, displays an info icon next to the label
     * that shows this text in a tooltip when hovered.
     */
    info?: {
        title: string;
        description?: string;
    };
}

declare type MetadataItemValue = {
    type: "text";
    content: string;
} | {
    type: "avatar";
    variant: AvatarVariant;
    text: string;
} | {
    type: "status";
    label: string;
    variant: StatusVariant;
} | ({
    type: "list";
} & ({
    variant: "person";
    avatars: (PersonAvatarVariant | (PersonAvatarVariant & Record<string, unknown>))[];
} | {
    variant: "team";
    avatars: (TeamAvatarVariant | (TeamAvatarVariant & Record<string, unknown>))[];
} | {
    variant: "company";
    avatars: (CompanyAvatarVariant | (CompanyAvatarVariant & Record<string, unknown>))[];
})) | {
    type: "data-list";
    data: string[];
} | {
    type: "tag-list";
    tags: string[];
} | {
    type: "dot-tag";
    label: string;
    color: NewColor;
} | {
    type: "date";
    formattedDate: string;
    icon?: "warning" | "critical";
};

declare type MetadataItemValue_2 = {
    type: "text";
    content: string;
    label: string;
} | {
    type: "status";
    label: string;
    variant: StatusVariant;
} | {
    type: "dot-tag";
    label: string;
    color: NewColor;
} | {
    type: "tag";
    label: string;
    icon?: IconType;
} | {
    type: "person";
    label: string;
    firstName: string;
    lastName: string;
    src?: string;
};

declare interface MetadataProps {
    /**
     * Everything is not a MetadataItem is ignored.
     * Undefined and boolean enable conditional items
     **/
    items: (MetadataItem | undefined | boolean)[];
    /**
     * If true and the metadata type is a list, it will be collapsed to the first item
     */
    collapse?: boolean;
}

export declare const MobileDropdown: ({ items, children }: DropdownProps) => JSX_2.Element;

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xxs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare type ModuleId = keyof typeof modules;

export declare const modules: {
    readonly "ai-reports": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly ats: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly billing: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly calendar: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly cards: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "clock-in": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly compensations: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly complaints: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly discover: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employee_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employees: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement_insights: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_surveys: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-accounting": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-sales": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-spending": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-treasury": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-workspace": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly goals: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly home: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly hub: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly it_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly kudos: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly meetings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_spending: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "new-trainings": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly notifications: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly inbox: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly overviews: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly pages: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly payroll_bundle: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance_v2: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly playground: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly processes: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly profile: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly project_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly reports: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly salary_advance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly personal_settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shift_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shifts: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly social: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly software: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly space_control: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly talent_analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly tasks: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "time-tracking": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly timeoff: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly workflows: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
};

declare interface MoodTrackerLabels {
    deleteBlock: string;
    expand: string;
    collapse: string;
}

declare type NavigateActionType = {
    type: "navigate";
    href: string;
};

export declare type NavigationFilter<T, InitialValue = T> = {
    /**
     * Converts the initial value to the correct type for the filter.
     * This is useful for filters that have a complex internal state but the initial value is a simple type, for example a navigation filter. The initial can be a simple date but the internal state converts it to a date range based on the granularity.
     * @param defaultValue - The initial value to convert
     * @param props - The props of the filter
     * @returns The converted value
     */
    valueConverter?: (defaultValue: InitialValue, filterDef: NavigationFilterComponentProps<T>["filter"], i18n: TranslationsType) => T;
    /**
     * Renders the filter component.
     * @param props - The props of the filter
     * @returns The rendered component
     */
    render: (props: NavigationFilterComponentProps<T>) => React.ReactNode;
};

export declare type NavigationFilterComponentProps<T> = {
    filter: NavigationFilterDefinition;
    value: T;
    onChange: (value: T) => void;
};

export declare type NavigationFilterDefinition = DateNavigatorFilterDefinition;

export declare type NavigationFilterDefinitionBase<T> = {
    type: string;
    defaultValue: T;
};

/**
 * Record of navigation filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available navigation filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type NavigationFiltersDefinition<Keys extends string = string> = Record<Keys, NavigationFilterDefinition>;

/**
 * Current state of all navigation filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export declare type NavigationFiltersState<Definition extends Record<string, NavigationFilterDefinition>> = {
    [K in keyof Definition]?: NavigationFilterValue<Definition[K]>;
};

/**
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
export declare type NavigationFilterValue<T> = T extends DateNavigatorFilterDefinition ? DateValue : T extends undefined ? undefined : never;

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes_2;

declare type NavigationProps = {
    previous?: {
        url: string;
        title: string;
    };
    next?: {
        url: string;
        title: string;
    };
    counter?: {
        current: number;
        total: number;
    };
};

declare type NavTarget = HTMLAttributeAnchorTarget;

/**
 * Utility type to extract all possible paths from nested object.
 * Generates hyphenated paths from nested object structure
 * Only includes parent key if it has a DEFAULT property
 */
declare type NestedKeyOf<T> = {
    [K in keyof T & string]: T[K] extends object ? K extends "DEFAULT" ? never : T[K] extends {
        DEFAULT: string;
    } ? `${K}` | `${K}-${NestedKeyOf<T[K]>}` : `${K}-${NestedKeyOf<T[K]>}` : K extends "DEFAULT" ? never : `${K}`;
}[keyof T & string];

declare type NestedResponseWithType<R extends RecordType> = {
    records: R[];
    type?: NestedVariant;
    paginationInfo?: ChildrenPaginationInfo;
};

declare type NestedVariant = "basic" | "detailed";

declare type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>;

declare type NextDepth<T> = T extends 1 ? 2 : T extends 2 ? 3 : T extends 3 ? 4 : never;

declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

export declare const NotesTextEditor: ForwardRefExoticComponent<NotesTextEditorProps & RefAttributes<NotesTextEditorHandle>>;

export declare type NotesTextEditorHandle = {
    clear: () => void;
    focus: () => void;
    setContent: (content: string) => void;
    insertAIBlock: () => void;
    insertTranscript: (title: string, users: User[], messages: Message[]) => void;
    pushContent: (content: string) => void;
};

export declare interface NotesTextEditorProps {
    onChange: (value: {
        json: JSONContent | null;
        html: string | null;
    }) => void;
    placeholder: string;
    initialEditorState?: {
        content?: JSONContent | string;
        title?: string;
    };
    readonly?: boolean;
    aiBlockConfig?: AIBlockConfig;
    onTitleChange?: (title: string) => void;
    labels: {
        toolbarLabels: ToolbarLabels;
        slashCommandGroupLabels?: SlashCommandGroupLabels;
        aiBlockLabels?: AIBlockLabels;
        moodTrackerLabels?: MoodTrackerLabels;
        liveCompanionLabels?: LiveCompanionLabels;
        transcriptLabels?: TranscriptLabels;
        titlePlaceholder?: string;
    };
    actions?: actionType_2[];
    secondaryActions?: secondaryActionsType_2[];
    metadata?: MetadataItemValue_2[];
    withPadding?: boolean;
    showBubbleMenu?: boolean;
}

export declare const NotesTextEditorSkeleton: ({ withHeader, withTitle, withPadding: _withPadding, withToolbar, }: NotesTextEditorSkeletonProps) => JSX_2.Element;

export declare interface NotesTextEditorSkeletonProps {
    withHeader?: boolean;
    withTitle?: boolean;
    withPadding?: boolean;
    withToolbar?: boolean;
}

export declare type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
    options?: NumberFilterOptions_2;
};

declare type NumberFilterOptions_2 = {
    min?: number;
    max?: number;
    modes?: readonly ("range" | "single")[];
    openCloseToggle?: boolean;
};

declare type NumberFilterValue = {
    mode: "single";
    value: number | undefined;
} | {
    mode: "range";
    from: {
        value: number | undefined;
        closed: boolean;
    };
    to: {
        value: number | undefined;
        closed: boolean;
    };
} | undefined;

export declare const NumberInput: (props: NumberInputProps) => JSX_2.Element;

declare type NumberInputInternalProps = Omit<InputInternalProps<string>, "value" | "type" | "onChange"> & {
    locale: string;
    value?: number | null;
    step?: number;
    min?: number;
    max?: number;
    maxDecimals?: number;
    onChange?: (value: number | null) => void;
    units?: string;
};

export declare type NumberInputProps = Omit<NumberInputInternalProps, (typeof privateProps_3)[number]>;

declare type NumericQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: number | null;
};

export declare function OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): JSX_2.Element;

declare interface OmniButtonProps {
    label: string;
    options: Option_2[];
    hasNewUpdate?: boolean;
}

export declare type OnAddNewElementParams = {
    type: ElementType;
    afterId?: string;
};

export declare type OnBulkActionCallback<Record extends RecordType, Filters extends FiltersDefinition> = (...args: [
action: BulkAction,
...Parameters<OnSelectItemsCallback<Record, Filters>>
]) => void;

declare type OnChangeQuestionParams = BaseQuestionOnChangeParams & ({
    type: "text" | "longText";
    value?: string | null;
} | {
    type: "rating";
    value: number;
} | {
    type: "select";
    value?: string | null;
    options: SelectQuestionOption[];
} | {
    type: "multi-select";
    value?: string[] | null;
    options: SelectQuestionOption[];
} | {
    type: "numeric";
    value?: number | null;
} | {
    type: "link";
    value?: string | null;
} | {
    type: "date";
    value?: Date | null;
});

export declare type OnChangeSectionParams = {
    id: string;
    title: string;
    description?: string;
    questions?: QuestionElement[];
};

export declare type OnDuplicateElementParams = {
    elementId: string;
    type: ElementType;
};

export declare const OneAlert: ({ title, description, action, link, icon, variant, }: AlertProps) => JSX_2.Element;

export declare const OneApprovalHistory: FC<OneApprovalHistoryProps>;

declare type OneApprovalHistoryProps = {
    steps: ApprovalStep[];
};

export declare const OneCalendar: {
    (props: OneCalendarProps): JSX_2.Element;
    displayName: string;
};

export declare const OneCalendarInternal: ({ mode, view, onSelect, defaultMonth, defaultSelected, showNavigation, showInput, minDate, maxDate, compact, }: OneCalendarInternalProps) => JSX_2.Element;

export declare interface OneCalendarInternalProps {
    mode: CalendarMode;
    view: CalendarView;
    onSelect?: (date: Date | DateRange | null) => void;
    defaultMonth?: Date;
    defaultSelected?: Date | DateRange | null;
    showNavigation?: boolean;
    showInput?: boolean;
    minDate?: Date;
    maxDate?: Date;
    compact?: boolean;
}

export declare type OneCalendarProps = Omit<OneCalendarInternalProps, (typeof privateProps_5)[number]>;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OneDataCollection: <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: OneDataCollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>) => JSX_2.Element;

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataCollectionSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataCollectionSource to:
 * 1. Support the composition pattern - data sources can be created and managed independently
 * 2. Allow a single data source to be visualized in multiple ways simultaneously
 * 3. Enable reuse of the same data source in different parts of the application
 * 4. Provide a clean separation of concerns between data management and UI rendering
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 *
 * @param source - The data source containing filters, data, and state management
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
declare type OneDataCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    visualizations: ReadonlyArray<Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    onSelectItems?: OnSelectItemsCallback<R, Filters>;
    onBulkAction?: OnBulkActionCallback<R, Filters>;
    emptyStates?: CustomEmptyStates;
    onTotalItemsChange?: (totalItems: number) => void;
    fullHeight?: boolean;
    /** Function to handle state change */
    onStateChange?: (state: DataCollectionStatusComplete<FiltersState<Filters>>) => void;
    /** Key for the data collection settings and state, must be unique for each data collection and contain the version e.g. "employees/v1"
     */
    id?: string;
    /** Storage for the data collection settings and state: use false to disable the storage */
    storage?: false | {
        /** Features for the data collection storage , for example you can disable the storage for the data collection filters state
         * You can use "*" for all features and ! to disable a feature
         *
         * For example:
         * - "*" - will use all storage features (empty "" means all)
         * - "filters" - will use only the storage for the data collection filters state
         * - "filters, sortings" - will use the storage for the data collection filters and sortings state
         * - "*, !filters" - will not use the storage for the data collection filters state
         * - "!filters, sortings" - will not use the storage for the data collection filters and sortings state
         *
         */
        features?: DataCollectionStorageFeaturesDefinition;
    };
    /**
     * @deprecated removes the horizontal padding from the data collection
     */
    tmpFullWidth?: boolean;
};

export declare function OneDateNavigator({ onSelect, defaultValue, presets, granularities, hideNavigation, hideGoToCurrent, compareTo, defaultCompareTo, onCompareToChange, value, ...props }: OneDatePickerProps): JSX_2.Element;

export declare interface OneDatePickerProps extends Omit<DatePickerPopupProps, "children"> {
    hideNavigation?: boolean;
    hideGoToCurrent?: boolean;
}

export declare function OneEmptyState({ title, description, variant, emoji, actions, }: Types.OneEmptyStateProps): JSX_2.Element;

declare type OneEmptyStateProps = {
    /**
     * The title of the empty state
     */
    title: string;
    /**
     * If defined, a description will be displayed in the empty state
     * @optional
     */
    description?: string;
    /**
     * An array of action objects to display as buttons in the empty state.
     * Each action represents a user-interactable option, such as "Retry" or "Go Back",
     * and can include a label, click handler, optional icon, and button variant.
     * @optional
     */
    actions?: ActionProps_3[];
} & ({
    /**
     * The variant of the empty state
     * @optional
     */
    variant?: "default";
    /**
     * An icon will be displayed in the empty state.
     * emoji string
     */
    emoji?: string;
} | {
    /**
     * The variant of the empty state
     * @optional
     */
    variant: Exclude<AlertAvatarProps["type"], "positive">;
    emoji?: never;
});

/**
 * OneFiltersPicker component to use as a single component
 */
export declare const OneFilterPicker: {
    <Definition extends FiltersDefinition>(props: OneFilterPickerRootProps<Definition>): JSX_2.Element;
    displayName: string;
};

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
declare type OneFilterPickerRootProps<Definition extends FiltersDefinition> = {
    /** The definition of available filters and their configurations */
    filters?: Definition;
    /** Current state of applied filters */
    value: FiltersState<Definition>;
    /** Optional preset configurations that users can select */
    presets?: PresetsDefinition<Definition>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
    /** The children of the component */
    children?: React.ReactNode;
    /** The mode of the component */
    mode?: FiltersMode;
    /** Callback fired when filters open state is changed */
    onOpenChange?: (isOpen: boolean) => void;
};

declare interface OneIconProps extends SVGProps<SVGSVGElement> {
    spin?: boolean;
    hover?: boolean;
    background?: string;
    size?: "xs" | "sm" | "md" | "lg";
}

export declare function OnePagination({ totalPages, currentPage, onPageChange, showControls, ariaLabel, visibleRange, hasNextPage, disabled, }: OnePaginationProps): JSX_2.Element;

declare interface OnePaginationProps {
    /**
     * The total number of pages. Pass 0 if the total is unknown.
     */
    totalPages: number;
    /**
     * The current page.
     * @default 1
     */
    currentPage?: number;
    /**
     * The callback function to handle page change.
     */
    onPageChange?: (page: number) => void;
    /**
     * Whether to show the controls.
     * @default true
     */
    showControls?: boolean;
    /**
     * Accessible label for the pagination navigation.
     * @default "Page navigation"
     */
    ariaLabel?: string;
    /**
     * The number of pages to show on the sides of the current page.
     * @default 3
     */
    visibleRange?: number;
    /**
     * Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.
     * @default true
     */
    hasNextPage?: boolean;
    /**
     * Whether to disable the pagination.
     * @default false
     */
    disabled?: boolean;
}

export declare const OnePersonListItem: default_2.ForwardRefExoticComponent<OnePersonListItemProps & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: () => default_2.JSX.Element;
};

export declare type OnePersonListItemProps = {
    person: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        avatarBadge?: AvatarBadge;
    };
    description?: string;
    bottomTags: Omit<F0TagRawProps, "noBorder">[];
    rightTag?: Props_3;
    actions?: {
        primary?: {
            icon?: IconType;
            label: string;
            onClick: () => void;
        };
        secondary?: {
            icon: IconType;
            onClick: () => void;
        };
    };
    info?: string;
    onClick: () => void;
    withPointerCursor?: boolean;
};

export declare type OnLoadDataCallback<Record extends RecordType, Filters extends FiltersDefinition> = (data: {
    totalItems: number | undefined;
    filters: FiltersState<Filters>;
    search: string | undefined;
    isInitialLoading: boolean;
    data: Record[];
}) => void;

export declare type OnLoadErrorCallback = (error: DataError) => void;

export declare type OnSelectItemsCallback<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: SelectedItemsDetailedStatus<R, Filters> & {
    byLane?: Record<string, SelectedItemsDetailedStatus<R, Filters>>;
}, clearSelectedItems: () => void) => void;

declare type OnSubmitHandler<TFieldValues extends FieldValues, TTransformedValues extends FieldValues | undefined = undefined> = (data: ReturnType<UseFormHandleSubmit<TFieldValues, TTransformedValues>>) => Promise<Success | FormError<TFieldValues>> | Success | FormError<TFieldValues>;

declare type OpenLinkActionType = {
    type: "open-link";
    href: string;
};

declare interface Option_2 {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}

declare interface OverflowListProps<T> {
    items: T[];
    /**
     * What to render as a list item (items outside of the overflow list)
     * @param item - The item to render
     * @param index - The index of the item
     * @param isVisible - Whether this item is in the visible list (true) or measurement container (false)
     */
    renderListItem: (item: T, index: number, isVisible?: boolean) => ReactNode;
    /**
     * Additional styling for the container
     */
    className?: string;
    /**
     * The gap between items in pixels
     * @default 8
     */
    gap?: number;
    /**
     * The minimum size of the container
     * @default 0
     */
    minSize: number;
    /**
     * Callback when the visible items change
     * @param visibleItems - The visible items
     */
    onVisibleItemsChange?: (visibleItems: T[]) => void;
}

export declare function Page({ children, header, embedded }: PageProps): JSX_2.Element;

export declare namespace Page {
    var displayName: string;
}

export declare type PageAction = {
    label: string;
    icon: IconType;
} & ({
    href: string;
} | {
    actions: Array<{
        label: string;
        href: string;
    }>;
});

/**
 * Represents a paginated response with page-based navigation.
 *
 * Combines the base pagination response with additional properties specific to
 * page-based pagination, allowing clients to navigate the dataset using page numbers.
 *
 * This type is useful for APIs returning data in discrete pages, where both the
 * current page index and the total number of pages are provided.
 *
 * @template TRecord - The type of the individual records in the dataset.
 *
 * @property {"pages"} type - Indicates the pagination type is page-based.
 * @property {number} currentPage - The index of the current page being viewed.
 * @property {number} pagesCount - The total number of pages available.
 */
export declare type PageBasedPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "pages">;
    /** Current page number (1-indexed) */
    currentPage: number;
    /** Total number of pages available */
    pagesCount: number;
};

export declare function PageHeader({ module, statusTag, breadcrumbs, actions, embedded, navigation, productUpdates, favorites, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
}

/**
 * Paginated data adapter configuration
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type PaginatedDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends PaginatedFetchOptions<Filters> = PaginatedFetchOptions<Filters>, FetchReturn = PaginatedResponse<R>> = {
    /** Indicates this adapter uses page-based pagination */
    paginationType: PaginationType;
    /** Default number of records per page */
    perPage?: number;
    /**
     * Function to fetch paginated data based on filter and pagination options
     * @param options - The filter and pagination options to apply when fetching data
     * @returns Paginated response with records and pagination info
     */
    fetchData: (options: Options) => FetchReturn | Promise<FetchReturn> | Observable<PromiseState<FetchReturn>>;
};

export declare type PaginatedFetchOptions<Filters extends FiltersDefinition> = BaseFetchOptions<Filters> & {
    pagination: {
        perPage?: number;
    } & ({
        currentPage: number;
        cursor?: never;
    } | {
        cursor?: string | null;
        currentPage?: never;
    });
};

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export declare type PaginatedResponse<TRecord> = PageBasedPaginatedResponse<TRecord> | InfiniteScrollPaginatedResponse<TRecord>;

/**
 * Pagination state and controls
 */
export declare type PaginationInfo = Omit<PageBasedPaginatedResponse<unknown>, "records"> | Omit<InfiniteScrollPaginatedResponse<unknown>, "records">;

/**
 * Defines the available pagination types used throughout the application.
 * - "pages": Represents traditional page-based navigation with numbered pages.
 * - "infinite-scroll": Represents continuous loading of content as the user scrolls.
 * - "no-pagination": Represents a collection that does not use pagination.
 */
export declare type PaginationType = "pages" | "infinite-scroll" | "no-pagination";

declare type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];

declare type PersonAvatarVariant = Extract<AvatarVariant, {
    type: "person";
}>;

declare const PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: PieChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type PopupSize = "sm" | "md" | "lg";

declare type PostDescriptionProps = {
    content: HTMLString;
    collapsed?: boolean;
};

declare type PostEventProps = {
    title: string;
    mediaUrl?: string;
    place?: string;
    date: Date;
};

export declare const predefinedPresets: Record<string, DatePreset>;

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export declare type PresetDefinition<Filters extends FiltersDefinition> = {
    /** Display name for the preset */
    label: string;
    /** Filter configuration to apply when this preset is selected */
    filter: FiltersState<Filters>;
    /**
     * How the preset is applied when clicked:
     * - 'replace' (default): Replace all current filters with preset's filter
     * - 'additive': Merge preset's filter with current filters, preserving existing selections
     */
    mode?: "replace" | "additive";
    /** Function to count the number of items that match the filter */
    itemsCount?: (filters: FiltersState<Filters>) => Promise<number | undefined> | number | undefined;
};

export declare type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[];

export declare type PrevNextDateNavigation = {
    prev: DateRange | false;
    next: DateRange | false;
};

declare interface PrimaryAction {
    disabled?: boolean;
    tooltip?: string;
    isVisible?: boolean;
}

declare interface PrimaryActionButton extends PrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

export declare type PrimaryActionItemDefinition = Pick<DropdownItemObject, "label" | "icon"> & {
    loading?: boolean;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
};

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export declare type PrimaryActionsDefinitionFn = () => PrimaryActionItemDefinition | PrimaryActionItemDefinition[] | undefined;

export declare type primaryActionType = {
    action: actionType;
    subActions?: subActionType[];
};

declare interface PrimaryDropdownAction<T> extends PrimaryAction {
    items: ButtonDropdownItem<T>[];
    value?: T;
    onClick: (value: T, item: ButtonDropdownItem<T>) => void;
}

export declare const PrivateBox: FC<PropsWithChildren>;

declare const privateProps: readonly ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style"];

declare const privateProps_2: readonly ["buttonToggle"];

declare const privateProps_3: readonly ["buttonToggle"];

declare const privateProps_4: readonly [];

declare const privateProps_5: readonly ["compact"];

declare const privateProps_6: readonly ["delay"];

declare type ProductUpdate = {
    title: string;
    href: string;
    mediaUrl: string;
    updated: string;
    unread?: boolean;
    onClick?: ComponentProps<typeof DropdownMenuItem>["onClick"];
};

declare type ProductUpdatesProp = {
    label: string;
    updatesPageUrl: string;
    getUpdates: () => Promise<Array<ProductUpdate>>;
    hasUnread?: boolean;
    currentModule: string;
    onOpenChange?: ComponentProps<typeof DropdownMenu>["onOpenChange"];
    onHeaderClick?: F0ButtonProps["onClick"];
    onItemClick?: ComponentProps<typeof DropdownMenuItem>["onClick"];
    emptyScreen: {
        title: string;
        description: string;
        buttonText: string;
    };
    errorScreen: {
        title: string;
        description: string;
        buttonText: string;
    };
    crossSelling?: {
        isVisible: boolean;
        sectionTitle: string;
        onClose?: () => void;
        products: Array<{
            title: string;
            description: string;
            onClick: () => void;
            dismissable: boolean;
            onClose?: () => void;
            trackVisibility?: (open: boolean) => void;
        } & ({
            module?: never;
            type: "one-campaign";
        } | {
            module: ModuleId;
            type?: never;
        })>;
    };
};

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export declare type PromiseOrObservable<T> = T | Promise<T> | Observable<PromiseState<T>>;

declare interface PromiseState<T> {
    loading: boolean;
    error?: Error | null;
    data?: T | null;
}

declare type PropertyDefinition_2<T> = {
    label: string;
    /**
     * Optional tooltip text. When provided, displays an info icon next to the header content
     * that shows this text in a tooltip when hovered.
     */
    info?: string;
    /**
     * Function that extracts and formats the value from an item.
     * Should return an object matching the expected args for the specified renderer type.
     *
     * Example usage:
     * {
     *   render: (item) => ({
     *     type: "avatar",
     *     value: {
     *       type: "person",
     *       firstName: item.firstName,
     *       lastName: item.lastName,
     *     }
     *   })
     * }
     */
    render: (item: T) => RendererDefinition | string | number | undefined;
    /**
     * Function that determines if the property should be hidden for a given item.
     * Should return true if the property should be hidden, false otherwise.
     */
    hide?: (item: T) => boolean;
};

declare type Props = {} & Pick<BaseHeaderProps, "avatar" | "title" | "description" | "primaryAction" | "secondaryActions" | "otherActions" | "metadata" | "status" | "deactivated">;

declare type Props_2 = {
    /** Main heading text */
    title: string;
    /** Description text below the title */
    description: string;
    /**  Complementary action specific to the section */
    action?: Pick<F0ButtonProps, "label" | "onClick"> & {
        icon?: IconType;
        variant?: "default" | "outline";
    };
    /** Optional link to related documentation (Help center or other link) */
    link?: {
        label: string;
        href: string;
    };
    /** If specified, a separator will be displayed above or below the content */
    separator?: "top" | "bottom";
};

declare type Props_3 = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});

declare interface Props_4 {
    title: string;
    content: string;
    buttonLabel?: string;
    buttonIcon?: IconType;
    buttonAction?: () => void;
    type: Type;
}

declare type Props_5 = {
    label: string;
    icon: IconType;
    iconClassName?: string;
    count: number;
    onClick?: () => void;
};

declare type Props_6<Id extends string | number = string | number> = {
    id: Id;
    module?: ModuleId;
    title: string;
    subtitle: string;
    onClick?: (id: Id) => void;
};

declare type Props_7<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

declare type Props_8<Id extends string | number = string | number> = {
    items: Omit<WidgetInboxListItemProps<Id>, "onClick">[];
    minSize?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
} & Pick<ComponentProps<typeof VerticalOverflowList>, "onVisibleItemsChange">;

declare type Props_9<Id extends string | number = string | number> = {
    items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[];
    minSize?: number;
    gap?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
};

declare type Pulse = (typeof pulses)[number];

declare const pulses: readonly ["superNegative", "negative", "neutral", "positive", "superPositive"];

export declare type QuestionActionParams = {
    questionId: string;
    type: ActionType;
    index: number;
};

export declare type QuestionElement = Omit<TextQuestionProps, QuestionPropsToOmit> | Omit<RatingQuestionProps & {
    type: "rating";
}, QuestionPropsToOmit> | Omit<SelectQuestionProps & {
    type: "select" | "multi-select";
}, QuestionPropsToOmit> | Omit<NumericQuestionProps & {
    type: "numeric";
}, QuestionPropsToOmit> | Omit<LinkQuestionProps & {
    type: "link";
}, QuestionPropsToOmit> | Omit<DateQuestionProps & {
    type: "date";
}, QuestionPropsToOmit>;

declare type QuestionPropsToOmit = "onAction" | "onChange" | "onAddNewElement";

export declare type QuestionType = "rating" | "select" | "multi-select" | "text" | "longText" | "numeric" | "link" | "date";

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const RadarChart: <K extends ChartConfig>(props: RadarChartProps<K> & RefAttributes<HTMLDivElement>) => React.ReactNode;

export declare const _RadarChart: <K extends ChartConfig>({ data, dataConfig, scaleMin, scaleMax, aspect }: RadarChartProps<K>, ref: ForwardedRef<HTMLDivElement>) => JSX_2.Element;

export declare type RadarChartProps<K extends ChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    scaleMin?: number;
    scaleMax?: number;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const rangeSeparator = "\u2192";

declare type RatingQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    value?: number;
} & {
    options: {
        value: number;
        label: string;
    }[];
};

declare interface ReactionProps {
    emoji: string;
    initialCount: number;
    hasReacted?: boolean;
    users?: User_2[];
    onInteraction?: (emoji: string) => void;
}

declare interface ReactionsProps {
    items: ReactionProps[];
    onInteraction?: (emoji: string) => void;
    locale?: string;
    action?: {
        label: string;
        icon: IconType;
        onClick: () => void;
    };
}

/**
 * Utility type to get all possible paths through an object using dot notation
 * @template T - The object type to traverse
 */
declare type RecordPaths<T> = T extends Record<string, unknown> ? {
    [K in keyof T]: K extends string ? T[K] extends Record<string, unknown> ? K | `${K}.${RecordPaths<T[K]>}` : K : never;
}[keyof T] : never;

/**
 * Utility type to get the value type at a given path
 * @template T - The object type
 * @template P - The path string
 */
declare type RecordPathValue<T, P extends string> = P extends keyof T ? T[P] : P extends `${infer K}.${infer Rest}` ? K extends keyof T ? RecordPathValue<T[K], Rest> : never : never;

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export declare type RecordType = Record<string, unknown>;

export declare type RejectedFile = {
    file: File;
    reason: FileRejectionReason;
    message?: string;
};

declare type RendererDefinition = ValueDisplayRendererDefinition;

export declare type ResolvedRecordType<R> = R extends RecordType ? R : RecordType;

export declare const ResourceHeader: ({ avatar, title, description, primaryAction, secondaryActions, otherActions, status, metadata, deactivated, }: Props) => JSX_2.Element;

export declare type resultType = {
    value: string | null;
    mentionIds?: number[];
};

export declare const RichTextDisplay: ForwardRefExoticComponent<RichTextDisplayProps & RefAttributes<HTMLDivElement>>;

export declare type RichTextDisplayHandle = HTMLDivElement;

export declare interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
    content: string;
    className?: string;
    format?: "html" | "markdown";
}

export declare const RichTextEditor: ForwardRefExoticComponent<RichTextEditorProps & RefAttributes<RichTextEditorHandle>> & {
    Skeleton: ({ rows }: RichTextEditorSkeletonProps) => JSX_2.Element;
};

export declare type RichTextEditorHandle = {
    clear: () => void;
    clearFiles: () => void;
    focus: () => void;
    setError: (error: string | null) => void;
    setContent: (content: string) => void;
};

export declare interface RichTextEditorProps {
    mentionsConfig?: MentionsConfig;
    enhanceConfig?: enhanceConfig;
    filesConfig?: filesConfig;
    secondaryAction?: secondaryActionsType;
    primaryAction?: primaryActionType;
    onChange: (result: resultType) => void;
    maxCharacters?: number;
    placeholder: string;
    initialEditorState?: {
        content?: string;
        files?: File[];
    };
    toolbarLabels: ToolbarLabels;
    title: string;
    errorConfig?: errorConfig;
    height?: heightType;
    plainHtmlMode?: boolean;
    fullScreenMode?: boolean;
}

declare interface RichTextEditorSkeletonProps {
    rows?: number;
}

declare type SchemaType = ZodType;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & {
showBar?: boolean;
viewportRef?: React.RefObject<HTMLDivElement>;
onScrollTop?: () => void;
onScrollBottom?: () => void;
scrollMargin?: number;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

export declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type SearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

declare interface SecondaryAction extends PrimaryActionButton {
    variant?: "outline" | "critical" | "outlinePromote" | "promote";
}

export declare type SecondaryActionGroup = {
    label?: string;
    items: SecondaryActionItem[];
};

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export declare type SecondaryActionItem = Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    enabled?: boolean;
    hideLabelWhenExpanded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
};

export declare type SecondaryActionsDefinition = {
    expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>;
    actions: () => SecondaryActionsItems | undefined;
} | (() => SecondaryActionsItems | undefined);

export declare type SecondaryActionsItems = SecondaryActionItem[] | SecondaryActionItem[][] | SecondaryActionGroup[];

export declare type secondaryActionsType = secondaryActionType | secondaryActionType[];

declare type secondaryActionsType_2 = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: IconType;
    critical?: boolean;
};

export declare type secondaryActionType = (actionType | toggleActionType) & {
    type?: "button" | "switch";
};

export declare type SectionActionParams = {
    sectionId: string;
    type: ActionType;
    index: number;
};

export declare type SectionElement = Omit<SectionProps, "onAction" | "onChange">;

export declare const SectionHeader: ({ title, description, action, link, separator, }: Props_2) => JSX_2.Element;

declare type SectionProps = {
    id: string;
    title: string;
    description?: string;
    locked?: boolean;
    questions?: QuestionElement[];
};

declare type SectionProps_2 = {
    title: string;
    items: Omit<ActivityItemProps, "onClick">[];
    onClickItem: (id: string) => void;
    onItemVisible?: (id: string) => void;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Select: <T extends string = string, R = unknown>(props: F0SelectProps_2<T, R> & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export declare type SelectedItems<T> = ReadonlyArray<T>;

export declare type SelectedItemsDetailedStatus<R extends RecordType, Filters extends FiltersDefinition> = {
    allSelected: boolean | "indeterminate";
    /** Status of items that have been loaded. Items not yet loaded won't appear here. */
    itemsStatus: ReadonlyArray<{
        item: R;
        checked: boolean;
    }>;
    /** All selected item IDs, including those not yet loaded */
    selectedIds: ReadonlyArray<SelectionId>;
    groupsStatus: Record<string, boolean>;
    filters: FiltersState<Filters>;
    selectedCount: number;
};

/**
 * Represents the selected items by id
 */
export declare type SelectedItemsState<R extends RecordType> = {
    allSelected: boolean | "indeterminate";
    items: Map<SelectedItemState<R>["id"], SelectedItemState<R>>;
    groups: Map<SelectedState["id"], SelectedState>;
};

export declare type SelectedItemState<R extends RecordType> = SelectedState & {
    item?: WithGroupId<R>;
};

export declare type SelectedState = {
    id: SelectionId;
    checked: boolean;
};

export declare type SelectionId = number | string;

export declare type SelectQuestionOption = {
    id?: string;
    value: string;
    label: string;
    correct?: boolean;
};

declare type SelectQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    options: SelectQuestionOption[];
} & ({
    type: "select";
    value?: string | null;
} | {
    type: "multi-select";
    value?: string[] | null;
});

export declare const selectSizes: readonly ["sm", "md"];

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element | null;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function Sidebar({ header, body, footer, onFooterDropdownClick, }: SidebarProps): JSX_2.Element;

export declare function SidebarFooter({ user, options, showActivityButton, activityButtonShortcut, onActivityButtonClick, onDropdownClick, hasActivityUpdates, }: SidebarFooterProps): JSX_2.Element;

declare interface SidebarFooterProps {
    user: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
    };
    showActivityButton?: boolean;
    hasActivityUpdates?: boolean;
    activityButtonShortcut?: string[];
    onActivityButtonClick?: () => void;
    onDropdownClick?: () => void;
    options: DropdownItem[];
}

export declare function SidebarHeader({ companies, selected, onChange, withNotification, additionalOptions, isLoading, }: SidebarHeaderProps): JSX_2.Element;

export declare type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;

declare type SidebarIconProps = {
    isExpanded: boolean;
    onClick?: () => void;
};

declare interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    onFooterDropdownClick?: () => void;
}

declare type SidebarState = "locked" | "unlocked" | "hidden";

/**
 * Response structure for non-paginated data
 */
declare type SimpleResult<T> = T[];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare interface SlashCommandGroupLabels {
    textStyles: string;
    lists: string;
    blocks: string;
    [key: string]: string;
}

/**
 * Type helper to extract keys from a SortingsDefinition
 */
export declare type SortingKey<Definition extends SortingsDefinition> = Definition extends readonly string[] ? Definition[number] : keyof Definition;

export declare type SortingsDefinition = Record<string, {
    label: string;
}>;

export declare type SortingsState<Definition extends SortingsDefinition> = {
    field: keyof Definition;
    order: SortOrder;
} | null;

/**
 * Type helper to create a multiple sortings state (the main sorting and the grouping sorting)
 */
export declare type SortingsStateMultiple = {
    field: string;
    order: "asc" | "desc";
}[];

export declare type SortOrder = "asc" | "desc";

declare type Source = {
    title: string;
    link?: string;
    icon?: string;
    targetBlank?: boolean;
};

export declare function Spinner({ size, className }: SpinnerProps): JSX_2.Element;

declare interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}

declare const spinnerVariants: (props?: ({
    size?: "small" | "large" | "medium" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "0" | "1" | "2" | "3" | "4" | "lg" | "md" | "sm" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "px" | "xl" | "0.5" | "1.5" | "2.5" | undefined;
wrap?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "0" | "1" | "2" | "3" | "4" | "lg" | "md" | "sm" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "px" | "xl" | "0.5" | "1.5" | "2.5" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type Status = "waiting" | "pending" | "approved" | "rejected";

declare const statuses: readonly ["neutral", "info", "positive", "warning", "critical"];

declare type StatusVariant = Variant;

declare interface StepItemProps {
    text: string;
    isCompleted?: boolean;
}

export declare type subActionType = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: IconType;
};

declare type Success = {
    success: true;
    rootMessage?: never;
    errors?: never;
};

declare interface SuccessMessageProps {
    title: string;
    description: string;
    buttonLabel?: string;
    buttonOnClick?: () => void;
}

export declare type SummariesDefinition = Record<string, {
    type: SummaryType;
}>;

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Type helper to extract keys from a SummaryDefinition
 */
export declare type SummaryKey<Definition extends SummariesDefinition> = Definition extends readonly string[] ? Definition[number] : keyof Definition;

export declare type SummaryType = "sum";

export declare function Switch({ title, onCheckedChange, id, disabled, checked, value, hideLabel, presentational, ...rest }: SwitchProps): JSX_2.Element;

declare interface SwitchProps extends DataAttributes_2 {
    /**
     * The title of the switch
     */
    title?: string;
    /**
     * The id of the switch
     */
    id?: string;
    /**
     * The checked state of the switch
     * @default false
     */
    checked?: boolean;
    /**
     * The callback function that is called when the switch is toggled
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the switch is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the switch
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the switch is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
}

export declare type TabItem = {
    label: string;
    index?: boolean;
    variant?: "default" | "upsell";
    onClick?: () => void;
} & DataAttributes_2 & ({
    href: string;
} | {
    id: string;
});

declare type TableCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, TableVisualizationOptions<R, Filters, Sortings, Summaries>>;

declare type TableColumnDefinition<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = WithOptionalSorting<R, Sortings> & Pick<ComponentProps<typeof TableHead>, "hidden" | "info" | "infoIcon" | "sticky" | "width"> & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>;
    /**
     * The id of the column (if not provided, the id will be the label of the column)
     */
    id?: ColId;
    /**
     * The initial order of the column
     */
    order?: number;
    /**
     * The initial state of the hidden (only applies if allowColumnHiding is true)
     */
    hidden?: boolean;
    /**
     * Avoid hiding the column by the user
     */
    noHiding?: boolean;
};

declare function TableHead({ children, width, sortState, onSortClick, info, infoIcon, sticky, hidden, align, className, }: TableHeadProps): JSX_2.Element;

declare interface TableHeadProps {
    children: React.ReactNode;
    /**
     * The width of the header cell. If not provided, the width will be "auto"
     * @default "auto"
     */
    width?: ColumnWidth;
    /**
     * When true, the header cell will stick in the specified position when scrolling horizontally
     * @default undefined
     */
    sticky?: {
        left?: number;
        right?: never;
    } | {
        left?: never;
        right?: number;
    };
    /**
     * The current sort direction of this column. "none" indicates no sorting,
     * "asc" sorts ascending (A-Z, 1-9), and "desc" sorts descending (Z-A, 9-1)
     * @default "none"
     */
    sortState?: "none" | "asc" | "desc";
    /**
     * Callback fired when the sort button is clicked.
     * Use this to handle toggling between sort states.
     */
    onSortClick?: () => void;
    /**
     * Optional tooltip text. When provided, displays an info icon next to the header content
     * that shows this text in a tooltip when hovered.
     */
    info?: string;
    /**
     * Icon to display when info is provided.
     * @default InfoCircleLine
     */
    infoIcon?: IconType;
    /**
     * When true, the header cell will not be visible.
     * @default false
     */
    hidden?: boolean;
    /**
     * Alingment of the cell
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * The class name of the header cell
     */
    className?: string;
}

declare type TableVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = {
    /**
     * The columns to display
     */
    columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>;
    /**
     * The number of columns to freeze on the left
     */
    frozenColumns?: 0 | 1 | 2;
    /**
     * Allow users to reorder columns (you can only reorder columns that are not frozen) (check cols props to define the order)
     */
    allowColumnReordering?: boolean;
    /**
     * Allow users to hide columns (you can define especifcally non hiddable columns in col props, also frozen columns are not hiddable)
     */
    allowColumnHiding?: boolean;
};

declare type TableVisualizationSettings = {
    order?: ColId[];
    hidden?: ColId[];
};

export declare const Tabs: FC<TabsProps> & {
    Skeleton: FC<Pick<TabsProps, "secondary">>;
};

export declare interface TabsProps {
    tabs: TabItem[];
    activeTabId?: string;
    setActiveTabId?: Dispatch<string>;
    secondary?: boolean;
    embedded?: boolean;
}

export declare const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">>;

declare type Tag = {
    icon: IconType;
    label?: string;
    description?: string;
};

declare const tagDotColors: ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare interface Task {
    id: number | string;
    text: string;
    badge?: {
        text: string;
        isPastDue?: boolean;
    };
    counter?: number;
}

export declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare interface TasksList_2 {
    inProgress?: (Task | string)[];
    todo?: (Task | string)[];
}

export declare interface TasksListProps {
    tasks: TasksList_2;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}

declare type TeamAvatarVariant = Extract<AvatarVariant, {
    type: "team";
}>;

declare const TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;

declare type TeamItemProps = {
    name: string;
    action?: ActionType_3;
};

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<Omit<React_2.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "onFocus" | "onBlur"> & {
    value?: string;
} & Pick<InputFieldProps<string>, "label" | "value" | "onChange" | "onFocus" | "onBlur" | "onKeyDown" | "status" | "icon" | "maxLength" | "placeholder" | "error" | "hideLabel" | "hint" | "labelIcon" | "clearable" | "onClear"> & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols" | "label" | "labelIcon" | "icon" | "hideLabel" | "maxLength" | "clearable" | "onBlur" | "onFocus" | "name" | "status" | "hint" | "error">;

declare type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    type: "text" | "longText";
    value?: string | null;
};

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

declare type TOCItem<Depth extends 1 | 2 | 3 | 4 = 1> = BaseTOCItem & {
    children?: NextDepth<Depth> extends never ? never : TOCItem<NextDepth<Depth>>[];
};
export { TOCItem as CollapsibleMenuItem }
export { TOCItem }

export declare type TOCItemAction = {
    label: string;
    onClick: () => void;
    icon?: IconType;
} | {
    type: "separator";
};

declare interface TOCItemProps {
    item: TOCItem;
    counter?: number;
    isActive?: boolean;
    sortable: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    children?: ReactNode;
}

declare interface TOCItemSectionHeaderProps {
    item: TOCItem;
    children?: ReactNode;
    isActive?: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    sortable: boolean;
    hideChildrenCounter?: boolean;
}

export declare interface TOCProps {
    /** Optional title displayed at the top of the menu */
    title?: string;
    items: TOCItem[];
    className?: string;
    activeItem?: string;
    collapsible?: boolean;
    sortable?: boolean;
    onReorder?: (reorderedIds: IdStructure[]) => void;
    showSearchBox?: boolean;
    searchPlaceholder?: string;
    hideChildrenCounter?: boolean;
    /** Enable vertical scrolling when content overflows (default: true) */
    scrollable?: boolean;
}

declare type toggleActionType = {
    label: string;
    checked: boolean;
    onClick: (checked?: boolean) => void;
    disabled?: boolean;
    hideLabel?: boolean;
};

export declare const ToggleGroup: React_2.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React_2.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React_2.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string>) & React_2.RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: React_2.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface ToolbarButtonProps {
    onClick?: () => void;
    active?: boolean;
    label: string;
    disabled: boolean;
    icon: IconType;
    tooltip?: {
        description?: string;
        label?: string;
        shortcut?: ComponentProps<typeof Shortcut>["keys"];
    };
    showLabel?: boolean;
}

export declare interface ToolbarDropdownItem {
    label: string;
    icon: IconType;
    onClick: () => void;
    isActive: boolean;
}

export declare interface ToolbarLabels {
    bold: string;
    italic: string;
    underline: string;
    strike: string;
    highlight: string;
    heading1: string;
    heading2: string;
    heading3: string;
    left: string;
    center: string;
    right: string;
    justify: string;
    bulletList: string;
    orderedList: string;
    taskList: string;
    codeBlock: string;
    horizontalRule: string;
    quote: string;
    moreOptions: string;
    code: string;
    divider: string;
    bullet: string;
    ordered: string;
    task: string;
    linkPlaceholder: string;
    linkLabel: string;
    linkPaste: string;
    close: string;
    [key: string]: string;
}

export declare interface ToolbarProps {
    editor: Editor;
    isFullscreen?: boolean;
    disableButtons: boolean;
    onClose?: () => void;
    animationComplete?: boolean;
    labels: ToolbarLabels;
    darkMode?: boolean;
    showEmojiPicker?: boolean;
    plainHtmlMode?: boolean;
}

export declare const Tooltip: (props: TooltipProps) => default_2.JSX.Element;

declare type TooltipInternalProps = {
    children: default_2.ReactNode;
    shortcut?: ComponentProps<typeof Shortcut>["keys"];
    delay?: number;
    instant?: boolean;
} & ({
    label: string;
    description?: string;
} | {
    label?: string;
    description: string;
});

export declare type TooltipProps = Omit<TooltipInternalProps, (typeof privateProps_6)[number]>;

declare interface TranscriptLabels {
    deleteBlock: string;
    expand: string;
    collapse: string;
    messagesCount: string;
    messagesCountSingular: string;
}

declare type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

declare interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}

export declare const TwoColumnsList: ForwardRefExoticComponent<TwoColumnsListType & RefAttributes<HTMLDivElement>>;

declare interface TwoColumnsListType {
    title?: string;
    titleValue?: string;
    titleTooltip?: {
        label?: string;
        description: string;
    };
    list: TwoColumnsItemType[];
}

declare type Type = "bar-chart" | "line-chart";

declare namespace Types {
    export {
        ActionProps_3 as ActionProps,
        OneEmptyStateProps
    }
}

declare type URL_2 = string;

export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useAiPromotionChat(): AiPromotionChatProviderReturnValue;

export declare type UseDataCollectionData<R extends RecordType> = UseDataCollectionDataReturn<R> & {
    summaries?: R;
};

export declare function useDataCollectionData<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>, options?: UseDataOptions<R, Filters>): UseDataCollectionData<R>;

/**
 * Hook return type for useData
 */
declare type UseDataCollectionDataReturn<R extends RecordType> = UseDataReturn<R> & {
    summaries?: R;
};

export declare const useDataCollectionSource: <R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(source: DataCollectionSourceDefinition<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, deps?: ReadonlyArray<unknown>) => DataCollectionSource<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;

/**
 * Hook options for useData
 */
declare interface UseDataOptions<R extends RecordType, Filters extends FiltersDefinition> {
    filters?: Partial<FiltersState<Filters>>;
    /**
     * A function that is called when an error occurs during data fetching.
     * It is called with the error object.
     * @param error - The error object.
     */
    onError?: (error: DataError) => void;
    /**
     * A function that provides the fetch parameters for the data source.
     * It is called before each fetch request and can be used to modify the fetch parameters.
     * @param options - The fetch parameters for the data source.
     * @returns The fetch parameters for the data source.
     */
    fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O;
    /**
     * A function that is called when the data is fetched successfully.
     * It is called with the response data.
     * @param response - The response data.
     */
    onResponse?: (response: PaginatedResponse<R> | SimpleResult<R>) => void;
}

/**
 * Hook return type for useData
 */
declare interface UseDataReturn<R extends RecordType> {
    data: Data<R>;
    search: string | undefined;
    setSearch: (search: string | undefined) => void;
    isInitialLoading: boolean;
    isLoading: boolean;
    isLoadingMore: boolean;
    error: DataError | null;
    paginationInfo: PaginationInfo | null;
    setPage: (page: number) => void;
    loadMore: () => void;
    totalItems: number | undefined;
    mergedFilters: FiltersState<FiltersDefinition>;
}

export { useForm }

export declare function useFormSchema<Schema extends SchemaType, FormData extends InferSchema<Schema>>(schema: Schema, options: UseFormProps<FormData>, onSubmit: OnSubmitHandler<FormData>): FormType<Schema, FormData>;

export declare const useInfiniteScrollPagination: (paginationInfo: PaginationInfo | null, isLoading: boolean, isLoadingMore: boolean, loadMore: () => void) => {
    loadingIndicatorRef: RefObject<HTMLTableCellElement>;
};

export declare interface User {
    id: string;
    fullname: string;
    imageUrl: string;
}

declare interface User_2 {
    name: string;
}

export declare function useSidebar(): FrameContextType;

declare type ValueDisplayRendererContext = {
    visualization: ValueDisplayVisualizationType;
    i18n: TranslationsType;
};

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
declare type ValueDisplayRendererDefinition = {
    [K in keyof typeof valueDisplayRenderers]: {
        type: K;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[keyof typeof valueDisplayRenderers];

declare const valueDisplayRenderers: {
    readonly text: (args: TextCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly longText: (args: LongTextCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly number: (args: NumberCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly date: (args: DateCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly amount: (args: AmountCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly avatarList: (args: AvatarListCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly status: (args: StatusCellValue) => JSX_2.Element;
    readonly alertTag: (args: AlertTagCellValue) => JSX_2.Element;
    readonly person: (args: PersonCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly percentage: (args: PercentageCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element | null;
    readonly progressBar: (args: ProgressBarCellValue, _meta: ValueDisplayRendererContext) => JSX_2.Element | null;
    readonly company: (args: CompanyCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly team: (args: TeamCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly tag: (args: TagCellValue) => JSX_2.Element;
    readonly dotTag: (args: DotTagCellValue) => JSX_2.Element;
    readonly tagList: (args: TagListCellValue) => JSX_2.Element;
    readonly icon: (args: IconCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly file: (args: FileCellValue) => JSX_2.Element;
    readonly folder: (args: FolderCellValue) => JSX_2.Element;
    readonly country: (args: CountryCellValue, context: ValueDisplayRendererContext) => JSX_2.Element;
    readonly syncStatus: (args: SyncStatusCellValue, context: ValueDisplayRendererContext) => JSX_2.Element;
};

declare type ValueDisplayVisualizationType = "table" | "card" | "list" | (string & {});

declare type Variant = (typeof statuses)[number];

declare const variants: readonly ["ai", "critical", "positive", "info", "warning"];

declare const variants_2: (props?: ({
    aspect?: "small" | "square" | "wide" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare interface Version {
    id: string;
    author: VersionAuthor;
    timestamp: Date;
    onClick?: () => void;
}

export declare interface VersionAuthor {
    firstName: string;
    lastName: string;
    src?: string;
}

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const VerticalOverflowList: {
    <T>({ items, renderListItem, className, gap, minSize, onVisibleItemsChange, }: OverflowListProps<T>): JSX_2.Element;
    displayName: string;
};

declare type VisualizacionTypeDefinition<Props, Settings = Record<string, never>> = {
    render: (props: Props) => JSX.Element;
    name: string;
    icon: IconType;
    settings: {
        default: Settings;
        renderer?: (props: Props) => JSX.Element | null;
        resetHandler?: (settings: DataCollectionSettingsContextType) => void;
    };
};

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
declare type Visualization<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    /** Card-based visualization type */
    type: "card";
    /** Configuration options for card visualization */
    options: CardVisualizationOptions<R, Filters, Sortings>;
} | {
    /** Kanban-based visualization type */
    type: "kanban";
    /** Configuration options for kanban visualization */
    options: KanbanVisualizationOptions<R, Filters, Sortings>;
} | {
    /** Table-based visualization type */
    type: "table";
    /** Configuration options for table visualization */
    options: TableVisualizationOptions<R, Filters, Sortings, Summaries>;
} | {
    /** List-based visualization type */
    type: "list";
    /** Configuration options for list visualization */
    options: ListVisualizationOptions<R, Filters, Sortings>;
} | {
    /** Human-readable label for the visualization */
    label: string;
    /** Icon to represent the visualization in UI */
    icon: IconType;
    /** Custom visualization type */
    type: "custom";
    /** Custom component to render the visualization */
    component: (props: {
        onSelectItems: OnSelectItemsCallback<R, Filters>;
        onLoadData: OnLoadDataCallback<R, Filters>;
        onLoadError: OnLoadErrorCallback;
        source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    }) => JSX.Element;
};

declare type VisualizationSettings = {
    [K in keyof typeof collectionVisualizations]: ExtractVisualizationSettings<(typeof collectionVisualizations)[K]>;
};

export declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: number[];
    daysOfTheWeek?: string[];
}

declare type WelcomeScreenSuggestion = {
    icon: IconType;
    message: string;
    prompt?: string;
    /**
     * Optional custom click handler. If provided, this will be called instead of
     * sending the prompt as a message. Use this for actions like opening a file
     * picker that need special handling beyond just sending a message.
     */
    onClick?: () => void;
};

export declare const Widget: default_2.ForwardRefExoticComponent<WidgetProps & {
    children: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: default_2.ForwardRefExoticComponent<WidgetSkeletonProps & default_2.RefAttributes<HTMLDivElement>>;
};

export declare function WidgetAvatarsListItem({ id, title, subtitle, avatars, remainingCount, withPointerCursor, onClick, ...props }: WidgetAvatarsListItemProps): JSX_2.Element;

export declare type WidgetAvatarsListItemProps = {
    id: string | number;
    title: string;
    subtitle: string;
    avatars: Omit<PersonAvatarVariant, "type">[] & Record<string, unknown>[];
    remainingCount?: number;
    withPointerCursor?: boolean;
    onClick?: (id: string | number) => void;
} & ({
    emoji: string;
} | {
    alert: ComponentProps<typeof F0AvatarAlert>["type"];
});

export declare function WidgetEmptyState({ title, description, emoji, actions, }: WidgetEmptyStateProps): JSX_2.Element;

export declare type WidgetEmptyStateProps = {
    title: string;
    description: string;
    emoji?: string;
    actions?: Action_2[];
};

export declare function WidgetHighlightButton({ label, count, icon, iconClassName, onClick, }: Props_5): JSX_2.Element;

export declare function WidgetInboxList({ items, minSize, onClickItem, showAllItems, onVisibleItemsChange, }: Props_8): JSX_2.Element;

export declare function WidgetInboxListItem({ id, title, subtitle, onClick, module, }: Props_6): JSX_2.Element;

export declare type WidgetInboxListItemProps<Id extends string | number = string | number> = Props_6<Id>;

export declare type WidgetInboxListProps = Props_8;

export declare interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        info?: string;
        canBeBlurred?: boolean;
        link?: {
            title: string;
            url?: string;
            onClick?: () => void;
            icon?: IconType;
        };
        count?: number;
    };
    action?: F0ButtonProps;
    summaries?: Array<{
        label: string;
        value: string | number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
    alert?: string;
    status?: {
        text: string;
        variant: StatusVariant;
    };
    fullHeight?: boolean;
}

export declare const WidgetSection: ForwardRefExoticComponent<    {
children?: ReactNode | undefined;
} & {
title?: string;
} & RefAttributes<HTMLDivElement>>;

export declare function WidgetSimpleList({ items, gap, minSize, onClickItem, showAllItems, }: Props_9): JSX_2.Element;

export declare function WidgetSimpleListItem({ id, title, alert, rawTag, count, icon, rightIcon, iconClassName, rightIconClassName, onClick, }: WidgetSimpleListItemProps): JSX_2.Element;

export declare type WidgetSimpleListItemProps<Id extends string | number = string | number> = {
    id: Id;
    title: string;
    icon?: IconType;
    iconClassName?: string;
    rightIcon?: IconType;
    rightIconClassName?: string;
    count?: number;
    alert?: ComponentProps<typeof F0TagAlert>;
    rawTag?: ComponentProps<typeof F0TagRaw>;
    onClick?: (id: Id) => void;
};

export declare type WidgetSimpleListProps = Props_9;

export declare type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & (VariantProps<typeof skeletonVariants> | {
    height: "full";
});

export declare const WidgetStrip: ForwardRefExoticComponent<DashboardProps_2 & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type WidgetWidth = "sm" | "md" | "lg";

declare type WithGroupId<RecordType> = RecordType & {
    [GROUP_ID_SYMBOL]: unknown | undefined;
};

declare type WithOptionalSorting<R extends RecordType, Sortings extends SortingsDefinition> = Omit<PropertyDefinition_2<R>, "hide"> & {
    sorting?: SortingKey<Sortings>;
    /**
     * The alignment of the column. If not provided, the alignment will be "left"
     */
    align?: "left" | "right";
    /**
     * The width of the column. If not provided, the width will be "auto"
     */
    width?: number;
};

declare type WithOptionalSorting_2<Record, Sortings extends SortingsDefinition> = PropertyDefinition_2<Record> & {
    sorting?: SortingKey<Sortings>;
};

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfigWithLabels) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        liveCompanion: {
            insertLiveCompanion: (data: LiveCompanionData, config?: LiveCompanionConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData, config?: TranscriptConfig) => ReturnType;
        };
    }
}

declare module "gridstack" {
    interface GridStackWidget {
        id?: string;
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
        meta?: Record<string, unknown>;
    }
    interface GridStackNode {
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
    }
}


declare namespace Calendar {
    var displayName: string;
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData, config?: MoodTrackerConfig) => ReturnType;
        };
    }
}
