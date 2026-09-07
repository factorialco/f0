import { useCallback, useEffect, useRef, useState } from "react"

import type { CountryCode } from "@/lib/countries"

import type { F0LocationInputProps, F0LocationSuggestion } from "../types"

const DEBOUNCE_MS = 250
export const MIN_QUERY_LENGTH = 2

type Options = {
  searchPlaces: F0LocationInputProps["searchPlaces"]
  country: CountryCode | undefined
  enabled: boolean
}

/**
 * Debounced suggestion search with a stale-response guard, same shape as the
 * chat mentions hook. Results are never filtered client-side: the provider
 * already ranked them, and a local string match drops accent variants.
 */
export const usePlaceSearch = ({ searchPlaces, country, enabled }: Options) => {
  const [suggestions, setSuggestions] = useState<F0LocationSuggestion[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchIdRef = useRef(0)
  const countryRef = useRef(country)
  countryRef.current = country

  const cancelPending = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = null
    searchIdRef.current += 1
  }, [])

  const reset = useCallback(() => {
    cancelPending()
    setSuggestions([])
    setIsSearching(false)
    setHasSearched(false)
    setOpen(false)
    setActiveIndex(-1)
  }, [cancelPending])

  const close = useCallback(() => {
    setOpen(false)
    setActiveIndex(-1)
  }, [])

  const search = useCallback(
    (query: string) => {
      const trimmed = query.trim()
      setActiveIndex(-1)

      if (!enabled || !searchPlaces || trimmed.length < MIN_QUERY_LENGTH) {
        reset()
        return
      }

      cancelPending()
      setIsSearching(true)
      setOpen(true)
      const currentSearchId = searchIdRef.current

      debounceRef.current = setTimeout(() => {
        searchPlaces(trimmed, { country: countryRef.current })
          .then((data) => {
            if (currentSearchId !== searchIdRef.current) return
            setSuggestions(data)
            setHasSearched(true)
          })
          .catch((error: unknown) => {
            if (currentSearchId !== searchIdRef.current) return
            setSuggestions([])
            setHasSearched(true)
            if (process.env.NODE_ENV !== "production") {
              console.warn("F0LocationInput: searchPlaces rejected", error)
            }
          })
          .finally(() => {
            if (currentSearchId === searchIdRef.current) setIsSearching(false)
          })
      }, DEBOUNCE_MS)
    },
    [enabled, searchPlaces, cancelPending, reset]
  )

  // A country change makes every cached suggestion wrong
  const previousCountryRef = useRef(country)
  useEffect(() => {
    if (previousCountryRef.current === country) return
    previousCountryRef.current = country
    reset()
  }, [country, reset])

  useEffect(() => cancelPending, [cancelPending])

  return {
    suggestions,
    isSearching,
    hasSearched,
    open,
    setOpen,
    activeIndex,
    setActiveIndex,
    search,
    close,
    reset,
  }
}
