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

type PublishDialogProps = {
  page: Policy
  open: boolean
  onClose: () => void
  onPublish: (update: Partial<Policy>) => void
}

/**
 * Publish dialog — lets admins pick a folder, visibility, and
 * acknowledgement requirement before publishing a draft page.
 */
export function PublishPageDialog({
  page,
  open,
  onClose,
  onPublish,
}: PublishDialogProps) {
  const needsFolder = page.folder === "" || page.visibility === "private"
  const [folder, setFolder] = useState(needsFolder ? "" : page.folder)
  const [requestAck, setRequestAck] = useState(page.mandatory)
  const [visibility, setVisibility] = useState<"company" | "custom_group">(
    page.visibility === "custom_group" ? "custom_group" : "company"
  )
  const [folderError, setFolderError] = useState(false)

  if (!open) return null

  const handlePublish = () => {
    if (needsFolder && folder === "") {
      setFolderError(true)
      return
    }
    onPublish({
      folder: folder || page.folder,
      visibility,
      mandatory: requestAck,
      lastPublishedAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    })
    onClose()
  }

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
          width: 480,
          backgroundColor: "var(--background-primary, #fff)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <F0Text content="Publish page" variant="label" />

        {needsFolder && (
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text content="Folder" variant="body" />
            <select
              value={folder}
              onChange={(e) => {
                setFolder(e.target.value)
                setFolderError(false)
              }}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: folderError
                  ? "1px solid #dc2626"
                  : "1px solid #e5e7eb",
                fontSize: 14,
              }}
            >
              <option value="">Select a folder</option>
              {FOLDERS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            {folderError && (
              <F0Text content="Please select a folder" variant="description" />
            )}
          </F0Box>
        )}

        <F0Box
          display="flex"
          justifyContent="between"
          alignItems="center"
          padding="md"
          borderRadius="md"
          background="secondary"
        >
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Text
              content={
                page.mandatory
                  ? "Requires re-acknowledgement"
                  : "Request reading acceptance"
              }
              variant="body"
            />
            <F0Text
              content={
                page.mandatory
                  ? "Employees will need to re-confirm they have read this page."
                  : "Employees will be asked to confirm they have read this page."
              }
              variant="description"
            />
          </F0Box>
          <input
            type="checkbox"
            checked={requestAck}
            onChange={(e) => setRequestAck(e.target.checked)}
            style={{ width: 20, height: 20, cursor: "pointer" }}
          />
        </F0Box>

        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Text content="Who can see this page?" variant="body" />
          <select
            value={visibility}
            onChange={(e) =>
              setVisibility(e.target.value as "company" | "custom_group")
            }
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              fontSize: 14,
            }}
          >
            <option value="company">Everyone in the company</option>
            <option value="custom_group">Specific groups</option>
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
            onClick={handlePublish}
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
            Publish
          </button>
        </F0Box>
      </div>
    </div>
  )
}
