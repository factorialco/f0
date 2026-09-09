import { F0Box, F0Text } from "@factorialco/f0-react"
import { useEffect, useRef, useState, type ReactNode } from "react"

import type { Message } from "./state"

import { Brief } from "./Brief"
export function Stack({ children }: { children: ReactNode }) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {children}
    </F0Box>
  )
}
export function Card({ children }: { children: ReactNode }) {
  return (
    <F0Box border="default" borderRadius="xl" padding="lg" background="primary">
      <Stack>{children}</Stack>
    </F0Box>
  )
}
export function Reveal({
  text,
  onDone,
}: {
  text: string
  onDone?: () => void
}) {
  const [length, setLength] = useState(0)
  const done = useRef(onDone)
  done.current = onDone
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLength(text.length)
      done.current?.()
      return
    }
    let count = 0
    setLength(0)
    const timer = setInterval(() => {
      count = Math.min(
        text.length,
        count + Math.max(8, Math.ceil(text.length / 24))
      )
      setLength(count)
      if (count === text.length) {
        clearInterval(timer)
        done.current?.()
      }
    }, 40)
    return () => clearInterval(timer)
  }, [text])
  return (
    <F0Box role="status" aria-live="polite" aria-busy={length < text.length}>
      <F0Text
        content={length ? text.slice(0, length) : "Revisando qué ha cambiado…"}
        markdown={false}
      />
    </F0Box>
  )
}
export function Transcript({
  history,
  pending,
  pin,
  pinned,
  onOpen,
  onDone,
}: {
  history: Message[]
  pending: string | null
  pin?: (widget: string) => void
  pinned: string[]
  onOpen: (text: string) => void
  onDone: () => void
}) {
  const viewport = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = viewport.current
    if (node) node.scrollTop = history.length > 1 ? node.scrollHeight : 0
  }, [history.length, pending])
  return (
    <F0Box
      ref={viewport}
      grow
      minHeight="0"
      overflowY="auto"
      paddingRight="md"
      role="log"
      aria-label="Conversación con tu agente"
    >
      <Stack>
        {history.map((entry, index) => (
          <F0Box
            key={index}
            padding={entry.who === "you" ? "lg" : "xs"}
            background={entry.who === "you" ? "secondary" : "transparent"}
            borderRadius="lg"
          >
            <Stack>
              {entry.who === "you" && <F0Text content="Tú" variant="small" />}
              <F0Text content={entry.text} markdown={false} />
              {entry.blocks && (
                <Brief
                  topics={entry.blocks}
                  compact={index === 0}
                  previewGrid={index === 0}
                  pin={index > 0 && index === history.length - 1 ? pin : undefined}
                  pinned={pinned}
                  onOpen={onOpen}
                />
              )}
              {entry.question && (
                <F0Text
                  content={entry.question}
                  variant="label"
                  markdown={false}
                />
              )}
            </Stack>
          </F0Box>
        ))}
        {pending && <Reveal text={pending} onDone={onDone} />}
      </Stack>
    </F0Box>
  )
}
