/**
 * Class variants for {@link ButtonGroup}'s **stacked (column) branch** —
 * alignment, the stack breakpoint, full-width-on-stack, and stacked-order
 * reversal. The row branch builds its flex layout inline (it also runs the
 * width-measured overflow), so these classes only apply once the group collapses
 * into a column below the breakpoint.
 *
 * Every generated class is a static string so Tailwind's JIT can see it.
 */
export declare const buttonGroupVariants: (props?: ({
    align?: "end" | "between" | undefined;
    stack?: "none" | "md" | "sm" | "container-md" | undefined;
    fullWidthOnStack?: boolean | undefined;
    reverseOnStack?: boolean | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
