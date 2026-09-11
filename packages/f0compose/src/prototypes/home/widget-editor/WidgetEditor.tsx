import "./f0-utilities"
import {
  F0ActionBar,
  F0Dialog,
  F0Box,
  F0Button,
  F0Icon,
  type IconType,
  F0Text,
} from "@factorialco/f0-react"
import {
  F1SearchBox,
  Tabs,
  WidgetEmptyState,
} from "@factorialco/f0-react/dist/experimental"
import {
  Check,
  Comment,
  Money,
  PalmTree,
  People,
  Calendar,
  Clock,
  Megaphone,
  Inbox,
  ChartLine,
  File,
} from "@factorialco/f0-react/icons/app"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { goHome, startWidgetCreation } from "../one/conversationStore"
import { useProfile } from "../profileStore"
import { windowRegistry } from "../windows/WindowsColumn"
import { customWidgetIconKey } from "./creation"
import {
  countChanges,
  readSelection,
  saveSelection,
  useWidgetCatalog,
  type WidgetScope,
} from "./model"
import { WidgetCard } from "./WidgetCard"

const widgetIcons: Record<string, IconType> = {
  payslip: Money,
  holidays: PalmTree,
  recruitment: People,
  shifts: Calendar,
  documents: File,
  celebrations: Calendar,
  clockin: Clock,
  communities: Megaphone,
  events: Calendar,
  inbox: Inbox,
  insights: ChartLine,
}

export function WidgetEditor() {
  const profile = useProfile()
  const [dialogContainer, setDialogContainer] = useState<HTMLDivElement | null>(
    null
  )
  const [previewContainer, setPreviewContainer] =
    useState<HTMLDivElement | null>(null)
  const dialogRef = useCallback(
    (node: HTMLElement | SVGElement | null) =>
      setDialogContainer(node instanceof HTMLDivElement ? node : null),
    []
  )
  const previewRef = useCallback(
    (node: HTMLElement | SVGElement | null) =>
      setPreviewContainer(node instanceof HTMLDivElement ? node : null),
    []
  )
  const catalog = useWidgetCatalog(profile)
  const [params, setParams] = useSearchParams()
  const scope: WidgetScope =
    params.get("scope") === "employees" ? "employees" : "personal"
  const [saved] = useState(() => readSelection(profile))
  const [draft, setDraft] = useState(saved)
  const [search, setSearch] = useState("")
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const [focusedRow, setFocusedRow] = useState<string | null>(null)
  const knownWidgets = useRef(new Set(catalog.custom.map(({ id }) => id)))
  useEffect(() => {
    const added = catalog.custom.filter(
      ({ id }) => !knownWidgets.current.has(id)
    )
    knownWidgets.current = new Set(catalog.custom.map(({ id }) => id))
    if (!added.length) return
    setDraft((current) => ({
      ...current,
      [scope]: [...new Set([...current[scope], ...added.map(({ id }) => id)])],
    }))
  }, [JSON.stringify(catalog.custom), scope])
  const changes = countChanges(saved, draft)
  const rows = useMemo(
    () => [
      ...Object.entries(windowRegistry)
        .filter(([id]) => id !== "preview")
        .map(([id, value]) => ({
          id,
          title: value.title,
          icon: widgetIcons[id] ?? ChartLine,
        })),
      ...catalog.custom.map((widget) => ({
        id: widget.id,
        title: widget.title,
        icon: widgetIcons[customWidgetIconKey(widget)],
      })),
    ],
    [JSON.stringify(catalog.custom)]
  )
  const toggle = useCallback(
    (id: string) => {
      // Selection reorders rows: discard the pointer position from the old layout.
      setHoveredRow(null)
      setDraft((current) => ({
        ...current,
        [scope]: current[scope].includes(id)
          ? current[scope].filter((item) => item !== id)
          : [...current[scope], id],
      }))
    },
    [scope]
  )
  const discard = () => {
    setDraft(saved)
    goHome()
    setParams({})
  }
  const save = () => {
    saveSelection(profile, draft)
    goHome()
    setParams({})
  }
  return (
    <F0Box
      height="full"
      width="full"
      minWidth="0"
      position="relative"
      ref={dialogRef}
      data-widget-editor
    >
      {dialogContainer && (
        <F0Dialog
          isOpen
          position="fullscreen"
          embedded
          compactInset
          container={dialogContainer}
          asBottomSheetInMobile={false}
          disableContentPadding
          title="Edit widgets"
          closeDisabled={changes > 0}
          onClose={() => {
            if (changes > 0) return
            goHome()
            setParams({})
          }}
          headerAction={{
            label: "New widget",
            icon: Comment,
            variant: "outline",
            onClick: () => {
              setSearch("")
              startWidgetCreation(profile)
            },
          }}
        >
          <F0Box
            height="full"
            minHeight="0"
            display="flex"
            flexDirection="column"
          >
            <F0Box
              paddingX="xs"
              paddingTop="sm"
              data-widget-tabs
              shrink={false}
            >
              <Tabs
                secondary={false}
                key={scope}
                activeTabId={scope}
                tabs={[
                  {
                    id: "personal",
                    label: "Personal",
                    onClick: () =>
                      setParams({ view: "widgets", scope: "personal" }),
                  },
                  {
                    id: "employees",
                    label: "Employees",
                    onClick: () =>
                      setParams({ view: "widgets", scope: "employees" }),
                  },
                ]}
              />
            </F0Box>
            <F0Box display="flex" grow minHeight="0" overflow="hidden">
              <F0Box
                width="64"
                lg={{ width: "72" }}
                xl={{ width: "80" }}
                shrink={false}
                padding="lg"
                overflowY="auto"
                borderRight="default"
                borderColor="secondary"
              >
                <F1SearchBox
                  value={search}
                  onChange={setSearch}
                  placeholder="Search widgets…"
                  clearable
                />
                <F0Box
                  display="flex"
                  flexDirection="column"
                  gap="xs"
                  paddingTop="md"
                >
                  {rows
                    .filter(
                      (row) =>
                        !search ||
                        row.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort(
                      (a, b) =>
                        Number(draft[scope].includes(b.id)) -
                        Number(draft[scope].includes(a.id))
                    )
                    .map((row) => (
                      <F0Box
                        key={row.id}
                        data-widget-row
                        role="group"
                        aria-label={row.title}
                        tabIndex={0}
                        onPointerEnter={() => setHoveredRow(row.id)}
                        onPointerLeave={() => setHoveredRow(null)}
                        onPointerDownCapture={() => setFocusedRow(null)}
                        onFocusCapture={(event) => {
                          // Pointer clicks also focus buttons; only keyboard focus
                          // should keep actions visible after the pointer leaves.
                          setFocusedRow(
                            event.target instanceof Element &&
                              event.target.matches(":focus-visible")
                              ? row.id
                              : null
                          )
                        }}
                        onBlurCapture={(event) => {
                          if (
                            !event.currentTarget.contains(
                              event.relatedTarget as Node | null
                            )
                          )
                            setFocusedRow(null)
                        }}
                        background={
                          hoveredRow === row.id || focusedRow === row.id
                            ? "tertiary"
                            : "transparent"
                        }
                        display="flex"
                        alignItems="center"
                        gap="md"
                        paddingY="sm"
                        paddingX="sm"
                        borderRadius="md"
                      >
                        <F0Icon icon={row.icon} size="md" color="default" />
                        <F0Box grow minWidth="0">
                          <F0Text content={row.title} />
                        </F0Box>
                        <F0Box
                          width="20"
                          height="6"
                          shrink={false}
                          display="flex"
                          justifyContent="end"
                          alignItems="center"
                        >
                          {hoveredRow === row.id || focusedRow === row.id ? (
                            <F0Button
                              label={
                                draft[scope].includes(row.id) ? "Remove" : "Add"
                              }
                              variant="outline"
                              size="sm"
                              onClick={() => toggle(row.id)}
                            />
                          ) : draft[scope].includes(row.id) ? (
                            <F0Icon
                              icon={Check}
                              size="md"
                              color="default"
                              aria-label="Added"
                            />
                          ) : null}
                        </F0Box>
                      </F0Box>
                    ))}
                  {!rows.some(
                    (row) =>
                      !search ||
                      row.title.toLowerCase().includes(search.toLowerCase())
                  ) && (
                    <F0Text content="No widgets found" variant="description" />
                  )}
                </F0Box>
              </F0Box>
              <F0Box
                ref={previewRef}
                grow
                minWidth="0"
                background="secondary"
                position="relative"
                display="flex"
                flexDirection="column"
              >
                <F0Box
                  grow
                  minHeight="0"
                  overflowY="auto"
                  padding="lg"
                  xl={{ padding: "2xl" }}
                  paddingBottom="5xl"
                >
                  <F0Box
                    width="96"
                    maxWidth="full"
                    marginX="auto"
                    display="flex"
                    flexDirection="column"
                    gap="md"
                  >
                    {scope === "employees" && (
                      <F0Text
                        content="Default widgets for employees. Your personal selection stays separate."
                        variant="description"
                      />
                    )}
                    {draft[scope].map((id) => (
                      <WidgetCard
                        key={id}
                        id={id}
                        custom={catalog.custom}
                        onRemove={() => toggle(id)}
                      />
                    ))}
                    {!draft[scope].length && (
                      <WidgetEmptyState
                        title="No widgets yet"
                        description="Add a widget from the list to preview it here."
                      />
                    )}
                  </F0Box>
                </F0Box>
              </F0Box>
            </F0Box>
            <F0ActionBar
              anchor={previewContainer}
              isOpen={changes > 0}
              variant="light"
              label={`${changes} ${changes === 1 ? "change" : "changes"}`}
              primaryActions={[{ label: "Save changes", onClick: save }]}
              secondaryActions={[{ label: "Discard", onClick: discard }]}
            />
          </F0Box>
        </F0Dialog>
      )}
    </F0Box>
  )
}
