import { StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { avatarFor } from "@/fixtures"
import type { Policy } from "@/fixtures"

import type { PrototypeMeta } from "../types"
import { DeletePageDialog } from "./DeletePageDialog"
import { MovePageDialog } from "./MovePageDialog"
import { PageDetail } from "./PageDetail"
import { PoliciesTab } from "./PoliciesTab"
import { usePoliciesState } from "./usePoliciesState"

/**
 * Policies prototype — Company handbook pages.
 *
 * URL routing:
 *   /p/policies                    — table list
 *   /p/policies?view=page&id=X     — page detail / editor
 */
export const meta: PrototypeMeta = {
  slug: "policies",
  title: "Policies",
  description:
    "Company policies and handbook pages: create, publish, and manage company-wide documents with reading acknowledgement tracking.",
  category: "Documents",
  module: "policies",
  audience: ["admin", "employee"],
  tags: ["policies", "handbook", "documents", "compliance"],
  createdAt: "2026-05-07",
}

export default function Policies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const state = usePoliciesState()

  const view = searchParams.get("view")
  const pageId = searchParams.get("id")

  // Dialog state for actions triggered from the table row menu
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null)
  const [moveTarget, setMoveTarget] = useState<string | null>(null)

  // Navigation helpers
  const goToList = useCallback(
    () => setSearchParams({}),
    [setSearchParams]
  )

  const goToPage = useCallback(
    (id: string) => setSearchParams({ view: "page", id }),
    [setSearchParams]
  )

  const handleCreatePage = useCallback(() => {
    const newPage: Policy = {
      id: `pol-${Date.now()}`,
      title: "",
      ownerName: "You",
      ownerAvatarUrl: avatarFor("current-user"),
      folder: "",
      visibility: "private",
      mandatory: false,
      acknowledgedCount: 0,
      totalEmployees: 130,
      lastPublishedAt: null,
      updatedAt: new Date().toISOString().slice(0, 10),
    }
    state.addPage(newPage)
    goToPage(newPage.id)
  }, [state, goToPage])

  const handleDeleteFromTable = useCallback(
    (id: string) => {
      state.deletePage(id)
      setDeleteTarget(null)
    },
    [state]
  )

  const handleMoveFromTable = useCallback(
    (folder: string) => {
      if (moveTarget) {
        state.updatePage(moveTarget, { folder })
        setMoveTarget(null)
      }
    },
    [state, moveTarget]
  )

  // -----------------------------------------------------------------------
  // Detail view
  // -----------------------------------------------------------------------
  if (view === "page" && pageId) {
    const page = state.getPage(pageId)
    if (!page) {
      goToList()
      return null
    }
    return (
      <Page
        header={
          <PageHeader
            module={{
              id: "pages",
              name: "Policies",
              href: "/p/policies",
            }}
            breadcrumbs={[
              { id: "page", label: page.title || "Untitled" },
            ]}
          />
        }
      >
        <PageDetail page={page} state={state} onBack={goToList} />
      </Page>
    )
  }

  // -----------------------------------------------------------------------
  // List view
  // -----------------------------------------------------------------------
  const deleteTargetPage = deleteTarget ? state.getPage(deleteTarget) : null
  const moveTargetPage = moveTarget ? state.getPage(moveTarget) : null

  return (
    <Page
      header={
        <PageHeader
          module={{
            id: "pages",
            name: "Policies",
            href: "/p/policies",
          }}
          actions={[]}
        />
      }
    >
      <StandardLayout>
        <PoliciesTab
          state={state}
          onPageClick={goToPage}
          onDeletePage={setDeleteTarget}
          onMovePage={setMoveTarget}
          onCreatePage={handleCreatePage}
        />
      </StandardLayout>

      {/* Delete confirmation from table row action */}
      {deleteTargetPage && (
        <DeletePageDialog
          page={deleteTargetPage}
          open
          onClose={() => setDeleteTarget(null)}
          onDelete={() => handleDeleteFromTable(deleteTargetPage.id)}
        />
      )}

      {/* Move dialog from table row action */}
      {moveTargetPage && (
        <MovePageDialog
          page={moveTargetPage}
          open
          onClose={() => setMoveTarget(null)}
          onMove={handleMoveFromTable}
        />
      )}
    </Page>
  )
}
