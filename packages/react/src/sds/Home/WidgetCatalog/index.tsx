import { Fragment, ReactNode, useMemo, useState } from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import {
  modules,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule/modules"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0SearchInput } from "@/components/F0SearchInput"
import { Star } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

import { useWidgetDialogLayout, WidgetPreviewPane } from "../WidgetPreview"

/** One entry in the widget catalog dialog. */
export interface WidgetCatalogItem {
  id: string
  title: string
  icon: IconType
  /**
   * The LIVE PREVIEW of the widget — the same node the Home renders (e.g. a
   * `SlotWidget`), so the preview can't drift from what gets added.
   */
  preview: ReactNode
  /**
   * What this widget is telling you — the widget's own `header.info`, shown under
   * the preview. Deciding whether to add a widget is exactly the moment that
   * sentence is worth reading, so the picker says it without being asked.
   */
  info?: string
  /**
   * Which `groups` entry this widget belongs under. A widget whose group isn't
   * declared (or which has none) is listed after the groups, without a heading.
   */
  group?: string
  /**
   * LIFTS IT to a "Recommended" section at the very top, and out of its group —
   * a widget offered twice reads as two widgets. Optional in every sense: with
   * nothing recommended there is no section.
   */
  recommended?: boolean
}

/**
 * One DOMAIN in the picker: a heading the widgets under it belong to.
 *
 * The label is the app's own words because f0's `modules` registry maps ids to
 * ICONS ONLY — there are no module names to borrow, and a domain may well cover
 * two modules or none.
 */
export interface WidgetCatalogGroup {
  /** What an item's `group` points at. */
  id: string
  label: string
  /** The domain's module: its glyph heads the group. */
  module?: ModuleId
}

export interface WidgetCatalogProps {
  isOpen: boolean
  onClose: () => void
  /** The widgets that can be added, in the order to list them. */
  widgets: WidgetCatalogItem[]
  /** Called with the chosen widget id when the CTA is pressed. */
  onAdd: (id: string) => void
  /**
   * The DOMAINS the picker is organised into, in the order to show them. Omit it
   * and the list is flat — grouping is an offer, not a requirement.
   */
  groups?: WidgetCatalogGroup[]
  /**
   * Content width of the column this was opened from — the preview is capped
   * to it, so a rail-bound widget previews at rail width.
   */
  previewWidth?: number
  title?: string
}

/**
 * A section's heading: its glyph and its name.
 *
 * QUIET, and monochrome. The module's glyph is drawn as a plain icon rather than
 * as the coloured `F0AvatarModule` square: a heading sits directly above a column
 * of `lg` widget avatars, and a second coloured badge at a smaller size beside it
 * competed with them for the eye instead of labelling them. Small, secondary and
 * uppercase reads as a divider — which is all this is.
 *
 * The space is ABOVE it (`pt-5`), not below, so a heading belongs to the rows that
 * follow rather than floating between two groups.
 */
const SectionHeader = ({ label, icon }: { label: string; icon?: IconType }) => (
  <div className="flex items-center gap-1.5 px-2 pb-1 pt-5 first:pt-1">
    {icon ? <F0Icon icon={icon} size="sm" color="secondary" /> : null}
    <h6 className="m-0 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
      {label}
    </h6>
  </div>
)

/**
 * WidgetCatalog — the "Add widget" dialog, mirroring the custom-home prototype:
 * a searchable picker on the left (icon + title rows, the selected row tinted),
 * a LIVE preview of the highlighted widget on the right at the width it will
 * really get, and the "Add widget" CTA in the dialog footer. FULLSCREEN off a
 * large display, and the two columns stack on a narrow screen
 * (`useWidgetDialogLayout`).
 *
 * Selection follows the filter: if the selected row is filtered out, the first
 * remaining row takes over, so the preview always shows something the CTA can
 * actually add.
 */
export function WidgetCatalog({
  isOpen,
  onClose,
  widgets,
  onAdd,
  groups,
  previewWidth = 396,
  title = "Add widget",
}: WidgetCatalogProps) {
  const t = useI18n()
  const { position, width, bodyClassName, asideClassName } =
    useWidgetDialogLayout()
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const needle = query.trim().toLowerCase()

  /**
   * THE LIST AS IT IS READ: recommended first, then each declared domain that has
   * anything in it, then whatever belongs to no domain — with the search already
   * applied, so a group whose widgets are all filtered out disappears rather than
   * leaving an empty heading behind.
   */
  const sections = useMemo(() => {
    const shown = needle
      ? widgets.filter((w) => w.title.toLowerCase().includes(needle))
      : widgets
    const recommended = shown.filter((w) => w.recommended)
    // Recommended widgets are LIFTED out of their group, not copied into two
    // places: the same row twice reads as two different widgets.
    const rest = shown.filter((w) => !w.recommended)
    const declared = new Set((groups ?? []).map((group) => group.id))
    const loose = rest.filter((w) => !w.group || !declared.has(w.group))

    return [
      ...(recommended.length
        ? [
            {
              id: "recommended",
              label: t.widgets.recommended,
              icon: Star,
              items: recommended,
            },
          ]
        : []),
      ...(groups ?? [])
        .map((group) => ({
          ...group,
          icon: group.module ? modules[group.module] : undefined,
          items: rest.filter((w) => w.group === group.id),
        }))
        .filter((section) => section.items.length > 0),
      // No heading: these belong to nothing in particular, and inventing "Other"
      // for them would claim they do.
      ...(loose.length ? [{ id: "ungrouped", items: loose }] : []),
    ] as Array<{
      id: string
      label?: string
      icon?: IconType
      items: WidgetCatalogItem[]
    }>
  }, [widgets, groups, needle, t])

  // Selection follows the ORDER THE LIST IS IN, so "the first one" is the first
  // one you can see — and never a row the search has filtered out.
  const ordered = sections.flatMap((section) => section.items)
  const selected =
    ordered.find((w) => w.id === selectedId) ?? ordered[0] ?? null

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      // Fullscreen unless the display is big enough for a centered box to be
      // worth it — these two columns want the room (`useWidgetDialogLayout`).
      position={position}
      width={width}
      primaryAction={{
        label: "Add widget",
        disabled: !selected,
        onClick: () => selected && onAdd(selected.id),
      }}
    >
      <div className={bodyClassName}>
        {/* The picker: a search field leading the widget rows. */}
        <div className={cn("flex flex-col gap-2", asideClassName)}>
          <F0SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search widgets"
          />
          <div className="flex flex-col gap-1 overflow-y-auto">
            {sections.map((section) => (
              <Fragment key={section.id}>
                {section.label ? (
                  <SectionHeader label={section.label} icon={section.icon} />
                ) : null}
                {section.items.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setSelectedId(w.id)}
                    className={
                      "flex items-center gap-3 rounded-md p-2 text-left " +
                      (selected?.id === w.id
                        ? "bg-f1-background-selected"
                        : "hover:bg-f1-background-tertiary")
                    }
                  >
                    <F0AvatarIcon icon={w.icon} size="lg" />
                    <span className="truncate font-medium text-f1-foreground">
                      {w.title}
                    </span>
                  </button>
                ))}
              </Fragment>
            ))}
            {ordered.length === 0 ? (
              <div className="p-2 text-f1-foreground-secondary">
                No widgets match your search.
              </div>
            ) : null}
          </div>
        </div>
        {/* The preview: the real widget, centered on the page grey, at the width
            the target column will really give it — and it JUMPS in as you move
            down the list, so each row you land on announces its widget. */}
        <WidgetPreviewPane
          previewKey={selected?.id}
          info={selected?.info}
          previewWidth={previewWidth}
        >
          {selected?.preview}
        </WidgetPreviewPane>
      </div>
    </F0Dialog>
  )
}
