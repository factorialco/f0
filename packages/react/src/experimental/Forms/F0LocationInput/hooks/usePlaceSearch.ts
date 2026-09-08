import { useCallback, useEffect, useRef, useState } from "react"
import type { CountryCode } from "@/lib/countries"
import { invokeAsync } from "../lib/invokeAsync"
import type { F0LocationInputProps, F0LocationSuggestion } from "../types"

const DEBOUNCE_MS = 250
export const MIN_QUERY_LENGTH = 2

type Options = {
  searchPlaces: NonNullable<F0LocationInputProps["searchPlaces"]>
  country: CountryCode | undefined
  enabled: boolean
}

/**
 * `error` is kept apart from `empty` on purpose: a provider that failed and a
 * provider that legitimately found nothing look identical to the user
 * otherwise, and "no addresses found" for an address that exists is a lie.
 */
export type PlaceSearchStatus = "idle" | "searching" | "empty" | "error"

/**
 * Debounced suggestion search with a stale-response guard, same shape as the
 * chat mentions hook. Results are never filtered locally: the provider already
 * ranked them, and a local string match drops accent variants.
 */
export const usePlaceSearch = ({ searchPlaces, country, enabled }: Options) => {
  const [suggestions, setSuggestions] = useState<F0LocationSuggestion[]>([])
  const [status, setStatus] = useState<PlaceSearchStatus>("idle")
  const [query, setQuery] = useState("")

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchIdRef = useRef(0)
  const countryRef = useRef(country)
  countryRef.current = country

  const cancelPending = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = null
    searchIdRef.current += 1
  }, [])

  const reset = useCallback(() => {
    cancelPending()
    setSuggestions([])
    setStatus("idle")
    setQuery("")
  }, [cancelPending])

  const search = useCallback(
    (nextQuery: string) => {
      setQuery(nextQuery)
      const trimmed = nextQuery.trim()

      if (!enabled || trimmed.length < MIN_QUERY_LENGTH) {
        cancelPending()
        setSuggestions([])
        setStatus("idle")
        return
      }

      cancelPending()
      setStatus("searching")
      const currentSearchId = searchIdRef.current

      debounceRef.current = setTimeout(() => {
        // Called bare, a synchronous throw would escape the timer with no
        // promise to reject and leave the field on "searching" forever
        invokeAsync(() =>
          searchPlaces(trimmed, { country: countryRef.current })
        )
          .then((data) => {
            if (currentSearchId !== searchIdRef.current) {
              return
            }
            setSuggestions(data)
            setStatus(data.length ? "idle" : "empty")
          })
          .catch((error: unknown) => {
            if (currentSearchId !== searchIdRef.current) {
              return
            }
            setSuggestions([])
            setStatus("error")
            if (process.env.NODE_ENV !== "production") {
              console.warn("F0LocationInput: searchPlaces rejected", error)
            }
          })
      }, DEBOUNCE_MS)
    },
    [enabled, searchPlaces, cancelPending]
  )

  // A country change makes every cached suggestion wrong
  const previousCountryRef = useRef(country)
  useEffect(() => {
    if (previousCountryRef.current === country) {
      return
    }
    previousCountryRef.current = country
    reset()
  }, [country, reset])

  useEffect(() => cancelPending, [cancelPending])

  return {
    suggestions,
    status,
    isSearching: status === "searching",
    query,
    search,
    reset,
  }
}
