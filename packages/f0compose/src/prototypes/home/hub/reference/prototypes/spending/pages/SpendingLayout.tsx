import { StandardLayout } from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useEffect, useState } from "react"

import { SectionHeader } from "@/prototypes/home/hub/reference/framework/components/SectionHeader"
import { SectionTabs } from "@/prototypes/home/hub/reference/framework/components/SectionTabs"
import { useLocale } from "@/prototypes/home/hub/reference/lib/navConfig"
import { Outlet } from "@/prototypes/home/hub/reference/router"

import { SpendingTabs } from "../components/SpendingTabs"
import { expenses as initialExpenses } from "../mocks/expenses"
import {
  SpendingStateContext,
  initialState,
  type SpendingState,
} from "../state"

/**
 * Layout route for the Spending prototype. Owns the co-created UI state
 * (language, scope, onlyDuplicates) and the live, mutable expenses list, plus
 * the persistent page shell (`Page` + `PageHeader` + tabs). Only `<Outlet/>`
 * swaps between child routes.
 */
export function SpendingLayout() {
  // Global UI language from the Configurador's language toggle.
  const locale = useLocale()
  const [state, setState] = useState<SpendingState>(() => ({
    ...initialState,
    language: locale,
  }))
  const [expenses, setExpenses] = useState(initialExpenses)

  // Keep the Spending screen in sync with the global locale. Flipping the
  // Configurador re-renders Spending in that language. Guarded so we only set
  // state when the value actually differs (avoids an infinite render loop) and
  // so the chat-driven language override stands until the global toggle changes.
  useEffect(() => {
    setState((prev) =>
      prev.language === locale ? prev : { ...prev, language: locale }
    )
  }, [locale])

  const approveExpense = useCallback((id: string) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: "approved" as const } : e))
    )
  }, [])

  const rejectExpense = useCallback((id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }, [])

  return (
    <SpendingStateContext.Provider
      value={{
        state,
        setState,
        language: state.language,
        expenses,
        approveExpense,
        rejectExpense,
      }}
    >
      <Page
        embedded
        header={
          <>
            <SectionHeader />
            <SectionTabs />
            <SpendingTabs />
          </>
        }
      >
        <StandardLayout>
          <Outlet />
        </StandardLayout>
      </Page>
    </SpendingStateContext.Provider>
  )
}
