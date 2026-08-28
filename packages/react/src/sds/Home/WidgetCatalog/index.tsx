import {
  Fragment,
  isValidElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import {
  modules,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule/modules"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0SearchInput } from "@/components/F0SearchInput"
import { ArrowLeft, Star } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Form, useF0Form } from "@/patterns/F0Form"

import {
  resolveWidgetHeader,
  widgetChrome,
  type HomeWidgetItem,
  type SlotRenderers,
  type WidgetParams,
  type WidgetParamsSchema,
} from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import type { WidgetContainerSide } from "../WidgetContainer"
import { useWidgetDialogLayout, WidgetPreviewPane } from "../WidgetPreview"

/**
 * The width each area gives a widget, used to cap the preview when the picker is
 * opened for one. The rail is the layout's `asideWidth` and the main column is
 * its `mainWidth` — f0's `max-w-content` reading column — so a widget previews at
 * the width the column it is headed for will really give it.
 *
 * Override either with `previewWidth` when the app's own columns differ.
 */
const AREA_PREVIEW_WIDTH: Record<WidgetContainerSide, number> = {
  main: 712,
  right: 396,
}

/** One entry in the widget catalog dialog. */
export interface WidgetCatalogItem {
  id: string
  title: string
  icon: IconType
  /**
   * The LIVE PREVIEW of the widget.
   *
   * GIVE IT THE WIDGET ITSELF — the same `HomeWidgetItem` the layout would be
   * handed — and the catalog draws it through `SlotWidget`, exactly as the
   * column will. That is the only form that cannot drift: a preview assembled
   * out of content components reproduces the frame, the seams and the spacing
   * by hand, and the first of those to fall out of step is silent.
   *
   * A `ReactNode` is still accepted, for a widget the app draws its own way
   * (`renderWidget`) or for something that isn't a widget at all.
   */
  preview: HomeWidgetItem | ReactNode
  /**
   * What this widget is telling you — the widget's own `header.info`, shown under
   * the preview. Deciding whether to add a widget is exactly the moment that
   * sentence is worth reading, so the picker says it without being asked.
   *
   * Taken from the widget's own header when `preview` is a `HomeWidgetItem`, so
   * for those it is usually nothing to pass.
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
  /**
   * WHICH COLUMNS this widget may be added to — the same two sides the layout
   * hands back from `onClickAddNewWidget`. The picker then shows it only when it
   * was opened for one of them (see `area`).
   *
   * OMIT IT for a widget that belongs in either, which is most of them: a
   * `list`-shaped card reads the same in a 396px rail and in the main column,
   * and saying so twice is how the two lists drift apart. Name the sides for the
   * widgets that genuinely cannot travel — a carousel of post cards needs the
   * main column's width, a 40px clock tile is built for the rail.
   *
   * A widget listed for NEITHER side (`[]`) is offered nowhere, which is a way to
   * retire an entry without deleting it.
   */
  areas?: WidgetContainerSide[]
  /**
   * THE WIDGET IS CONFIGURABLE: adding it goes through a SECOND STEP where these
   * params are set, and they are handed back with the widget's id from
   * `onAdd`. The schema is the widget's own `paramsSchema` — the same F0Form
   * schema its "Edit params" dialog uses — so the fields, their types and what
   * is required are declared once and read in both places.
   *
   * Taken from the widget itself when `preview` is a `HomeWidgetItem`, so for
   * those it is usually nothing to pass: a widget the column can configure is
   * already a widget the picker can configure.
   */
  paramsSchema?: WidgetParamsSchema
  /**
   * What that step OPENS WITH. Defaults the user would have chosen anyway are
   * what make the preview worth looking at before a field is touched — and, for
   * a schema whose params are all optional, what makes "Add widget" the only
   * press needed. Falls back to the widget's own `params` when the preview is one.
   */
  params?: WidgetParams
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
  /**
   * Called with the chosen widget id when the CTA is pressed — and, for a widget
   * that declares a `paramsSchema`, with the PARAMS it was configured with in
   * the step before. Add the widget with them: they are what the user has just
   * been previewing.
   */
  onAdd: (id: string, params?: WidgetParams) => void
  /**
   * The DOMAINS the picker is organised into, in the order to show them. Omit it
   * and the list is flat — grouping is an offer, not a requirement.
   */
  groups?: WidgetCatalogGroup[]
  /**
   * WHICH COLUMN the picker was opened for — pass the side `onClickAddNewWidget`
   * handed you. It does two things: widgets that declare `areas` are filtered
   * down to the ones this column can hold, and the preview is capped to that
   * column's width by default (see {@link AREA_PREVIEW_WIDTH}).
   *
   * Omit it and the picker is what it has always been: every widget, previewed
   * at `previewWidth`. That is right for a Home with ONE place to put a widget;
   * a layout with two columns should say which one it is filling, or it will
   * offer the rail's clock for the main column and preview it at the wrong width.
   */
  area?: WidgetContainerSide
  /**
   * Content width of the column this was opened from — the preview is capped
   * to it, so a rail-bound widget previews at rail width. Defaults to the
   * `area`'s own width, and to the rail's when there is no `area`.
   */
  previewWidth?: number
  /**
   * Per-visualization renderers for the previews this dialog draws itself,
   * MERGED OVER the kit's `defaultSlotRenderers`. Pass the SAME map the layout
   * gets: a widget whose visualization is bespoke would otherwise preview as
   * "No renderer for slot …" and then render properly once added.
   */
  slotRenderers?: SlotRenderers
  /**
   * REBUILDS a preview for the params being tried out in the configure step —
   * the twin of `WidgetContainer`'s `rebuildWidget`, and there for the same
   * reason: the picker resolves whatever the params merely SAY (the widget's
   * title, its info) on its own, while SLOTS that depend on them can only be
   * rebuilt by the app, which knows where their data comes from.
   *
   * Give back the widget as DATA (a `HomeWidgetItem`) and the picker draws it
   * through the same `SlotWidget` a column would.
   */
  rebuildPreview?: (
    item: WidgetCatalogItem,
    params: WidgetParams
  ) => WidgetCatalogItem["preview"]
  title?: string
}

/**
 * The picker's two steps. The second one EXISTS ONLY for a widget with params to
 * set: everything else is added from the list, in one press, as it always was.
 */
type WidgetCatalogStep = "pick" | "configure"

/**
 * How long after the last keystroke the preview catches up — the same debounce
 * `WidgetUpdateDialog` puts on it, and for the same reason: F0Form's autosubmit
 * says the values changed AND validate, which is what a preview wants and a save
 * does not.
 */
const PREVIEW_DELAY_MS = 250

/**
 * Which of the two things a `preview` is. A `HomeWidgetItem` is a plain object
 * with `slots`; every `ReactNode` that is an object at all is an element, a
 * portal or an iterable — so `isValidElement` and the shape between them tell
 * the union apart without asking the caller to say which they meant.
 */
const isWidgetItem = (
  preview: WidgetCatalogItem["preview"]
): preview is HomeWidgetItem =>
  typeof preview === "object" &&
  preview !== null &&
  !isValidElement(preview) &&
  Array.isArray((preview as HomeWidgetItem).slots)

/**
 * One catalog preview. A widget handed over as DATA is drawn here through the
 * same `SlotWidget` a column uses — which is the whole point of taking data: the
 * preview and the card it previews are one render, so they cannot come out
 * differently. Anything else is passed through as given.
 */
const CatalogPreview = ({
  preview,
  params,
  slotRenderers,
}: {
  preview: WidgetCatalogItem["preview"]
  /** The params being tried out, when the picker is configuring the widget. */
  params?: WidgetParams
  slotRenderers?: SlotRenderers
}) => {
  if (!isWidgetItem(preview)) return <>{preview}</>
  return (
    <SlotWidget
      {...widgetChrome(preview)}
      header={preview.header}
      params={params ?? preview.params}
      fullHeight={preview.fullHeight}
      slots={preview.slots}
      loading={preview.loading}
      slotRenderers={slotRenderers}
    />
  )
}

/**
 * The sentence under a preview: the item's own, else the widget's — resolved
 * against the params in hand, so it is REWRITTEN as the widget is configured,
 * which is the fastest way to see what a param actually does.
 *
 * It reads the preview BEING DRAWN rather than the one the entry declared: while
 * params are being tried out that is the app's rebuild, and taking the sentence
 * from the original would leave the card saying one thing and the line under it
 * another.
 */
const previewInfo = (
  item: WidgetCatalogItem,
  preview: WidgetCatalogItem["preview"],
  params?: WidgetParams
) =>
  item.info ??
  (isWidgetItem(preview)
    ? resolveWidgetHeader(preview.header, params ?? preview.params)?.info
    : undefined)

/**
 * What the entry says about its params, else what the WIDGET says: a preview
 * handed over as data already declares the `paramsSchema` its column reads, and
 * a catalog that had to repeat it is a catalog that can disagree with the column.
 */
const itemParamsSchema = (item: WidgetCatalogItem) =>
  item.paramsSchema ??
  (isWidgetItem(item.preview) ? item.preview.paramsSchema : undefined)

/** The params that step opens with — same fallback. */
const itemParams = (item: WidgetCatalogItem): WidgetParams =>
  item.params ??
  (isWidgetItem(item.preview) ? item.preview.params : undefined) ??
  {}

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
 *
 * ONE CATALOG, TWO COLUMNS. Pass the `area` the picker was opened for and the
 * same `widgets` list serves both: entries that declare `areas` are shown only
 * where they fit, entries that declare none are shown in both, and the preview
 * takes that column's width. So a Home keeps one list — the widgets it offers —
 * rather than two that have to be kept in step.
 *
 * A WIDGET WITH PARAMS IS ADDED IN TWO STEPS. Picking it doesn't add it: the CTA
 * reads "Continue" and the left column turns into its params — the widget's own
 * `paramsSchema` as F0Form fields, the same ones "Edit params" would show —
 * while the preview STAYS PUT beside them and follows every valid edit. So a
 * widget is configured where it is chosen, and `onAdd` receives it already set
 * up rather than the app having to open a second dialog on a half-built card.
 * "Back" returns to the list with the selection, the search and the values you
 * had typed intact.
 */
export function WidgetCatalog({
  isOpen,
  onClose,
  widgets,
  onAdd,
  groups,
  area,
  previewWidth,
  slotRenderers,
  rebuildPreview,
  title = "Add widget",
}: WidgetCatalogProps) {
  const t = useI18n()
  const { position, width, bodyClassName, asideClassName } =
    useWidgetDialogLayout()
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [step, setStep] = useState<WidgetCatalogStep>("pick")
  /**
   * WHETHER A STEP HAS BEEN TAKEN since the picker opened. The column slides
   * when you move between the steps, and ONLY then: opening the picker is the
   * dialog's own entrance, and a list sliding in behind it read as a second
   * animation competing with it rather than as the list arriving.
   */
  const [stepped, setStepped] = useState(false)
  /** Moving between the steps — the one thing that makes the column slide. */
  const goToStep = (next: WidgetCatalogStep) => {
    setStepped(true)
    setStep(next)
  }
  /**
   * The params being filled in, KEPT AGAINST THE WIDGET THEY BELONG TO: stepping
   * back to the list and forward again finds the form as it was left, while
   * landing on another widget starts from that widget's own defaults rather than
   * from the last one's values.
   *
   * Only ever the last values that VALIDATED (F0Form's autosubmit), because this
   * is also what the preview is drawn from — a half-typed number is not something
   * to redraw a widget for.
   */
  const [draft, setDraft] = useState<{
    id: string
    params: WidgetParams
  } | null>(null)
  const { formRef, getValues, trigger } = useF0Form()

  const needle = query.trim().toLowerCase()
  // The column decides the preview's width unless the app overrides it — a rail
  // widget previewed at the main column's width is a different card.
  const resolvedPreviewWidth =
    previewWidth ?? (area ? AREA_PREVIEW_WIDTH[area] : AREA_PREVIEW_WIDTH.right)

  /**
   * THE LIST AS IT IS READ: recommended first, then each declared domain that has
   * anything in it, then whatever belongs to no domain — with the search already
   * applied, so a group whose widgets are all filtered out disappears rather than
   * leaving an empty heading behind.
   */
  const sections = useMemo(() => {
    // THE AREA FILTER COMES FIRST, before the search: a widget this column can't
    // hold isn't a widget the search should be able to surface. A widget that
    // declares no `areas` belongs to every column — the common case, and the one
    // that stays common by saying nothing.
    const offered = area
      ? widgets.filter((w) => !w.areas || w.areas.includes(area))
      : widgets
    const shown = needle
      ? offered.filter((w) => w.title.toLowerCase().includes(needle))
      : offered
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
  }, [widgets, groups, needle, area, t])

  // Selection follows the ORDER THE LIST IS IN, so "the first one" is the first
  // one you can see — and never a row the search has filtered out.
  const ordered = sections.flatMap((section) => section.items)
  const selected =
    ordered.find((w) => w.id === selectedId) ?? ordered[0] ?? null

  const schema = selected ? itemParamsSchema(selected) : undefined
  const configuring = step === "configure" && schema !== undefined
  // What the widget is being previewed WITH: the values in hand while they are
  // being set, the widget's own defaults before that.
  const params =
    selected && draft?.id === selected.id
      ? draft.params
      : selected
        ? itemParams(selected)
        : {}
  /**
   * THE WIDGET ACTUALLY DRAWN — the app's rebuild while params are being tried
   * out, the entry's own preview otherwise. Taken once so the card and the
   * sentence under it are read off the SAME widget: computing them apart is how
   * a preview ends up showing three events over a line that says two.
   */
  const previewed =
    configuring && selected && rebuildPreview
      ? rebuildPreview(selected, params)
      : selected?.preview

  // REOPENING STARTS AT THE LIST. The picker can be closed from the second step
  // — on params that were never added — and coming back into a form for a widget
  // you had walked away from would be answering a question nobody asked again.
  useEffect(() => {
    if (isOpen) {
      setStep("pick")
      setStepped(false)
      setDraft(null)
    }
  }, [isOpen])

  // A step that has LOST ITS WIDGET is not a step: if the offered list changes
  // under the form (the app swaps `widgets`, or the `area` does), the selection
  // moves to a widget that may have nothing to configure, and the picker falls
  // back to what it can always do — show the list.
  useEffect(() => {
    if (step === "configure" && !schema) setStep("pick")
  }, [step, schema])

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      // The second step says WHICH widget is being set up, because its own row is
      // no longer on screen to say it.
      title={
        configuring && selected
          ? t.widgets.configureWidget.replace("{{title}}", selected.title)
          : title
      }
      // Fullscreen unless the display is big enough for a centered box to be
      // worth it — these two columns want the room (`useWidgetDialogLayout`).
      position={position}
      width={width}
      primaryAction={
        configuring && selected
          ? {
              // The end of the flow, whichever step it took to get here: the CTA
              // is "Add widget" in both, so the second step reads as part of
              // adding rather than as a dialog of its own.
              label: "Add widget",
              // Validation before adding is the FORM's, not ours: `trigger`
              // surfaces the same errors the fields would, and the schema is the
              // only place "you must set this" is written down.
              onClick: async () => {
                if (!(await trigger())) return
                onAdd(selected.id, getValues())
              },
            }
          : {
              // A widget with params isn't added by this press — it is opened.
              // Saying "Continue" is what keeps that from being a surprise.
              label: schema ? t.wizard.next : "Add widget",
              disabled: !selected,
              onClick: () => {
                if (!selected) return
                if (schema) goToStep("configure")
                else onAdd(selected.id)
              },
            }
      }
      // BACK, not Cancel: the list is where you came from and the picker is
      // still open on it. Closing is what the dialog's own close button does.
      secondaryAction={
        configuring && selected
          ? {
              label: t.widgets.back,
              icon: ArrowLeft,
              iconPosition: "left",
              onClick: () => {
                // What is IN THE FIELDS right now, not just what last settled
                // and validated: stepping out to check the list against the
                // widget shouldn't cost the value typed a moment before, and a
                // half-filled form is still the form you were filling.
                setDraft({ id: selected.id, params: getValues() })
                goToStep("pick")
              },
            }
          : undefined
      }
    >
      <div className={bodyClassName}>
        {/* THE LEFT COLUMN IS THE STEP — the widgets to choose from, or the
            params of the one chosen. Keyed by the step so the swap SLIDES (in
            from the right going forward, from the left coming back) while the
            preview beside it holds still: the widget you were looking at is the
            widget you are now configuring, and it should not have to re-arrive
            to say so.

            The slide belongs to the STEP, not to the picker: on the way in the
            dialog has an entrance of its own, and the list is simply already
            there (`stepped`). */}
        <div
          key={step}
          className={cn(
            "flex min-h-0 flex-col gap-2",
            asideClassName,
            stepped &&
              cn(
                "duration-300 ease-out animate-in fade-in motion-reduce:animate-none",
                configuring ? "slide-in-from-right-4" : "slide-in-from-left-4"
              )
          )}
        >
          {configuring && selected && schema ? (
            /* The params, as FIELDS: the widget's own schema handed to F0Form, so
             a `z.date()` gets a date picker, a `z.enum()` a select, and a param
             that isn't `.optional()` simply cannot be left empty — the same
             fields "Edit params" shows once the widget is on the page. */
            <div className="min-h-0 flex-1 overflow-y-auto">
              <F0Form
                // Keyed by the widget so switching to another one starts a fresh
                // form rather than carrying the last one's values into it.
                key={selected.id}
                formRef={formRef}
                name="widget-params"
                schema={schema}
                defaultValues={params}
                // Autosubmit is the CHANGE SIGNAL, not an add: it hands us the
                // values every time they settle and validate, which is what the
                // preview wants. Nothing reaches the Home until the CTA.
                submitConfig={{
                  type: "autosubmit",
                  delay: PREVIEW_DELAY_MS,
                  hideActionBar: true,
                }}
                // The dialog already provides the padding around this column.
                styling={{ noPadding: true }}
                onSubmit={(values: WidgetParams) => {
                  setDraft({ id: selected.id, params: values })
                  return { success: true }
                }}
              />
            </div>
          ) : (
            <>
              <F0SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Search widgets"
              />
              <div className="flex flex-col gap-1 overflow-y-auto">
                {sections.map((section) => (
                  <Fragment key={section.id}>
                    {section.label ? (
                      <SectionHeader
                        label={section.label}
                        icon={section.icon}
                      />
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
                    {/* Two ways to end up with nothing, and they are not the same
                    problem: a search that matched none can be cleared, while a
                    column with nothing left to offer cannot. */}
                    {needle
                      ? "No widgets match your search."
                      : "No widgets to add here."}
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
        {/* The preview: the real widget, centered on the page grey, at the width
            the target column will really give it — and it JUMPS in as you move
            down the list, so each row you land on announces its widget.
            Keyed by the WIDGET rather than by the step, so configuring one keeps
            the card that is already there and only its content follows the
            fields. */}
        <WidgetPreviewPane
          previewKey={selected?.id}
          info={
            selected
              ? previewInfo(
                  selected,
                  previewed,
                  configuring ? params : undefined
                )
              : undefined
          }
          previewWidth={resolvedPreviewWidth}
        >
          {selected ? (
            <CatalogPreview
              preview={previewed}
              params={configuring ? params : undefined}
              slotRenderers={slotRenderers}
            />
          ) : null}
        </WidgetPreviewPane>
      </div>
    </F0Dialog>
  )
}
