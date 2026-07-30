import type { StoryObj } from "@storybook/react-vite"
import { ComponentType, Fragment, ReactNode } from "react"

import { withSnapshot } from "./parameters"

/**
 * One axis of a snapshot matrix: a prop to vary and the values to render for it.
 */
export type SnapshotDimension = {
  /** The prop name to vary across this axis. */
  arg: string
  /** The values to render. Usually a component's enumerated options. */
  values: readonly unknown[]
  /** Label shown for each value. Defaults to `String(value)`. */
  label?: (value: unknown, index: number) => string
}

export type SnapshotMatrixConfig<TArgs> = {
  /**
   * Props applied to every cell — required props and any fixed context the
   * component needs to render (e.g. `label`, `name`, seed data).
   */
  baseArgs?: Partial<TArgs>
  /** Optional heading rendered above the grid. */
  title?: string
  /** Dimension varied across columns (with a header row of labels). */
  cols?: SnapshotDimension
  /** Dimension varied down rows (with a leading label column). */
  rows?: SnapshotDimension
  /** Chromatic options forwarded to `withSnapshot`. */
  chromatic?: Parameters<typeof withSnapshot>[1]
}

const labelFor = (dim: SnapshotDimension, value: unknown, index: number) =>
  dim.label ? dim.label(value, index) : String(value)

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
export function snapshotMatrix<TArgs>(
  Component: ComponentType<TArgs>,
  config: SnapshotMatrixConfig<TArgs> = {}
): StoryObj<TArgs> {
  const { baseArgs, title, cols, rows, chromatic } = config

  // `undefined` sentinel = "this axis is not varied" (single implicit value).
  const rowValues = rows?.values ?? [undefined]
  const colValues = cols?.values ?? [undefined]

  const renderCell = (rowValue: unknown, colValue: unknown): ReactNode => {
    const args = {
      ...(baseArgs as Record<string, unknown>),
      ...(rows ? { [rows.arg]: rowValue } : {}),
      ...(cols ? { [cols.arg]: colValue } : {}),
    } as TArgs
    return <Component {...args} />
  }

  const gridTemplateColumns = `${rows ? "max-content " : ""}repeat(${colValues.length}, max-content)`

  return {
    parameters: withSnapshot({}, chromatic),
    render: () => (
      <div className="flex w-fit flex-col gap-4">
        {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
        <div
          className="grid items-center gap-x-6 gap-y-4"
          style={{ gridTemplateColumns }}
        >
          {cols ? (
            <>
              {rows ? <span /> : null}
              {colValues.map((colValue, ci) => (
                <span
                  key={`head-${ci}`}
                  className="text-center text-sm font-medium text-f1-foreground-secondary"
                >
                  {labelFor(cols, colValue, ci)}
                </span>
              ))}
            </>
          ) : null}

          {rowValues.map((rowValue, ri) => (
            <Fragment key={`row-${ri}`}>
              {rows ? (
                <span className="text-sm font-medium">
                  {labelFor(rows, rowValue, ri)}
                </span>
              ) : null}
              {colValues.map((colValue, ci) => (
                <div key={`cell-${ri}-${ci}`} className="flex justify-center">
                  {renderCell(rowValue, colValue)}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    ),
  }
}
