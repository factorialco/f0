import { ReactNode, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Form, useF0Form } from "@/patterns/F0Form"

import { useWidgetDialogLayout, WidgetPreviewPane } from "../WidgetPreview"
import {
  type FromWidgetParams,
  type WidgetParams,
  type WidgetParamsSchema,
} from "../slotRenderers"

/** The info line for the params in hand — it may be fixed or computed. */
const resolveInfo = (
  info: FromWidgetParams<string> | undefined,
  params: WidgetParams
) => (typeof info === "function" ? info(params) : info)

/**
 * How long after the last keystroke the preview catches up. F0Form's autosubmit
 * is what tells us the values changed AND that they are valid, so this is the
 * debounce on the preview rather than on any saving — short enough to feel live,
 * long enough not to redraw the card mid-word.
 */
const PREVIEW_DELAY_MS = 250

export interface WidgetUpdateDialogProps {
  isOpen: boolean
  onClose: () => void
  /**
   * The widget's params schema — an F0Form schema, so these fields come with
   * their types, their datasources and their validation already declared.
   */
  schema: WidgetParamsSchema
  /** The params the widget has now: what the form opens with. */
  params?: WidgetParams
  /**
   * Draws the widget for the params the user is TRYING OUT — called with each
   * valid edit, before anything is saved.
   */
  renderPreview: (params: WidgetParams) => ReactNode
  /**
   * What this widget is telling you, shown under the preview. A function of the
   * params — the widget's own `header.info` — so the explanation is rewritten as
   * you configure it, which is the fastest way to see what a param actually does.
   */
  info?: FromWidgetParams<string>
  /** Called with the new params when the dialog is saved. */
  onSave: (params: WidgetParams) => void
  /**
   * Content width of the column the widget lives in — the preview is capped to
   * it, so a rail widget previews at rail width (as in `WidgetCatalog`).
   */
  previewWidth?: number
  /** Defaults to the provider's `t.widgets.editParamsTitle`. */
  title?: string
  saveLabel?: string
}

/**
 * WidgetUpdateDialog — "Edit params", the twin of `WidgetCatalog`: the same `xl`
 * dialog, the FIELDS on the left and a LIVE preview of the widget on the right,
 * at the width its column will really give it.
 *
 * The fields are not hand-built: they are the widget's own `paramsSchema` handed
 * to `F0Form`, so a `z.date()` gets a date picker, a `z.enum()` a select, a
 * datasource-backed field its searchable (single or multi) select, and a param
 * that isn't `.optional()` simply cannot be left empty — the dialog can't save
 * until it is filled.
 *
 * The preview follows every VALID edit (an invalid form keeps the last good
 * one), which is why the widget's `title` and `info` may be functions of its
 * params: you watch the card become what you are configuring.
 */
export function WidgetUpdateDialog({
  isOpen,
  onClose,
  schema,
  params,
  renderPreview,
  info,
  onSave,
  previewWidth = 396,
  title,
  saveLabel = "Save",
}: WidgetUpdateDialogProps) {
  const t = useI18n()
  const { position, width, bodyClassName, asideClassName } =
    useWidgetDialogLayout()
  const { formRef, getValues, trigger } = useF0Form()
  // What the PREVIEW is drawn from: the last values that validated, starting
  // from the widget's own. Never the raw form state — a half-typed number is not
  // something to redraw a widget for.
  const [preview, setPreview] = useState<WidgetParams>(params ?? {})

  // Reopening shows the widget as it IS, not as it was left the last time: the
  // dialog can be closed on a preview that was never saved.
  useEffect(() => {
    if (isOpen) setPreview(params ?? {})
  }, [isOpen, params])

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title ?? t.widgets.editParamsTitle}
      // Fullscreen unless the display is big enough for a centered box to be
      // worth it — the fields and the preview want the room
      // (`useWidgetDialogLayout`).
      position={position}
      width={width}
      primaryAction={{
        label: saveLabel,
        // Validation before saving is the FORM's, not ours: `trigger` surfaces
        // the same errors the fields would show, and a schema that says a param
        // is required is the only place "you must set this" is written down.
        onClick: async () => {
          if (!(await trigger())) return
          onSave(getValues())
          onClose()
        },
      }}
    >
      <div className={bodyClassName}>
        <div className={cn("overflow-y-auto", asideClassName)}>
          <F0Form
            formRef={formRef}
            name="widget-params"
            schema={schema}
            defaultValues={params}
            // Autosubmit is the change signal, not a save: it hands us the
            // values every time they settle AND validate, which is exactly what
            // the preview wants. Saving stays with the dialog's own action, so
            // nothing is committed to the widget until it is pressed.
            submitConfig={{
              type: "autosubmit",
              delay: PREVIEW_DELAY_MS,
              hideActionBar: true,
            }}
            // The dialog already provides the padding around this column.
            styling={{ noPadding: true }}
            onSubmit={(values: WidgetParams) => {
              setPreview(values)
              return { success: true }
            }}
          />
        </div>
        {/* The preview: the same pane the catalog uses, so configuring a widget
            and choosing one look like the same thing. It jumps in with the
            dialog; from then on it just follows the fields, because a jump per
            keystroke would be noise rather than feedback. */}
        <WidgetPreviewPane
          previewKey="widget-params"
          info={resolveInfo(info, preview)}
          previewWidth={previewWidth}
        >
          {renderPreview(preview)}
        </WidgetPreviewPane>
      </div>
    </F0Dialog>
  )
}
