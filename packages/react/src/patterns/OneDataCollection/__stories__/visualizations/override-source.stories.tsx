import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0GraphNodeRenderContext } from "@/patterns/F0Graph"
import { F0GraphNode } from "@/patterns/F0Graph/F0GraphNode"

import { CheckCircle, Delete, Pencil } from "@/icons/app"

import { OneDataCollection } from "../.."
import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import {
  orgChart,
  type OrgPerson,
} from "../../visualizations/collection/Graph/__stories__/_fixtures"
import type { GraphRenderNodeExtras } from "../../visualizations/collection/Graph/types"

/* -------------------------------------------------------------------------- */
/* Meta                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Per-visualization `source` override stories.
 *
 * A visualization entry on `<OneDataCollection>` accepts either
 *  - a `filters` / `presets` filter-branch (derived from the top-level
 *    source), or
 *  - a full `source` override that replaces the top-level source while the
 *    visualization is active.
 *
 * The two branches are mutually exclusive at the type level (see
 * `visualizationOverrides.test-d.ts`). Collection chrome — filter bar,
 * search, presets, CSV export, and bulk-action bar — routes to the
 * override source while the override viz is active.
 */
const meta = {
  title: "Data Collection/Visualizations/Per-viz Source Override",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Demonstrates the `source` override branch of `VisualizationOverrides`. Each visualization can carry its own `DataCollectionSource` for cases where the shape behind a graph (hierarchical / DAG) differs materially from the shape behind a table (flat, paginated).",
      },
    },
  },
  tags: ["stable", "!autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/* -------------------------------------------------------------------------- */
/* Shared helpers                                                             */
/* -------------------------------------------------------------------------- */

const personAvatar = (record: OrgPerson) => {
  const [firstName, ...rest] = record.name.split(" ")
  return {
    type: "person" as const,
    firstName,
    lastName: rest.join(" "),
  }
}

const renderOrgNode = (
  record: OrgPerson,
  ctx: F0GraphNodeRenderContext,
  extras: GraphRenderNodeExtras
) => (
  <F0GraphNode
    variant={ctx.variant}
    state={ctx.state}
    expanded={ctx.expanded}
    hasChildren={ctx.hasChildren}
    childrenCount={ctx.childrenCount}
    level={ctx.level}
    tabIndex={ctx.tabIndex}
    setSize={ctx.setSize}
    posInSet={ctx.posInSet}
    nodeId={ctx.nodeId}
    ariaOwns={ctx.ariaOwns}
    onExpandToggle={ctx.onExpandToggle}
    onClick={ctx.onClick}
    nodeRef={ctx.nodeRef}
    avatar={personAvatar(record)}
    title={record.name}
    subtitle={record.role}
    tags={[{ type: "team", name: record.team }]}
    actions={extras.actions}
  />
)

/* -------------------------------------------------------------------------- */
/* Story: WithOverrideSource_Eager                                            */
/* -------------------------------------------------------------------------- */

/**
 * Eager override — top-level source is a paginated flat list (table-friendly).
 * The graph visualization carries its own non-paginated, hierarchical
 * `source` so layout has the complete tree available eagerly. While the
 * graph is active, the collection chrome routes to the override source.
 */
export const WithOverrideSource_Eager: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Top-level source: paginated flat list backing the table. Graph viz: non-paginated `source` override returning the full hierarchy. Switching to the graph swaps the chrome target — searches and filters apply to the override source, not the top-level one.",
      },
    },
  },
  render: () => {
    const Example = () => {
      // Top-level source: paginated, table-friendly.
      const topLevelSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          paginationType: "pages",
          perPage: 5,
          fetchData: async ({ pagination }) => {
            const page = pagination?.currentPage ?? 1
            const start = (page - 1) * 5
            const slice = orgChart.slice(start, start + 5)
            return {
              records: slice,
              total: orgChart.length,
              currentPage: page,
              perPage: 5,
              pagesCount: Math.ceil(orgChart.length / 5),
              type: "pages" as const,
            }
          },
        },
      })

      // Override source: eager, complete hierarchy for the graph.
      const graphSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      return (
        <div className="h-[640px] w-full">
          <OneDataCollection
            source={topLevelSource}
            visualizations={[
              {
                type: "table",
                options: {
                  frozenColumns: 0,
                  columns: [
                    {
                      label: "Name",
                      id: "name",
                      render: (item) => item.name,
                    },
                    {
                      label: "Role",
                      id: "role",
                      render: (item) => item.role,
                    },
                    {
                      label: "Team",
                      id: "team",
                      render: (item) => item.team,
                    },
                  ],
                },
              },
              {
                type: "graph",
                source: graphSource,
                options: {
                  nodeAdapter: (record) => ({ parentId: record.managerId }),
                  renderNode: renderOrgNode,
                },
              },
            ]}
          />
        </div>
      )
    }
    return <Example />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: WithOverrideSource_BulkActions                                      */
/* -------------------------------------------------------------------------- */

/**
 * Override source with bulk actions — the graph override source declares
 * `selectable` and `bulkActions`. When the graph viz is active the
 * collection's ActionBar wires to the override source's bulk handlers, not
 * the top-level one.
 *
 * Note on naming: the original Phase 3 plan paired this with a lazy
 * (paginated) override source. Bulk-action selection over a paginated graph
 * (`allSelected` semantics, cross-page selection persistence) is non-trivial
 * and intentionally out of scope here — this story uses an eager override
 * to keep the bulk-action wiring observable in isolation.
 */
export const WithOverrideSource_LazyBulkActions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Eager override source with `selectable` + `bulkActions`. Selecting graph nodes opens the ActionBar driven by the override source's bulk-action definition; the top-level source's bulk actions (if any) are dormant while the graph viz is active. Lazy + bulk-action interplay is intentionally deferred.",
      },
    },
  },
  render: () => {
    const Example = () => {
      const topLevelSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      const graphSource = useDataCollectionSource<OrgPerson>({
        selectable: (item) => item.id,
        bulkActions: () => ({
          primary: [
            {
              label: "Archive",
              icon: CheckCircle,
              id: "archive",
            },
            {
              label: "Delete",
              icon: Delete,
              id: "delete",
              critical: true,
            },
          ],
          secondary: [
            {
              label: "Edit",
              icon: Pencil,
              id: "edit",
            },
          ],
        }),
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      return (
        <div className="h-[640px] w-full">
          <OneDataCollection
            source={topLevelSource}
            visualizations={[
              {
                type: "graph",
                source: graphSource,
                options: {
                  nodeAdapter: (record) => ({ parentId: record.managerId }),
                  renderNode: renderOrgNode,
                },
              },
            ]}
          />
        </div>
      )
    }
    return <Example />
  },
}
