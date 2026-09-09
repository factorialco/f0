import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { useState } from "react"

import { Brief } from "./Brief"
import { widgetCatalog } from "./data"
export function WidgetRail({
  widgets,
  onAdd,
  onRemove,
  onOpen,
  undo,
  onUndo,
}: {
  widgets: string[]
  onAdd: (widget: string) => void
  onRemove: (widget: string) => void
  onOpen: (text: string) => void
  undo: string | null
  onUndo: () => void
}) {
  const [editing, setEditing] = useState(false)
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="lg"
      background="secondary"
      borderRadius="xl"
      overflowY="auto"
      minHeight="0"
      role="region"
      aria-label="Widgets de tu home"
    >
      <F0Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        gap="md"
      >
        <F0Text content="SIEMPRE A MANO" variant="label" />
        <F0Button
          label={editing ? "Listo" : "Personalizar widgets"}
          variant="ghost"
          size="sm"
          onClick={() => setEditing(!editing)}
        />
      </F0Box>
      <F0Text
        content="Un punto de partida para tu equipo. Puedes cambiarlo aquí o pedírselo a tu agente."
        variant="description"
      />
      {undo && (
        <F0Box
          background="primary"
          padding="md"
          borderRadius="lg"
          role="status"
        >
          <F0Text content={`Has quitado ${undo}.`} variant="small" />
          <F0Button
            label="Deshacer"
            variant="ghost"
            size="sm"
            onClick={onUndo}
          />
        </F0Box>
      )}
      {editing && (
        <F0Box background="primary" padding="lg" borderRadius="lg">
          <F0Box display="flex" flexDirection="column" gap="md">
            <F0Text content="Añadir a mi home" variant="label" />
            {widgetCatalog.map((widget) => (
              <F0Button
                key={widget}
                label={
                  widgets.includes(widget) ? `✓ ${widget}` : `Añadir ${widget}`
                }
                variant="outline"
                size="sm"
                disabled={widgets.includes(widget)}
                onClick={() => onAdd(widget)}
              />
            ))}
          </F0Box>
        </F0Box>
      )}
      {!widgets.length && (
        <F0Box padding="lg">
          <F0Heading content="Tu espacio, a tu manera" />
          <F0Text content="Has elegido una home sin widgets. Tu puesta al día sigue en el chat." />
          <F0Button
            label="Añadir un widget"
            variant="outline"
            onClick={() => setEditing(true)}
          />
        </F0Box>
      )}
      {widgets.map((widget) => (
        <F0Box key={widget} role="group" aria-label={`Widget: ${widget}`}>
          <Brief topics={[widget]} compact onOpen={onOpen} />
          {editing && (
            <F0Button
              label={`Quitar ${widget}`}
              variant="ghost"
              size="sm"
              onClick={() => onRemove(widget)}
            />
          )}
        </F0Box>
      ))}
    </F0Box>
  )
}
