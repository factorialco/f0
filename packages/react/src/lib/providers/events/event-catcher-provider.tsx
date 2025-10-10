"use client"

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react"
import { EventCatcherFunction } from "./types"

type ContextType = { onEvent: EventCatcherFunction }

const EventCatcherContext = createContext<ContextType | null>(null)

export interface EventCatcherProviderProps {
  children: ReactNode
  onEvent: EventCatcherFunction
  enabled?: boolean
  // If not provided, all events will be caught
  catchEvents?: string[]
}

export function F0EventCatcherProvider({
  children,
  onEvent,
  enabled = true,
  catchEvents,
}: EventCatcherProviderProps): JSX.Element {
  const handleEvent = useCallback<EventCatcherFunction>(
    (eventName, params) => {
      if (!enabled || (catchEvents && !catchEvents.includes(eventName))) {
        return
      }

      onEvent(eventName, params)
    },
    [enabled, catchEvents, onEvent]
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
