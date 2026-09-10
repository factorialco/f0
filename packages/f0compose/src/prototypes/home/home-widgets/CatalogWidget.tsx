import {
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { useState } from "react"

import type { WidgetRecord } from "./catalog"

import { FactorialAgentIcon } from "../FactorialAgentIcon"
import { toggleClockIn, useClockIn } from "../windows/clockInStore"
export function CatalogWidget({
  record,
  onAsk,
}: {
  record: WidgetRecord
  onAsk: (record: WidgetRecord) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const clock = useClockIn()
  const time = record.title === "Mi jornada"
  return (
    <F0Box border="default" borderRadius="xl" padding="lg" background="primary">
      <F0Box display="flex" flexDirection="column" gap="lg">
        <F0Text content={record.title} variant="label" />
        <F0Heading
          content={
            time
              ? clock.clockedInAt
                ? "Jornada iniciada"
                : "Sin iniciar"
              : record.value
          }
          variant="heading-large"
          as="h3"
        />
        <F0Text content={record.caption} variant="description" />
        <F0Box>
          <F0TagStatus
            text={
              time
                ? clock.clockedInAt
                  ? "Trabajando"
                  : "Pendiente de entrada"
                : record.status
            }
            variant={time && clock.clockedInAt ? "positive" : "neutral"}
          />
        </F0Box>
        {expanded &&
          record.rows.map((row) => (
            <F0Box key={row.title} borderTop="default" paddingTop="md">
              <F0Text content={row.title} variant="label" />
              <F0Text content={row.detail} variant="description" />
            </F0Box>
          ))}
        {time && (
          <F0Button
            label={clock.clockedInAt ? "Fichar salida" : "Fichar entrada"}
            variant="outline"
            onClick={toggleClockIn}
          />
        )}
        <F0Box display="flex" gap="md" flexWrap="wrap">
          <F0Button
            label={expanded ? "Cerrar detalle" : "Ver detalle"}
            size="sm"
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
          />
          <F0Button
            label="Ask Factorial"
            icon={FactorialAgentIcon}
            variant="outline"
            size="sm"
            onClick={() => onAsk(record)}
          />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}
