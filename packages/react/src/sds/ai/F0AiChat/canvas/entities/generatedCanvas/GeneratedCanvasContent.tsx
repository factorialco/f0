import { useEffect, useState } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"

import type { GeneratedCanvasContent as GeneratedCanvasContentType } from "../../../types"
import type {
  GeneratedCanvasAnchor,
  GeneratedCanvasSelectedNode,
} from "./types"

import { GeneratedCanvasRuntime } from "./GeneratedCanvasRuntime"

export function GeneratedCanvasContent({
  content,
  refreshKey,
}: {
  content: GeneratedCanvasContentType
  refreshKey: number
}) {
  const [selectedNode, setSelectedNode] =
    useState<GeneratedCanvasSelectedNode | null>(null)
  const [anchors, setAnchors] = useState<GeneratedCanvasAnchor[]>([])

  useEffect(() => {
    setSelectedNode(null)
    setAnchors([])
  }, [content.rendererSource, refreshKey])

  return (
    <div className="isolate relative h-full overflow-hidden bg-[#020617]">
      <GeneratedCanvasRuntime
        rendererSource={content.rendererSource}
        data={content.data}
        engine={content.engine}
        refreshKey={refreshKey}
        onSelectNode={setSelectedNode}
        onSetAnchors={setAnchors}
      />

      {anchors.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {anchors.map((anchor) => {
            const [fallbackFirstName, ...fallbackLastNameParts] = (
              anchor.label ?? anchor.id
            ).split(" ")
            const firstName = anchor.firstName ?? fallbackFirstName
            const fallbackLastName = fallbackLastNameParts.join(" ")
            const lastName = anchor.lastName ?? fallbackLastName

            return (
              <div
                key={anchor.id}
                data-generated-canvas-anchor={anchor.id}
                className="absolute flex items-center justify-center rounded-full shadow-2xl ring-2 ring-white/70"
                style={{
                  left: anchor.x,
                  top: anchor.y,
                  width: anchor.size ?? 32,
                  height: anchor.size ?? 32,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <F0AvatarPerson
                  firstName={firstName}
                  lastName={lastName || "Anchor"}
                  src={anchor.src}
                  size="sm"
                  aria-label={`Avatar for ${anchor.label ?? anchor.id}`}
                />
              </div>
            )
          })}
        </div>
      )}

      {selectedNode && (
        <div
          className="absolute bottom-4 right-4 z-20 w-80 rounded-2xl border p-4 shadow-2xl backdrop-blur-md"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            borderColor: "rgba(221, 214, 254, 0.32)",
            color: "white",
          }}
        >
          <div
            className="text-xs font-medium uppercase tracking-[0.28em]"
            style={{ color: "#ede9fe" }}
          >
            Selected node
          </div>
          <div
            className="mt-2 text-lg font-semibold"
            style={{ color: "white" }}
          >
            {selectedNode.label ?? selectedNode.id}
          </div>
          {selectedNode.details && (
            <dl
              className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs"
              style={{ color: "#e2e8f0" }}
            >
              {Object.entries(selectedNode.details).map(([key, value]) => (
                <div key={key} className="contents">
                  <dt style={{ color: "#94a3b8" }}>{key}</dt>
                  <dd
                    className="truncate text-right"
                    style={{ color: "#f8fafc" }}
                  >
                    {String(value ?? "—")}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}
    </div>
  )
}
