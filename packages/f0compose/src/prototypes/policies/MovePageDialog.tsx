import { F0Box, F0Text } from "@factorialco/f0-react"
import { useState } from "react"
import type { Policy } from "@/fixtures"

const FOLDERS = [
  "Company policies",
  "Compliance",
  "Finance",
  "Engineering",
  "Sales",
  "Operations",
]

type MovePageDialogProps = {
  page: Policy
  open: boolean
  onClose: () => void
  onMove: (folder: string) => void
}

export function MovePageDialog({
  page,
  open,
  onClose,
  onMove,
}: MovePageDialogProps) {
  const [folder, setFolder] = useState(page.folder)

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 400,
          backgroundColor: "var(--background-primary, #fff)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <F0Text content="Move page" variant="label" />

        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Folder" variant="body" />
          <select
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 14,
            }}
          >
            {FOLDERS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </F0Box>

        <F0Box display="flex" justifyContent="end" gap="sm">
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              backgroundColor: "transparent",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onMove(folder)
              onClose()
            }}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              backgroundColor: "#2563eb",
              color: "#fff",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </F0Box>
      </div>
    </div>
  )
}
