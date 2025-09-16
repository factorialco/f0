"use client"

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react"
import { useIsDev } from "../user-platafform"
import { EventCatcherFunction } from "./types"

type ContextType = { onEvent: EventCatcherFunction }

const EventCatcherContext = createContext<ContextType | null>(null)

export interface EventCatcherProviderProps {
  children: ReactNode
  onEvent: EventCatcherFunction
  enabled?: boolean
  catchEvents?: string[]
}

export function F0EventCatcherProvider({
  children,
  onEvent,
  enabled = true,
  // If not provided, all events will be caught
  catchEvents,
}: EventCatcherProviderProps): JSX.Element {
  const isDev = useIsDev()

  const handleEvent = useCallback<EventCatcherFunction>(
    (eventName, params) => {
      if (!enabled || (catchEvents && !catchEvents.includes(eventName))) {
        return
      }

      if (isDev) {
        console.log("Event caught:", eventName, params)
      }

      onEvent(eventName, params)
    },
    [enabled, catchEvents, onEvent, isDev]
  )

  const value = useMemo(() => ({ onEvent: handleEvent }), [handleEvent])

  return (
    <EventCatcherContext.Provider value={value}>
      {children}
    </EventCatcherContext.Provider>
  )
}

export function useF0EventCatcher() {
  const context = useContext(EventCatcherContext)

  return context ?? { onEvent: () => Promise.resolve(false) }
}
