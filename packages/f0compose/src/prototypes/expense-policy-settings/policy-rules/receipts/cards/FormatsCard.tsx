import { F0Box, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { Paperclip, File, Envelope } from "@factorialco/f0-react/icons/app"
import type React from "react"

import { InlineProseSelect } from "../../shared/InlineProse"
import type { ReceiptFormats } from "../../types"

/**
 * Accepted receipt formats — 3 tinted tiles, one per format
 * (photo / PDF / email-forward). Same tile shape as the
 * Attendees + Payment-methods cards: outer F0Card, inner
 * secondary-background tiles, inline-prose select toggles each
 * format on/off.
 */

type OnOff = "on" | "off"

const ON_OFF_OPTIONS: { value: OnOff; label: string }[] = [
  { value: "on", label: "accepted" },
  { value: "off", label: "not accepted" },
]

export function FormatsCard(props: {
  formats: ReceiptFormats
  setReceiptFormat: (
    format: "photo" | "pdf" | "emailForward",
    enabled: boolean
  ) => void
}) {
  const { formats } = props
  return (
    <F0Card title="Accepted formats">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Text
          content="Which media employees can submit as a receipt."
          variant="description"
        />
        <F0Box display="grid" columns="3" gap="md">
          <FormatTile
            icon={Paperclip}
            context="Photo"
            enabled={formats.photo}
            onChange={(v) => props.setReceiptFormat("photo", v === "on")}
            ariaLabel="Photo format"
          />
          <FormatTile
            icon={File}
            context="PDF"
            enabled={formats.pdf}
            onChange={(v) => props.setReceiptFormat("pdf", v === "on")}
            ariaLabel="PDF format"
          />
          <FormatTile
            icon={Envelope}
            context="Email forward"
            enabled={formats.emailForward}
            onChange={(v) => props.setReceiptFormat("emailForward", v === "on")}
            ariaLabel="Email-forward format"
          />
        </F0Box>
      </F0Box>
    </F0Card>
  )
}

function FormatTile(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  context: string
  enabled: boolean
  onChange: (next: OnOff) => void
  ariaLabel: string
}) {
  return (
    <div className="bg-f1-background-accent/5 rounded-md p-4 flex flex-col gap-2">
      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-f1-background mb-1">
        <F0Icon
          icon={props.icon}
          color={props.enabled ? "accent" : "secondary"}
          size="sm"
        />
      </div>
      <F0Text content={props.context} variant="label" />
      <div>
        <InlineProseSelect<OnOff>
          value={props.enabled ? "on" : "off"}
          options={ON_OFF_OPTIONS}
          onChange={props.onChange}
          ariaLabel={props.ariaLabel}
        />
      </div>
    </div>
  )
}
