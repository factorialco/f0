import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import type { F0GraphNodeRenderContext } from "@/patterns/F0Graph"
import { F0GraphNode } from "@/patterns/F0Graph/F0GraphNode"

import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"

import { OneDataCollection } from "../../../.."
import { useDataCollectionSource } from "../../../../hooks/useDataCollectionSource"
import type { GraphRenderNodeExtras } from "../types"
import {
  cyclicChart,
  lazyChildrenByParent,
  lazyRoots,
  orgChart,
  orgItemActions,
  type OrgPerson,
} from "./_fixtures"

/* -------------------------------------------------------------------------- */
/* Meta                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * The Graph visualization renders an `OneDataCollection` source as an
 * interactive tree / DAG using the F0Graph runtime. These stories are
 * authored against the public `visualizations={[{ type: "graph", options }]}`
 * surface so they double as living documentation for Phase 1 capabilities.
 *
 * Convention note: most other OneDataCollection visualization stories
 * mount via the `ExampleComponent` wrapper (MockUser shape, no parent
 * linkage). Graph requires bespoke hierarchical fixtures, so these stories
 * mount `<OneDataCollection>` directly. Title still lands under the shared
 * `Data Collection/Visualizations/Graph` sidebar slot.
 */
const meta = {
  title: "Data Collection/Visualizations/Graph",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Phase 1 Graph visualization for OneDataCollection. Bridges a `DataCollectionSource` to F0Graph for tree / DAG renderings with adapters for parent linkage, optional explicit edges, and a custom `renderNode`.",
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

/**
 * Build an F0Avatar `person` variant from a fixture record. Centralised so
 * every story renders nodes the same way and avatar shape changes only have
 * to be made once.
 */
const personAvatar = (record: OrgPerson) => {
  const [firstName, ...rest] = record.name.split(" ")
  return {
    type: "person" as const,
    firstName,
    lastName: rest.join(" "),
  }
}

/**
 * Default node renderer used by most stories. Mirrors a typical consumer
 * implementation: hand every F0Graph render-context field through to
 * `F0GraphNode` so accessibility (ARIA roles, tabindex, ariaOwns), expand
 * toggles, and the floating actions slot work out of the box.
 */
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
/* Story: Default                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Eager mode — a ~12-node org chart. Demonstrates the canonical wiring:
 * `nodeAdapter` returns `{ parentId }`, `renderNode` returns an
 * `<F0GraphNode>`, no item-actions, no detail panel. First exported story so
 * the manual MDX page attaches to a meta with `["stable", "!autodocs"]` —
 * `no-sidebar` tag is intentionally absent.
 */
export const Default: Story = {
  render: () => {
    const DefaultExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "graph",
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
    return <DefaultExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: RecordSubsetReprojects                                              */
/* -------------------------------------------------------------------------- */

/**
 * Hard removal — confirms Phase 1 filter semantics. The active filter omits
 * the "Engineering" subtree at the source level (records never enter the
 * projection), so the Engineering branch disappears entirely; no orphan
 * promotion. The toggle button proves the projection re-renders cleanly when
 * the source filter set changes.
 */
export const RecordSubsetReprojects: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When a subset of records reaches GraphCollection, the projection re-runs and entire subtrees disappear with no orphan promotion. This story toggles between the full org and an Engineering-hidden subset; in a real consumer that reduced array would normally come from the source filter pipeline.",
      },
    },
  },
  render: () => {
    const HardRemovalExample = () => {
      const [hideEng, setHideEng] = useState(false)
      const visible = hideEng
        ? orgChart.filter((p) => p.team !== "Engineering")
        : orgChart

      const source = useDataCollectionSource<OrgPerson>(
        {
          dataAdapter: {
            fetchData: async () => ({ records: visible }),
          },
        },
        [hideEng]
      )

      return (
        <div className="flex h-[640px] w-full flex-col gap-2 p-2">
          <button
            className="self-start rounded-md border border-f1-border bg-f1-background px-3 py-1 text-f1-foreground"
            onClick={() => setHideEng((v) => !v)}
            type="button"
          >
            {hideEng ? "Show Engineering subtree" : "Hide Engineering subtree"}
          </button>
          <div className="min-h-0 flex-1">
            <OneDataCollection
              source={source}
              visualizations={[
                {
                  type: "graph",
                  options: {
                    nodeAdapter: (record) => ({
                      parentId: record.managerId,
                    }),
                    renderNode: renderOrgNode,
                  },
                },
              ]}
            />
          </div>
        </div>
      )
    }
    return <HardRemovalExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: WithItemActionsNoPanel                                              */
/* -------------------------------------------------------------------------- */

/**
 * Item-actions fallback — `source.itemActions` returns a non-empty list, no
 * detail panel is provided in Phase 1. GraphCollection builds the actions
 * dropdown and passes it to `renderNode` via the `extras.actions` slot;
 * F0GraphNode renders it as the floating toolbar on selected nodes.
 */
export const WithItemActionsNoPanel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When `source.itemActions` returns ≥1 action, GraphCollection builds a dropdown and forwards it via `extras.actions`. Spread into `<F0GraphNode actions={…} />` to surface item actions on the selected node.",
      },
    },
  },
  render: () => {
    const ItemActionsExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
        itemActions: orgItemActions,
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "graph",
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
    return <ItemActionsExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: Selectable                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Selection bridge — `source.selectable` opts the graph into multi-select.
 * F0Graph emits string ids; GraphCollection resolves each id to the
 * underlying record (via the same `idProvider`/`item.id`/index fallback used
 * for projection) and forwards it to `useSelectable`. Selection state lives
 * on the source so view-switches preserve the checkmarks.
 */
export const Selectable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Adding `selectable` to the source flips `F0Graph` to `selectionMode='multi'`. Selection state is owned by `useSelectable` on the source, so checkmarks survive view switches.",
      },
    },
  },
  render: () => {
    const SelectableExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
        selectable: (item) => item.id,
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            onSelectItems={(payload) => {
              console.log("[Graph] selected ids:", payload.selectedIds)
            }}
            visualizations={[
              {
                type: "graph",
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
    return <SelectableExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: Cycle                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Detail panel — `detailPanel` returns the variant + slot config for the
 * built-in F0Graph side panel. GraphCollection wires the panel chrome
 * (open/close, width persistence, focus management) and forwards the
 * resolved record to the consumer's callback, so the same record-typed
 * derivations used in `renderNode` apply here.
 */
export const WithDetailPanel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Selecting a node opens F0Graph's side panel; GraphCollection resolves the node id to its record and forwards it to `detailPanel(record)`. The returned shape mirrors `F0GraphDetailPanelProps` minus the chrome-owned fields (`open`, `onClose`, `width`, `ariaLabel`).",
      },
    },
  },
  render: () => {
    const DetailPanelExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "graph",
                options: {
                  nodeAdapter: (record) => ({ parentId: record.managerId }),
                  renderNode: renderOrgNode,
                  detailPanel: (record) => ({
                    variant: "default",
                    title: record.name,
                    description: `${record.role} · ${record.team}`,
                  }),
                  detailPanelAriaLabel: "Org member details",
                },
              },
            ]}
          />
        </div>
      )
    }
    return <DetailPanelExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: WithHighlight                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Highlighting + auto-dim — `highlightedNodes` receives the materialized
 * record array and returns the ids that should render in the `highlighted`
 * state. F0Graph automatically dims every other node and edge while the
 * highlight set is non-empty (clearing the set restores full opacity).
 *
 * This story uses a free-text input to derive highlights from a name/team
 * substring match — the common "search the graph" pattern. With an empty
 * query the function returns an empty array, so dimming clears.
 */
export const WithHighlight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`highlightedNodes` returns the ids that should render highlighted; F0Graph auto-dims the rest. Type into the search input to highlight matching members by name or team — clear it to restore full opacity.",
      },
    },
  },
  render: () => {
    const HighlightExample = () => {
      const [query, setQuery] = useState("Engineering")
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })

      return (
        <div className="flex h-[640px] w-full flex-col gap-2 p-2">
          <input
            aria-label="Highlight by name or team"
            className="w-64 self-start rounded-md border border-f1-border bg-f1-background px-3 py-1 text-f1-foreground"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Highlight by name or team…"
            type="search"
            value={query}
          />
          <div className="min-h-0 flex-1">
            <OneDataCollection
              source={source}
              visualizations={[
                {
                  type: "graph",
                  options: {
                    nodeAdapter: (record) => ({ parentId: record.managerId }),
                    renderNode: renderOrgNode,
                    highlightedNodes: (records) => {
                      const q = query.trim().toLowerCase()
                      if (!q) return []
                      return records
                        .filter(
                          (r) =>
                            r.name.toLowerCase().includes(q) ||
                            r.team.toLowerCase().includes(q)
                        )
                        .map((r) => r.id)
                    },
                  },
                },
              ]}
            />
          </div>
        </div>
      )
    }
    return <HighlightExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: Cycle                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Cycle detection — fixture contains a 3-cycle (A→B→C→A) plus a clean
 * root/child. `projectGraph` drops the cycle-closing edge so the resulting
 * graph stays acyclic; GraphCollection emits one `console.warn` per unique
 * cycle signature. Open the browser console to see the warning.
 */
export const Cycle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Cycle-closing edges are dropped so the resulting graph remains acyclic. Expect exactly one `console.warn` per unique cycle signature on first render — re-renders with the same cycles do not re-warn.",
      },
    },
  },
  render: () => {
    const CycleExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: cyclicChart }),
        },
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "graph",
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
    return <CycleExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: LazyMode                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Lazy mode — the source is paginated (infinite-scroll) and `loadChildren`
 * resolves children on demand. The loader receives an `AbortSignal` from
 * GraphCollection's per-node controller, so collapsed nodes whose loads have
 * not yet resolved are dropped silently.
 */
export const LazyMode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`loadChildren` requires a paginated source. Per-node `AbortController` is forwarded to the consumer loader so cancelled expansions never produce orphan children. Loader simulates 600ms latency.",
      },
    },
  },
  render: () => {
    const LazyExample = () => {
      const source = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          paginationType: "infinite-scroll",
          perPage: 10,
          fetchData: async () => ({
            records: lazyRoots,
            total: lazyRoots.length,
            perPage: lazyRoots.length,
            type: "infinite-scroll" as const,
            cursor: null,
            hasMore: false,
          }),
        },
      })

      return (
        <div className="h-[600px] w-full">
          <OneDataCollection
            source={source}
            visualizations={[
              {
                type: "graph",
                options: {
                  nodeAdapter: (record) => ({
                    parentId: record.managerId,
                    childrenCount: lazyChildrenByParent[record.id]?.length ?? 0,
                  }),
                  loadChildren: async (nodeId, { signal }) => {
                    return await new Promise<OrgPerson[]>((resolve, reject) => {
                      const timer = setTimeout(() => {
                        resolve(lazyChildrenByParent[nodeId] ?? [])
                      }, 600)
                      signal.addEventListener("abort", () => {
                        clearTimeout(timer)
                        reject(new DOMException("aborted", "AbortError"))
                      })
                    })
                  },
                  renderNode: renderOrgNode,
                },
              },
            ]}
          />
        </div>
      )
    }
    return <LazyExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: TwoInstances                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Two simultaneous mounts — neither passes an explicit `graphId`, so
 * GraphCollection falls back to `React.useId()`. The two instances therefore
 * receive unique stable ids and never collide on per-graph persisted state.
 */
export const TwoInstances: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Two `<OneDataCollection>` instances mounted side-by-side with no explicit `graphId`. Each instance gets a stable `React.useId()`-derived id, so any per-graph persisted state stays isolated with no key collisions across mounts.",
      },
    },
  },
  render: () => {
    const TwoInstancesExample = () => {
      const sourceA = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })
      const sourceB = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart.slice(0, 6) }),
        },
      })

      return (
        <div className="grid h-[600px] w-full grid-cols-2 gap-2 p-2">
          <div className="min-h-0 rounded-md border border-f1-border">
            <OneDataCollection
              source={sourceA}
              visualizations={[
                {
                  type: "graph",
                  options: {
                    nodeAdapter: (record) => ({
                      parentId: record.managerId,
                    }),
                    renderNode: renderOrgNode,
                  },
                },
              ]}
            />
          </div>
          <div className="min-h-0 rounded-md border border-f1-border">
            <OneDataCollection
              source={sourceB}
              visualizations={[
                {
                  type: "graph",
                  options: {
                    nodeAdapter: (record) => ({
                      parentId: record.managerId,
                    }),
                    renderNode: renderOrgNode,
                  },
                },
              ]}
            />
          </div>
        </div>
      )
    }
    return <TwoInstancesExample />
  },
}

/* -------------------------------------------------------------------------- */
/* Story: Snapshot                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Deterministic grid for Chromatic. No async, fixed-seed avatars, no
 * sidebar. Combines Default + RecordSubsetReprojects +
 * WithItemActionsNoPanel + Selectable + Cycle in a single shot so visual
 * regression catches projection changes across the most stable Phase 1
 * surfaces.
 */
export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSkipA11y(
    withSnapshot({
      docs: {
        description: {
          story:
            "Chromatic snapshot grid combining five deterministic Phase 1 states.",
        },
      },
    })
  ),
  render: () => {
    const SnapshotGrid = () => {
      const eagerSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
      })
      const filteredSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({
            records: orgChart.filter((p) => p.team !== "Engineering"),
          }),
        },
      })
      const actionsSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: orgChart }),
        },
        itemActions: orgItemActions,
      })
      const selectableSource: typeof eagerSource =
        useDataCollectionSource<OrgPerson>({
          dataAdapter: {
            fetchData: async () => ({ records: orgChart }),
          },
          selectable: (item) => item.id,
          defaultSelectedItems: {
            allSelected: false,
            items: new Map([
              [orgChart[0].id, { id: orgChart[0].id, checked: true }],
              [orgChart[2].id, { id: orgChart[2].id, checked: true }],
            ]),
            groups: new Map(),
          },
        })
      const cycleSource = useDataCollectionSource<OrgPerson>({
        dataAdapter: {
          fetchData: async () => ({ records: cyclicChart }),
        },
      })

      const tile = (title: string, source: typeof eagerSource) => (
        <div className="flex h-full min-h-0 flex-col rounded-md border border-f1-border">
          <div className="border-b border-f1-border bg-f1-background-secondary px-3 py-1 text-f1-foreground">
            {title}
          </div>
          <div className="min-h-0 flex-1">
            <OneDataCollection
              source={source}
              visualizations={[
                {
                  type: "graph",
                  options: {
                    nodeAdapter: (record) => ({
                      parentId: record.managerId,
                    }),
                    renderNode: renderOrgNode,
                  },
                },
              ]}
            />
          </div>
        </div>
      )

      return (
        <div className="grid h-screen w-screen grid-cols-2 grid-rows-3 gap-2 p-2">
          {tile("Default", eagerSource)}
          {tile("RecordSubsetReprojects", filteredSource)}
          {tile("WithItemActionsNoPanel", actionsSource)}
          <div className="flex h-full min-h-0 flex-col rounded-md border border-f1-border">
            <div className="border-b border-f1-border bg-f1-background-secondary px-3 py-1 text-f1-foreground">
              Selectable
            </div>
            <div className="min-h-0 flex-1">
              <OneDataCollection
                source={selectableSource}
                visualizations={[
                  {
                    type: "graph",
                    options: {
                      nodeAdapter: (record) => ({
                        parentId: record.managerId,
                      }),
                      renderNode: renderOrgNode,
                    },
                  },
                ]}
              />
            </div>
          </div>
          {tile("Cycle", cycleSource)}
        </div>
      )
    }
    return <SnapshotGrid />
  },
}
