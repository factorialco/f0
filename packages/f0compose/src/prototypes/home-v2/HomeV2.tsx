import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { Textarea } from "@factorialco/f0-react/dist/experimental"
import { ArrowUp } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"

import { FactorialAgentIcon } from "../home/FactorialAgentIcon"
import { Brief } from "./Brief"
import { Card, Reveal, Stack, Transcript } from "./Conversation"
import {
  detectTopics,
  isRemoval,
  nextLabel,
  prompts,
  reportDetails,
  reports,
  routineDetails,
  routines,
  steps,
  widgetFor,
  type Step,
} from "./data"
import { initial, useSetup, type Message } from "./state"
import { WidgetRail } from "./WidgetRail"
export const meta: PrototypeMeta = {
  slug: "home-v2",
  title: "Home · Tu agente personal",
  category: "Other",
  module: "home",
  audience: ["manager"],
  createdAt: "2026-09-09",
  description:
    "Una puesta al día visual que se adapta conversando: prioridades, widgets, rutinas y seguimiento.",
  sidebar: Navigation,
}
function Navigation() {
  return (
    <F0Box
      width="48"
      height="full"
      padding="xl"
      background="secondary"
      display="flex"
      flexDirection="column"
      gap="xl"
    >
      <F0Heading content="Tu espacio" />
      <F0Text content="Alicia · Factorial" variant="description" />
      <F0Button label="Home" variant="neutral" href="/p/home-v2?view=home" />
      <F0Button label="Conversaciones" variant="ghost" href="/p/home-v2" />
      <F0Button
        label="Rutinas"
        variant="ghost"
        href="/p/home-v2?view=routines"
      />
      <F0Button
        label="Reports"
        variant="ghost"
        href="/p/home-v2?view=reports"
      />
      <F0Box grow />
      <F0Button label="Home original" variant="ghost" href="/p/home" />
    </F0Box>
  )
}
export default function HomeV2() {
  const { state, setState, storageError } = useSetup()
  const [params, setParams] = useSearchParams()
  const view = params.get("view")
  const [pending, setPending] = useState<{
    message: Message
    next?: Step
  } | null>(null)
  const intent = state.intent
  function setIntent(value: typeof state.intent) {
    setState((s) => ({ ...s, intent: value }))
  }
  const [removed, setRemoved] = useState<{
    widget: string
    index: number
  } | null>(null)
  const [reset, setReset] = useState(false)
  const [visitReady, setVisitReady] = useState(false)
  const configuring = !state.paused && state.step !== "done" && !view
  const management = view === "routines" || view === "reports"
  const home = view === "home"
  function say(
    text: string,
    next?: Step,
    blocks?: string[],
    question?: string
  ) {
    setPending({ message: { who: "agent", text, blocks, question }, next })
  }
  function user(text: string) {
    setState((s) => ({ ...s, history: [...s.history, { who: "you", text }] }))
  }
  function done() {
    if (!pending) return
    setState((s) => ({
      ...s,
      step: pending.next ?? s.step,
      history: [...s.history, pending.message],
    }))
    setPending(null)
  }
  useEffect(() => {
    if (pending && (home || management)) {
      setState((s) => ({
        ...s,
        step: pending.next ?? s.step,
        history: [...s.history, pending.message],
      }))
      setPending(null)
    }
  }, [home, management, pending, setState])
  function pin(widget: string) {
    setState((s) => ({
      ...s,
      widgets: s.widgets.includes(widget) ? s.widgets : [...s.widgets, widget],
      history: [
        ...s.history,
        {
          who: "agent",
          text: `«${widget}» ya está siempre a mano. Tu puesta al día mantiene sus propios temas.`,
        },
      ],
    }))
  }
  function removeWidget(widget: string) {
    setRemoved({ widget, index: state.widgets.indexOf(widget) })
    setState((s) => ({ ...s, widgets: s.widgets.filter((w) => w !== widget) }))
  }
  function undoWidget() {
    if (!removed) return
    setState((s) => {
      const widgets = s.widgets.filter((w) => w !== removed.widget)
      widgets.splice(Math.max(0, removed.index), 0, removed.widget)
      return { ...s, widgets }
    })
    setRemoved(null)
  }
  function openBlock(text: string) {
    user(text)
    setParams({})
    say(
      /informe/i.test(text)
        ? "Retomamos el borrador: 8 prioridades completadas y 2 proyectos por revisar. La próxima sección es la cobertura de la semana que viene."
        : "Hoy hay 12 de 14 personas disponibles. El viernes coinciden 3 ausencias y la cobertura baja al 79 %. Puedes revisar el reparto antes de aprobar nuevas solicitudes. No he modificado ninguna solicitud."
    )
  }
  function resume() {
    setState((s) => ({ ...s, paused: false }))
    setParams({})
  }
  function revisit() {
    setState((s) => ({ ...s, visits: s.visits + 1, paused: s.step !== "done" }))
    setVisitReady(false)
    setParams({ view: "home" })
  }
  function advance() {
    if (state.step === "widgets") {
      user("Guardar mi home")
      say(
        "Tu home está lista. Puedes ajustar la puesta al día y los widgets cuando quieras. Todo lo acordado queda guardado para tu próxima visita.",
        "done"
      )
      return
    }
    user(nextLabel[state.step])
    const next =
      steps[Math.min(steps.indexOf(state.step) + 1, steps.length - 1)]
    say(
      state.step === "priorities"
        ? "Así podría ponerte al día cada vez que vuelvas. He seleccionado lo que merece tu atención ahora."
        : prompts[next],
      next,
      state.step === "priorities" || next === "widgets"
        ? state.priorities.slice(0, 3)
        : undefined,
      state.step === "priorities"
        ? "¿Te sirve este ejemplo o quieres cambiar algo?"
        : next === "widgets"
          ? "La columna derecha muestra tus widgets actuales. Puedes conservarlos, quitarlos o pedirme otros antes de guardar tu home."
          : undefined
    )
  }
  function choose(option: string) {
    const field = state.step === "reports" ? "reports" : "routines"
    const remove = state[field].includes(option)
    user(`${remove ? "Quitar" : "Añadir"}: ${option}`)
    setState((s) => ({
      ...s,
      [field]: remove
        ? s[field].filter((x) => x !== option)
        : [...s[field], option],
    }))
    say(
      remove
        ? `He retirado «${option}».`
        : `Para «${option}» te propongo:\n\n${(field === "routines" ? routineDetails : reportDetails)[option]}\n\nLo dejaré preparado cuando confirmes. ¿Quieres ajustar algo?`
    )
  }
  function applyIntent(always: boolean) {
    if (!intent) return
    const topics = intent.topics
    const remove = isRemoval(intent.text)
    const replace = /\b(solo|sólo|únicamente)\b/i.test(intent.text)
    const next = remove
      ? state.priorities.filter((x) => !topics.includes(x))
      : replace
        ? topics
        : [...new Set([...topics, ...state.priorities])]
    if (always) setState((s) => ({ ...s, priorities: next }))
    user(always ? "Tenlo en cuenta habitualmente" : "Solo para esta visita")
    setIntent(null)
    say(
      always
        ? "He actualizado tus preferencias. Este sería el resultado."
        : "Lo ajusto solo para esta visita. Tus preferencias habituales se mantienen.",
      state.step === "priorities" ? "summary" : undefined,
      next.slice(0, 3),
      "¿Te sirve así?"
    )
  }
  function send() {
    const text = state.draft.trim()
    if (!text) return
    setState((s) => ({ ...s, draft: "" }))
    user(text)
    if (home) setParams({})
    const topics = detectTopics(text)
    const widgetRequest =
      /widget|derecha|siempre a mano|fij[ao]|fijar/i.test(text) ||
      (configuring && state.step === "widgets")
    if (widgetRequest) {
      if (!topics.length) {
        say(
          "Puedo añadir o quitar Pendientes, Disponibilidad del equipo, Communities o Presupuesto. ¿Cuál quieres cambiar?"
        )
        return
      }
      const changed = topics.map(widgetFor)
      const remove = isRemoval(text)
      if (remove && changed.length === 1 && state.widgets.includes(changed[0]))
        setRemoved({
          widget: changed[0],
          index: state.widgets.indexOf(changed[0]),
        })
      setState((s) => ({
        ...s,
        widgets: remove
          ? s.widgets.filter((w) => !changed.includes(w))
          : [...new Set([...s.widgets, ...changed])],
      }))
      say(
        `${remove ? "He quitado" : "Ya tienes"} ${changed.join(", ")}${remove ? " de los widgets" : " a la derecha"}. Tu puesta al día mantiene sus propios temas. Estos cambios se conservarán al volver.`
      )
      return
    }
    if (
      topics.length &&
      !(configuring && (state.step === "routines" || state.step === "reports"))
    ) {
      setIntent({ text, topics })
      say(
        "Puedo ajustar los temas de tu puesta al día. ¿Lo necesitas solo ahora o quieres que lo tenga en cuenta habitualmente?"
      )
      return
    }
    if (
      configuring &&
      (state.step === "routines" || state.step === "reports")
    ) {
      const field = state.step
      setState((s) => ({ ...s, [field]: [...s[field], text] }))
      say(
        `He guardado «${text}» como propuesta por concretar. En esta demo podemos revisar los ejemplos preparados; esta petición libre necesitaría acordar sus condiciones.`
      )
      return
    }
    say(
      /ausencia|cobertura/i.test(text)
        ? "El viernes coinciden 3 ausencias. Antes de aprobar otra, revisaría quién puede cubrir las tareas pendientes. Las solicitudes siguen sin cambios; este es un ejemplo de análisis."
        : /informe/i.test(text)
          ? "Retomamos el borrador: 8 prioridades completadas, 2 proyectos que requieren seguimiento y la cobertura de la próxima semana por confirmar. Está preparado para tu revisión."
          : "He recogido tu petición. En esta exploración podemos revisar decisiones, equipo, Communities y presupuesto; el resto queda pendiente de concretar."
    )
  }
  const small = state.history.length > 1
  const update =
    state.visits > 1
      ? "Todo sigue al día desde tu última visita. Puedes retomar la revisión que dejamos pendiente."
      : state.priorities.includes("Decisiones pendientes")
        ? "Hay dos asuntos que conviene revisar. He reunido tus pendientes y las novedades relevantes."
        : "He revisado los temas que quieres seguir. Aquí tienes tu puesta al día, con el contexto de cada uno."
  return (
    <F0Box
      padding="xl"
      height="full"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="xl"
      overflow="hidden"
    >
      <F0Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        gap="md"
      >
        <F0Text content="Home" variant="description" />
        <F0Box display="flex" gap="md">
          <F0Button
            label="Simular regreso"
            variant="ghost"
            disabled={!!pending}
            onClick={revisit}
          />
          <F0Button
            label="Reiniciar demo"
            variant="ghost"
            onClick={() => setReset(true)}
          />
        </F0Box>
      </F0Box>
      {reset && (
        <Card>
          <F0Text content="¿Empezar de nuevo esta exploración?" />
          <F0Box display="flex" gap="md">
            <F0Button
              label="Empezar de nuevo"
              onClick={() => {
                setState(initial())
                setRemoved(null)
                setPending(null)
                setIntent(null)
                setParams({})
                setReset(false)
              }}
            />
            <F0Button
              label="Cancelar"
              variant="ghost"
              onClick={() => setReset(false)}
            />
          </F0Box>
        </Card>
      )}
      {storageError && (
        <F0Text content="No se ha podido guardar el progreso en este navegador." />
      )}
      <F0Box
        display="grid"
        columns="1"
        lg={{ columns: "3" }}
        gap="2xl"
        grow
        minHeight="0"
        overflowY="auto"
      >
        <F0Box
          lg={{ colSpan: "2" }}
          display="flex"
          flexDirection="column"
          gap="lg"
          height="full"
          minHeight="0"
        >
          <F0Box
            display="flex"
            flexDirection={small ? "row" : "column"}
            alignItems={small ? "center" : "start"}
            gap="lg"
            shrink={false}
          >
            <F0Box width={small ? "10" : "16"} height={small ? "10" : "16"}>
              <FactorialAgentIcon width="100%" height="100%" />
            </F0Box>
            <F0Heading
              content={
                management
                  ? view === "routines"
                    ? "Tus rutinas"
                    : "Tu seguimiento y reports"
                  : home
                    ? state.visits > 1
                      ? "Alicia, retomamos donde lo dejamos"
                      : state.priorities.includes("Decisiones pendientes")
                        ? "Alicia, hay dos cosas que conviene revisar"
                        : "Alicia, aquí tienes tu puesta al día"
                    : small
                      ? "Seguimos preparando tu espacio"
                      : "Hola, Alicia. Vamos a preparar tu espacio."
              }
              variant={small ? "heading" : "heading-large"}
              as="h1"
            />
          </F0Box>
          {management ? (
            <F0Box grow minHeight="0" overflowY="auto">
              <Stack>
                {!(view === "routines" ? state.routines : state.reports)
                  .length && (
                  <F0Text content="Todavía no hemos configurado nada aquí." />
                )}
                {(view === "routines" ? state.routines : state.reports).map(
                  (item) => (
                    <Card key={item}>
                      <F0Heading content={item} />
                      <F0Text
                        content={
                          (view === "routines"
                            ? routineDetails
                            : reportDetails)[item] ??
                          "Pendiente de concretar condiciones contigo."
                        }
                      />
                      <F0Text
                        content={
                          !(
                            view === "routines" ? routineDetails : reportDetails
                          )[item]
                            ? "Por concretar"
                            : (
                                  view === "routines"
                                    ? steps.indexOf(state.step) > 3
                                    : state.step === "done"
                                )
                              ? "Configurado · Simulado"
                              : "Propuesta por confirmar"
                        }
                        variant="small"
                      />
                    </Card>
                  )
                )}
                <F0Button
                  label="Volver a la conversación"
                  variant="outline"
                  onClick={resume}
                />
              </Stack>
            </F0Box>
          ) : home ? (
            <F0Box grow minHeight="0" overflowY="auto">
              <Stack>
                <Reveal
                  key={state.visits}
                  text={update}
                  onDone={() => setVisitReady(true)}
                />
                {visitReady && (
                  <Brief
                    topics={state.priorities.slice(0, 3)}
                    onOpen={(text) => {
                      user(text)
                      setParams({})
                      say(
                        text.includes("informe")
                          ? "Retomamos el borrador que dejaste pendiente. 8 prioridades completadas y 2 proyectos por revisar."
                          : "Las tres solicitudes coinciden el viernes. Conviene revisar la cobertura antes de aprobarlas."
                      )
                    }}
                  />
                )}
                {state.step !== "done" && (
                  <F0Button
                    label="Continuar la configuración"
                    variant="outline"
                    onClick={resume}
                  />
                )}
                <F0Button
                  label="Retomar mi conversación"
                  variant="ghost"
                  onClick={() => setParams({})}
                />
              </Stack>
            </F0Box>
          ) : (
            <Transcript
              history={state.history}
              pending={pending?.message.text ?? null}
              onDone={done}
              pin={!pending ? pin : undefined}
              pinned={state.widgets}
              onOpen={(text) => {
                user(text)
                say(
                  text.includes("informe")
                    ? "Retomamos el borrador: 8 prioridades completadas y 2 proyectos pendientes de revisión."
                    : "Tres solicitudes coinciden el viernes. La cobertura quedaría en el 79 %. Antes de decidir, revisaría el reparto del trabajo."
                )
              }}
            />
          )}
          {!management && (
            <F0Box shrink={false}>
              <Stack>
                {configuring &&
                  !pending &&
                  !intent &&
                  (state.step === "routines" || state.step === "reports") && (
                    <F0Box display="flex" gap="md" flexWrap="wrap">
                      {(state.step === "routines" ? routines : reports).map(
                        (option) => (
                          <F0Button
                            key={option}
                            label={`${state[state.step === "routines" ? "routines" : "reports"].includes(option) ? "✓ " : ""}${option}`}
                            variant="outline"
                            size="sm"
                            onClick={() => choose(option)}
                          />
                        )
                      )}
                    </F0Box>
                  )}
                {intent && !pending && (
                  <F0Box display="flex" gap="md">
                    <F0Button
                      label="Solo ahora"
                      variant="outline"
                      onClick={() => applyIntent(false)}
                    />
                    <F0Button
                      label="Habitualmente"
                      onClick={() => applyIntent(true)}
                    />
                  </F0Box>
                )}
                <Card>
                  <Textarea
                    label="Mensaje para tu agente"
                    hideLabel
                    placeholder={
                      state.history.length === 1
                        ? "Cuéntame qué es importante para ti…"
                        : "Escribe a tu agente personal…"
                    }
                    rows={2}
                    value={state.draft}
                    onChange={(draft) => setState((s) => ({ ...s, draft }))}
                    disabled={!!pending || !!intent}
                  />
                  <F0Box
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    gap="md"
                  >
                    <F0Button
                      label={
                        configuring
                          ? "Continuar después"
                          : "Tu conversación está guardada"
                      }
                      variant="ghost"
                      size="sm"
                      disabled={!!pending || !configuring}
                      onClick={() => {
                        setState((s) => ({ ...s, paused: true }))
                        setParams({ view: "home" })
                      }}
                    />
                    <F0Box display="flex" gap="md">
                      {configuring && !intent && (
                        <F0Button
                          label={
                            state.step === "priorities"
                              ? "Probar este punto de partida"
                              : state.step === "widgets"
                                ? "Guardar mi home"
                                : nextLabel[state.step]
                          }
                          variant="outline"
                          size="sm"
                          disabled={!!pending || !!state.draft.trim()}
                          onClick={advance}
                        />
                      )}
                      <F0Button
                        label="Enviar"
                        icon={ArrowUp}
                        hideLabel
                        disabled={!!pending || !!intent || !state.draft.trim()}
                        onClick={send}
                      />
                    </F0Box>
                  </F0Box>
                </Card>
                <F0Text
                  content="Prototipo · Datos y respuestas de ejemplo"
                  variant="small"
                />
              </Stack>
            </F0Box>
          )}
        </F0Box>
        <WidgetRail
          widgets={state.widgets}
          onAdd={pin}
          onRemove={removeWidget}
          onOpen={openBlock}
          undo={removed?.widget ?? null}
          onUndo={undoWidget}
        />
      </F0Box>
    </F0Box>
  )
}
