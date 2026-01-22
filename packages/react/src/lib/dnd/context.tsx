import { createContext, ReactNode, useContext, useMemo, useRef } from "react"

import type { DndDriver } from "./types"

type DndContextValue = {
  driver: DndDriver
}

const Ctx = createContext<DndContextValue | null>(null)

export function useDndContext(): DndContextValue {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useDndContext must be used within DndProvider")
  return ctx
}

export function useDndContextOptional(): DndContextValue | null {
  return useContext(Ctx)
}

export function DndProvider({
  driver,
  children,
}: {
  driver: DndDriver
  children: ReactNode
}) {
  const driverRef = useRef(driver)
  const value = useMemo<DndContextValue>(
    () => ({ driver: driverRef.current }),
    []
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
