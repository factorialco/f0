import {
  F0Button,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  Check,
  CheckCircle,
  Cross,
  ExternalLink,
  Phone,
  Warning,
  WhatsappChat,
} from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { DISCLOSURE } from "../whatsapp-capture/shared/data"
import type { PrototypeMeta } from "../types"

/**
 * Surface 5 — WhatsApp Capture · Magic Link
 *
 * Full-screen one-time-use confirmation page that an employee opens
 * from a SMS or email invite. Mobile-first layout. Four states:
 *
 * - validating:  spinner while the token is checked
 * - confirm:     phone preview + confirm button (the "happy path")
 * - success:     linked, with the connected WhatsApp number
 * - error:       expired / used / invalid link
 *
 * The page renders edge-to-edge by overlaying the catalog's
 * FactorialShell with `position: fixed; inset: 0`. This keeps the
 * prototype reachable from the catalog while letting the mobile-style
 * artwork own the entire viewport.
 */

type LinkState = "validating" | "confirm" | "success" | "error"

const STATE_LABEL: Record<LinkState, string> = {
  validating: "Validando",
  confirm: "Confirmar",
  success: "Vinculado",
  error: "Error",
}

export const meta: PrototypeMeta = {
  slug: "whatsapp-capture-magic-link",
  title: "WhatsApp Capture · Enlace de vinculación",
  description:
    "Pantalla full-screen que recibe el empleado al abrir el enlace de un solo uso para vincular su WhatsApp con la captura por IA. Cuatro estados: validando, confirmar, éxito y error.",
  category: "Settings",
  module: "profile",
  audience: ["employee"],
  tags: ["whatsapp", "mobile", "onboarding", "auth"],
  createdAt: "2026-05-07",
}

export default function WhatsappCaptureMagicLink() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("state")
  const initial: LinkState =
    raw === "confirm" || raw === "success" || raw === "error"
      ? raw
      : "validating"

  const [state, setStateLocal] = useState<LinkState>(initial)

  // Auto-progress validating → confirm after 1.5s, but only when the URL
  // doesn't pin a state. This makes the demo feel real on first load
  // while still letting designers freeze a state with `?state=…`.
  useEffect(() => {
    if (raw) return
    if (state !== "validating") return
    const t = window.setTimeout(() => setStateLocal("confirm"), 1500)
    return () => window.clearTimeout(t)
  }, [raw, state])

  const setState = (next: LinkState) => {
    setStateLocal(next)
    const params = new URLSearchParams(searchParams)
    params.set("state", next)
    setSearchParams(params)
  }

  return (
    <>
      <div className="fixed inset-0 z-30 flex flex-col bg-f1-background-positive-bold text-f1-foreground-inverse">
        {/* Top bar with close + state switcher */}
        <header className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <WhatsappChat className="h-5 w-5" />
            <span className="text-sm font-semibold">Factorial · WhatsApp Capture</span>
          </div>
          <div className="flex items-center gap-1">
            {(Object.keys(STATE_LABEL) as LinkState[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setState(s)}
                aria-label={`Estado: ${STATE_LABEL[s]}`}
                className={
                  "rounded-full border border-white/30 px-2 py-0.5 text-xs " +
                  (state === s
                    ? "bg-white/30"
                    : "bg-transparent hover:bg-white/10")
                }
              >
                {STATE_LABEL[s]}
              </button>
            ))}
          </div>
        </header>

        {/* Phone-frame card centered */}
        <main className="flex flex-1 items-center justify-center px-4 py-8">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-f1-background text-f1-foreground shadow-2xl">
            {state === "validating" && <ValidatingView />}
            {state === "confirm" && (
              <ConfirmView onConfirm={() => setState("success")} onCancel={() => setState("error")} />
            )}
            {state === "success" && <SuccessView />}
            {state === "error" && <ErrorView onRetry={() => setState("validating")} />}
          </div>
        </main>

        <footer className="px-4 py-3 text-center text-xs text-white/70">
          Mendoza Instalaciones · Factorial
        </footer>
      </div>
    </>
  )
}

function ValidatingView() {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-f1-background-secondary border-t-f1-foreground-positive" />
      <F0Heading
        content="Validando tu enlace"
        variant="heading"
        as="h1"
      />
      <F0Text
        content="Estamos comprobando que el enlace siga siendo válido."
        variant="description"
      />
    </div>
  )
}

function ConfirmView({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
          <WhatsappChat className="h-7 w-7" />
        </div>
        <F0Heading
          content="Vincula tu WhatsApp con Factorial"
          variant="heading-large"
          as="h1"
        />
        <F0Text
          content="Confirma tu número y empieza a registrar costes, horas y notas con un mensaje."
          variant="description"
        />
      </div>

      <div className="flex items-center gap-3 rounded-md border border-f1-border bg-f1-background-secondary px-4 py-3">
        <Phone className="h-5 w-5 text-f1-foreground-secondary" />
        <div className="flex flex-col">
          <F0Text content="Tu número" variant="description" />
          <F0Text content="+34 612 345 678" variant="body" />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-md bg-f1-background-secondary p-4">
        <F0Text content="Qué pasa al confirmar" variant="description" />
        <Bullet text="Verás un nuevo contacto «Factorial» en WhatsApp." />
        <Bullet text="Cuando le escribas, la IA creará la acción correspondiente en Factorial." />
        <Bullet text="Puedes desvincularte en cualquier momento escribiendo STOP." />
      </div>

      <div className="rounded-md border border-f1-border bg-f1-background-secondary p-3 text-xs text-f1-foreground-secondary">
        {DISCLOSURE.body}
      </div>

      <a
        href={DISCLOSURE.privacyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-xs font-medium text-f1-foreground-info hover:underline"
      >
        {DISCLOSURE.privacyLabel}
        <ExternalLink className="h-3 w-3" />
      </a>

      <div className="flex flex-col gap-2 pt-2">
        <F0Button
          label="Vincular mi WhatsApp"
          icon={WhatsappChat}
          onClick={onConfirm}
        />
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-f1-foreground-secondary hover:underline"
        >
          No reconozco esta solicitud
        </button>
      </div>
    </div>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-f1-foreground-positive" />
      <F0Text content={text} variant="body" />
    </div>
  )
}

function SuccessView() {
  return (
    <div className="flex flex-col gap-4 px-6 py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-f1-background-positive text-f1-foreground-positive">
        <CheckCircle className="h-8 w-8" />
      </div>
      <F0Heading
        content="¡Listo! Ya estás vinculado"
        variant="heading-large"
        as="h1"
      />
      <F0Text
        content="Escribe a este número en WhatsApp y empieza. La IA reconocerá costes, horas, gastos, documentos y notas en tu idioma natural."
        variant="body"
      />
      <div className="mx-auto flex items-center gap-3 rounded-md border border-f1-border bg-f1-background-secondary px-4 py-3">
        <WhatsappChat className="h-5 w-5 text-f1-foreground-positive" />
        <div className="flex flex-col items-start">
          <F0Text content="Número de Factorial" variant="description" />
          <F0Text content="+34 900 123 456" variant="body" />
        </div>
      </div>
      <a
        href="https://wa.me/34900123456?text=Hola%20Factorial"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-f1-background-positive-bold px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
      >
        <WhatsappChat className="h-4 w-4" />
        Abrir WhatsApp
      </a>
      <F0Text
        content="Puedes cerrar esta página. La conexión se mantiene activa en tu cuenta de Factorial."
        variant="description"
      />
    </div>
  )
}

function ErrorView({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col gap-4 px-6 py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-f1-background-critical text-f1-foreground-critical">
        <Warning className="h-8 w-8" />
      </div>
      <F0Heading
        content="Este enlace ya no es válido"
        variant="heading-large"
        as="h1"
      />
      <F0Text
        content="Por seguridad, los enlaces de vinculación caducan tras 24 horas o tras un primer uso. Pide a tu administrador que te genere uno nuevo."
        variant="body"
      />
      <div className="flex flex-col gap-2">
        <F0Button label="Reintentar" onClick={onRetry} />
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center gap-1 text-sm text-f1-foreground-secondary hover:underline"
        >
          <Cross className="h-3 w-3" />
          Cerrar
        </button>
      </div>
    </div>
  )
}
