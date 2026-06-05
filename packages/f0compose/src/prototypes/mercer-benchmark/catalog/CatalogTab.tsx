/**
 * Org-chart view of the internal job catalog using ReactFlow.
 * Tree layout: Function → Family → Role (with level pills).
 * Clicking a role node opens the mapping drawer for that role.
 */
import { useMemo, useCallback } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import type { InternalRole } from "../shared/types"
import { FunctionNode, FamilyNode, RoleNode } from "./chartNodes"

const nodeTypes = {
  functionNode: FunctionNode,
  familyNode: FamilyNode,
  roleNode: RoleNode,
}

type Props = {
  roles: InternalRole[]
  onRoleClick?: (roleId: string) => void
}

/** Build a tree layout: Functions → Families → Roles */
function buildGraph(roles: InternalRole[]): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const edges: Edge[] = []

  // Group by function → family → title → roles
  const grouped = new Map<string, Map<string, Map<string, InternalRole[]>>>()
  for (const role of roles) {
    if (!grouped.has(role.function)) grouped.set(role.function, new Map())
    const families = grouped.get(role.function)!
    if (!families.has(role.family)) families.set(role.family, new Map())
    const titles = families.get(role.family)!
    if (!titles.has(role.title)) titles.set(role.title, [])
    titles.get(role.title)!.push(role)
  }

  const FUNC_Y = 0
  const FAMILY_Y = 120
  const ROLE_Y = 260
  const ROLE_GAP = 210
  const FAMILY_GAP = 80
  const FUNC_GAP = 120

  let globalX = 0

  for (const [fnIdx, [fn, families]] of [...grouped.entries()].entries()) {
    const funcId = `fn-${fnIdx}`
    const familyEntries = [...families.entries()]
    const funcStartX = globalX

    for (const [famIdx, [fam, titleGroups]] of familyEntries.entries()) {
      const famId = `${funcId}-fam-${famIdx}`
      const titleEntries = [...titleGroups.entries()]
      const famStartX = globalX

      for (const [title, titleRoles] of titleEntries) {
        const roleId = `${famId}-role-${title.replace(/\s+/g, "-")}`
        const levels = titleRoles.map((r) => ({
          level: r.level,
          status: r.status,
          id: r.id,
        }))

        nodes.push({
          id: roleId,
          type: "roleNode",
          position: { x: globalX, y: ROLE_Y },
          data: {
            title,
            levels,
            // Store first role ID so click handler can find it
            firstRoleId: titleRoles[0].id,
          },
        })

        edges.push({
          id: `e-${famId}-${roleId}`,
          source: famId,
          target: roleId,
          type: "smoothstep",
          style: { stroke: "#94a3b8", strokeWidth: 1.5 },
        })

        globalX += ROLE_GAP
      }

      // Family node centered above its children
      const famCenterX =
        titleEntries.length > 0
          ? famStartX + ((titleEntries.length - 1) * ROLE_GAP) / 2
          : famStartX

      const totalFamRoles = [...titleGroups.values()].reduce(
        (s, arr) => s + arr.length,
        0
      )

      nodes.push({
        id: famId,
        type: "familyNode",
        position: { x: famCenterX, y: FAMILY_Y },
        data: { label: fam, count: totalFamRoles },
      })

      edges.push({
        id: `e-${funcId}-${famId}`,
        source: funcId,
        target: famId,
        type: "smoothstep",
        style: { stroke: "#94a3b8", strokeWidth: 2 },
      })

      globalX += FAMILY_GAP
    }

    // Function node centered above its families
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

function CatalogGraph({ roles, onRoleClick }: Props) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildGraph(roles),
    [roles]
  )

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 100)
  }, [])

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      if (node.type === "roleNode" && onRoleClick) {
        const firstRoleId = (node.data as { firstRoleId?: string }).firstRoleId
        if (firstRoleId) onRoleClick(firstRoleId)
      }
    },
    [onRoleClick]
  )

  return (
    <div className="h-[600px] w-full rounded-lg border border-f1-border-secondary">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.05}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={20} size={1} />
        <Controls showInteractive={false} />
        <MiniMap pannable zoomable />
      </ReactFlow>
    </div>
  )
}

export function CatalogTab({ roles, onRoleClick }: Props) {
  return (
    <ReactFlowProvider>
      <CatalogGraph roles={roles} onRoleClick={onRoleClick} />
    </ReactFlowProvider>
  )
}
