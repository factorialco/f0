import { useEffect, useState } from "react"

type Params<T extends boolean> = {
  value: T
  delay: number
}

export const useDebounceBoolean = <T extends boolean>({ value, delay }: Params<T>) => {
  const [debouncedValue, setDebouncedValue] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (value) {
      timeout = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    } else {
      setDebouncedValue(false)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [value, delay])

  return debouncedValue
}
