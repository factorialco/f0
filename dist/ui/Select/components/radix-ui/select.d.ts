import { Scope } from '@radix-ui/react-context';
import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { FocusScope } from '@radix-ui/react-focus-scope';
import { Portal as PortalPrimitive } from '@radix-ui/react-portal';
import { Primitive } from '@radix-ui/react-primitive';
import * as PopperPrimitive from "@radix-ui/react-popper";
import * as React from "react";
type Direction = "ltr" | "rtl";
type ScopedProps<P> = P & {
    __scopeSelect?: Scope;
};
declare const createSelectScope: import('@radix-ui/react-context').CreateScope;
interface SelectSharedProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    dir?: Direction;
    name?: string;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
    form?: string;
    onItemCheckChange?: (value: string, checked: boolean) => void;
}
type SelectProps<T extends string = string> = SelectSharedProps & ({
    value?: T;
    defaultValue?: T;
    onValueChange?(value: T): void;
    multiple?: false | never;
} | {
    value?: T[];
    defaultValue?: T[];
    onValueChange?(value: T[]): void;
    multiple: true;
});
export type { SelectProps as SelectPrimitiveProps };
declare const Select: {
    <T extends string = string>(props: ScopedProps<SelectProps<T>>): React.JSX.Element;
    displayName: string;
};
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;
interface SelectTriggerProps extends PrimitiveButtonProps {
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;
interface SelectValueProps extends Omit<PrimitiveSpanProps, "placeholder"> {
    placeholder?: React.ReactNode;
}
declare const SelectValue: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectIconProps extends PrimitiveSpanProps {
}
declare const SelectIcon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
type PortalProps = React.ComponentPropsWithoutRef<typeof PortalPrimitive>;
interface SelectPortalProps {
    children?: React.ReactNode;
    /**
     * Specify a container element to portal the content into.
     */
    container?: PortalProps["container"];
}
declare const SelectPortal: React.FC<SelectPortalProps>;
interface SelectContentProps extends SelectContentImplProps {
}
declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
type DismissableLayerProps = React.ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = React.ComponentPropsWithoutRef<typeof FocusScope>;
type SelectPopperPrivateProps = {
    onPlaced?: PopperContentProps["onPlaced"];
};
interface SelectContentImplProps extends Omit<SelectPopperPositionProps, keyof SelectPopperPrivateProps>, Omit<SelectItemAlignedPositionProps, keyof SelectPopperPrivateProps> {
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: DismissableLayerProps["onEscapeKeyDown"];
    /**
     * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
     * Can be prevented.
     */
    onPointerDownOutside?: DismissableLayerProps["onPointerDownOutside"];
    position?: "item-aligned" | "popper";
    /**
     * When true, disables the scroll lock that prevents scrolling outside the select.
     * Useful for "list" mode where the select is always open.
     */
    disableScrollLock?: boolean;
}
interface SelectListboxProps extends PrimitiveDivProps {
}
declare const SelectListbox: React.ForwardRefExoticComponent<SelectListboxProps & React.RefAttributes<HTMLDivElement>>;
interface SelectItemAlignedPositionProps extends PrimitiveDivProps, SelectPopperPrivateProps {
}
type PopperContentProps = React.ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
interface SelectPopperPositionProps extends PopperContentProps, SelectPopperPrivateProps {
}
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SelectViewportProps extends PrimitiveDivProps {
    nonce?: string;
}
declare const SelectViewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
interface SelectGroupProps extends PrimitiveDivProps {
}
declare const SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
interface SelectLabelProps extends PrimitiveDivProps {
}
declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
type SelectItemContextValue<T extends string = string> = {
    value: T;
    disabled: boolean;
    textId: string;
    isSelected: boolean;
    onItemTextChange(node: SelectItemTextElement | null): void;
};
export declare const SelectItemContextProvider: React.FC<SelectItemContextValue<string> & {
    scope: Scope<SelectItemContextValue<string>>;
    children: React.ReactNode;
}>, useSelectItemContext: (consumerName: string, scope: Scope<SelectItemContextValue<string> | undefined>) => SelectItemContextValue<string>;
interface SelectItemProps extends PrimitiveDivProps {
    value: string;
    disabled?: boolean;
    textValue?: string;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
type SelectItemTextElement = React.ElementRef<typeof Primitive.span>;
interface SelectItemTextProps extends PrimitiveSpanProps {
}
declare const SelectItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectItemIndicatorProps extends PrimitiveSpanProps {
}
declare const SelectItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectScrollUpButtonProps extends Omit<SelectScrollButtonImplProps, "onAutoScroll"> {
}
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
interface SelectScrollDownButtonProps extends Omit<SelectScrollButtonImplProps, "onAutoScroll"> {
}
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
interface SelectScrollButtonImplProps extends PrimitiveDivProps {
    onAutoScroll(): void;
}
interface SelectSeparatorProps extends PrimitiveDivProps {
}
declare const SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
type PopperArrowProps = React.ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;
interface SelectArrowProps extends PopperArrowProps {
}
declare const SelectArrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;
declare const Root: {
    <T extends string = string>(props: ScopedProps<SelectProps<T>>): React.JSX.Element;
    displayName: string;
};
declare const Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Value: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const Icon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
declare const Portal: React.FC<SelectPortalProps>;
declare const Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Listbox: React.ForwardRefExoticComponent<SelectListboxProps & React.RefAttributes<HTMLDivElement>>;
declare const Viewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
declare const Group: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
declare const ItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
declare const ItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
declare const ScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const ScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const Arrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;
export { Arrow, Content, createSelectScope, Group, Icon, Item, ItemIndicator, ItemText, Label, Listbox, Portal, Root, ScrollDownButton, ScrollUpButton, Select, SelectArrow, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectListbox, SelectPortal, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, Separator, Trigger, Value, Viewport, };
export type { SelectArrowProps, SelectContentProps, SelectGroupProps, SelectIconProps, SelectItemIndicatorProps, SelectItemProps, SelectItemTextProps, SelectLabelProps, SelectListboxProps, SelectPortalProps, SelectProps, SelectScrollDownButtonProps, SelectScrollUpButtonProps, SelectSeparatorProps, SelectTriggerProps, SelectValueProps, SelectViewportProps, };
