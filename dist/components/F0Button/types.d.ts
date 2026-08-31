import { actionButtonVariants } from '../../ui/Action';
export declare const buttonVariants: ("critical" | "promote" | "neutral" | "default" | "outline" | "ghost" | "outlinePromote")[];
export type ButtonVariant = Exclude<(typeof actionButtonVariants)[number], "ai">;
export declare const buttonSizes: readonly ["sm", "md", "lg"];
export type ButtonSize = (typeof buttonSizes)[number];
