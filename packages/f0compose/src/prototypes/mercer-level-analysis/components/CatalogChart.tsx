/**
 * Job-catalog org chart (ReactFlow): Function → Family → Role.
 * Clicking a role selects it (the detail drawer reflects the selection) —
 * it does NOT navigate away; the user stays in the catalog.
 */
import { useCallback, useEffect } from "react"
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type NodeMouseHandler,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { catalog, type CatalogRole } from "../shared/analysisData"
import { FamilyNode, FunctionNode, RoleNode } from "./chartNodes"

const nodeTypes = {
  functionNode: FunctionNode,
  familyNode: FamilyNode,
  roleNode: RoleNode,
}

const edgeStyle = { stroke: "var(--f1-border-secondary)", strokeWidth: 1.5 }

type Props = {
  selectedRoleId: string
  onSelectRole: (roleId: string) => void
}

const FUNC_Y = 0
const FAMILY_Y = 130
const ROLE_Y = 280
const ROLE_GAP = 220
const FAMILY_GAP = 90
const FUNC_GAP = 130

function buildGraph(
  roles: CatalogRole[],
  selectedRoleId: string
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const edges: Edge[] = []

  const grouped = new Map<string, Map<string, CatalogRole[]>>()
  for (const role of roles) {
    if (!grouped.has(role.function)) grouped.set(role.function, new Map())
    const families = grouped.get(role.function)!
    if (!families.has(role.family)) families.set(role.family, [])
    families.get(role.family)!.push(role)
  }

  let globalX = 0

  for (const [fnIdx, [fn, families]] of [...grouped.entries()].entries()) {
    const funcId = `fn-${fnIdx}`
    const familyEntries = [...families.entries()]
    const funcStartX = globalX

    for (const [famIdx, [fam, famRoles]] of familyEntries.entries()) {
      const famId = `${funcId}-fam-${famIdx}`
      const famStartX = globalX

      for (const role of famRoles) {
        const roleId = `role-${role.id}`
        nodes.push({
          id: roleId,
          type: "roleNode",
          position: { x: globalX, y: ROLE_Y },
          data: {
            roleId: role.id,
            title: role.title,
            levels: role.levels,
            selected: role.id === selectedRoleId,
          },
        })
        edges.push({
          id: `e-${famId}-${roleId}`,
          source: famId,
          target: roleId,
          type: "smoothstep",
          style: edgeStyle,
        })
        globalX += ROLE_GAP
      }

      const famCenterX =
        famRoles.length > 0
          ? famStartX + ((famRoles.length - 1) * ROLE_GAP) / 2
          : famStartX

      nodes.push({
        id: famId,
        type: "familyNode",
        position: { x: famCenterX, y: FAMILY_Y },
        data: { label: fam, count: famRoles.length },
      })
      edges.push({
        id: `e-${funcId}-${famId}`,
        source: funcId,
        target: famId,
        type: "smoothstep",
        style: edgeStyle,
      })
      globalX += FAMILY_GAP
    }

    const funcCenterX =
      familyEntries.length > 0
        ? funcStartX + (globalX - FAMILY_GAP - funcStartX) / 2
        : funcStartX

    nodes.push({
      id: funcId,
      type: "functionNode",
      position: { x: funcCenterX, y: FUNC_Y },
      data: { label: fn, familyCount: familyEntries.length },
    })
    globalX += FUNC_GAP
  }

  return { nodes, edges }
}

function Graph({ selectedRoleId, onSelectRole }: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

  useEffect(() => {
    const g = buildGraph(catalog, selectedRoleId)
    setNodes(g.nodes)
    setEdges(g.edges)
  }, [selectedRoleId, setNodes, setEdges])

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 80)
  }, [])

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      if (node.type === "roleNode") {
        const roleId = (node.data as { roleId?: string }).roleId
        if (roleId) onSelectRole(roleId)
      }
    },
    [onSelectRole]
  )

  return (
    <div
      style={{ height: "72vh", minHeight: 560 }}
      className="w-full overflow-hidden rounded-xl border border-f1-border-secondary bg-f1-background-secondary"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        maxZoom={1.75}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={20} size={1} />
        <Controls showInteractive={false} />
        <MiniMap pannable zoomable />
      </ReactFlow>
    </div>
  )
}

export function CatalogChart(props: Props) {
  return (
    <ReactFlowProvider>
      <Graph {...props} />
    </ReactFlowProvider>
  )
}
