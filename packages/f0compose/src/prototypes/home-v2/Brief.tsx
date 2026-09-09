import {
  F0AvatarPerson,
  F0Box,
  F0Button,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { useState } from "react"

import { community, tasks, team, topicFor, widgetFor } from "./data"
export function Brief({
  topics,
  pin,
  onOpen,
  compact = false,
  previewGrid = false,
  pinned = [],
}: {
  topics: string[]
  pin?: (widget: string) => void
  onOpen?: (text: string) => void
  compact?: boolean
  previewGrid?: boolean
  pinned?: string[]
}) {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <F0Box
      display={previewGrid ? "grid" : "flex"}
      columns={previewGrid ? "2" : "1"}
      flexDirection="column"
      gap="lg"
    >
      {topics.map((topic) => {
        const name = topicFor(topic)
        const widget = widgetFor(name)
        return (
          <F0Box
            key={topic}
            border="default"
            borderRadius="xl"
            padding="lg"
            background="primary"
          >
            <F0Box display="flex" flexDirection="column" gap="lg">
              <F0Box
                display="flex"
                justifyContent="between"
                alignItems="center"
                gap="md"
              >
                <F0Text
                  content={
                    name === "Decisiones pendientes"
                      ? "Necesita tu atención"
                      : name === "Mi equipo"
                        ? "Tu equipo"
                        : name === "Gastos y presupuesto"
                          ? "Presupuesto"
                          : name
                  }
                  variant="label"
                />
                {name === "Decisiones pendientes" && (
                  <F0TagStatus text="2 pendientes" variant="warning" />
                )}
              </F0Box>
              {name === "Decisiones pendientes" ? (
                tasks
                  .slice(0, compact && expanded !== name ? 1 : 2)
                  .map((task) => (
                    <F0Box
                      key={task.title}
                      padding="md"
                      background="secondary"
                      borderRadius="lg"
                    >
                      <F0Box display="flex" flexDirection="column" gap="md">
                        <F0Text content={task.title} variant="label" />
                        <F0Text content={task.detail} variant="description" />
                        {onOpen && (
                          <F0Box>
                            <F0Button
                              label={task.action}
                              variant="ghost"
                              size="sm"
                              onClick={() => onOpen(task.title)}
                            />
                          </F0Box>
                        )}
                      </F0Box>
                    </F0Box>
                  ))
              ) : name === "Communities" ? (
                <>
                  <F0Box display="flex" gap="md" alignItems="center">
                    <F0AvatarPerson
                      firstName={community.firstName}
                      lastName={community.lastName}
                      size="sm"
                    />
                    <F0Box>
                      <F0Text
                        content={`${community.firstName} ${community.lastName}`}
                        variant="label"
                      />
                      <F0Text content={community.channel} variant="small" />
                    </F0Box>
                  </F0Box>
                  <F0Heading content={community.title} />
                  {(!compact || expanded === name) && (
                    <F0Text content={community.body} />
                  )}
                  <F0Text content={community.reactions} variant="small" />
                  {compact && (
                    <F0Button
                      label={
                        expanded === name
                          ? "Cerrar publicación"
                          : "Leer publicación"
                      }
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setExpanded(expanded === name ? null : name)
                      }
                    />
                  )}
                </>
              ) : name === "Mi equipo" ? (
                <>
                  <F0Box display="flex" gap="md" alignItems="center">
                    <F0Heading
                      content="12 de 14"
                      variant="heading-large"
                      as="h3"
                    />
                    <F0TagStatus text="Disponibles hoy" variant="positive" />
                  </F0Box>
                  <F0Box display="flex" gap="sm">
                    {team.map((person) => (
                      <F0AvatarPerson
                        key={person.firstName}
                        {...person}
                        size="sm"
                      />
                    ))}
                  </F0Box>
                  <F0Text
                    content="El viernes, 3 personas estarán fuera. Revisa la cobertura antes de aprobar nuevas ausencias."
                    variant="description"
                  />
                </>
              ) : name === "Gastos y presupuesto" ? (
                <>
                  <F0Heading content="84 %" variant="heading-large" as="h3" />
                  <F0TagStatus
                    text="Dentro del presupuesto"
                    variant="positive"
                  />
                  <F0Text content="6.400 € disponibles · Servicios externos es la partida que más crece." />
                </>
              ) : (
                <F0Text content="Tema anotado. Concretaremos contigo qué dato y qué fuente utilizar para este bloque." />
              )}
              {name === "Decisiones pendientes" && compact && (
                <F0Button
                  label={
                    expanded === name
                      ? "Mostrar menos pendientes"
                      : "Ver los 2 pendientes"
                  }
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpanded(expanded === name ? null : name)}
                />
              )}
              {name === "Mi equipo" && onOpen && (
                <F0Button
                  label="Revisar disponibilidad"
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpen("Revisar disponibilidad del equipo")}
                />
              )}
              {pin && (
                <F0Box borderTop="default" paddingTop="md">
                  <F0Button
                    label={
                      pinned.includes(widget)
                        ? "✓ Siempre a mano"
                        : "Dejar siempre a mano"
                    }
                    variant="ghost"
                    size="sm"
                    disabled={pinned.includes(widget)}
                    onClick={() => pin(widget)}
                  />
                </F0Box>
              )}
            </F0Box>
          </F0Box>
        )
      })}
    </F0Box>
  )
}
