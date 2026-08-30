import { StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { withSnapshot } from './parameters';
/**
 * One axis of a snapshot matrix: a prop to vary and the values to render for it.
 */
export type SnapshotDimension = {
    /** The prop name to vary across this axis. */
    arg: string;
    /** The values to render. Usually a component's enumerated options. */
    values: readonly unknown[];
    /** Label shown for each value. Defaults to `String(value)`. */
    label?: (value: unknown, index: number) => string;
};
export type SnapshotMatrixConfig<TArgs> = {
    /**
     * Props applied to every cell — required props and any fixed context the
     * component needs to render (e.g. `label`, `name`, seed data).
     */
    baseArgs?: Partial<TArgs>;
    /** Optional heading rendered above the grid. */
    title?: string;
    /** Dimension varied across columns (with a header row of labels). */
    cols?: SnapshotDimension;
    /** Dimension varied down rows (with a leading label column). */
    rows?: SnapshotDimension;
    /** Chromatic options forwarded to `withSnapshot`. */
    chromatic?: Parameters<typeof withSnapshot>[1];
};
/**
 * Builds a `Snapshot` story that renders a component across one or two declared
 * dimensions as a labeled, content-sized grid, with `withSnapshot()` already
 * attached for Chromatic.
 *
 * It replaces hand-enumerated snapshot stories: declare the axes (usually a
 * component's own enumerated options) and the full cartesian product is
 * rendered, so the snapshot reflects the component's flexibility instead of a
 * hand-picked subset.
 *
 * @example
 * export const Snapshot = snapshotMatrix(F0Button, {
 *   baseArgs: { label: "Button" },
 *   cols: { arg: "variant", values: ["default", "outline", "critical"] },
 *   rows: { arg: "size", values: ["sm", "md", "lg"] },
 * })
 */
export declare function snapshotMatrix<TArgs>(Component: ComponentType<TArgs>, config?: SnapshotMatrixConfig<TArgs>): StoryObj<TArgs>;
